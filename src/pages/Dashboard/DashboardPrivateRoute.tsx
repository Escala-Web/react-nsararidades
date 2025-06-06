import { ReactNode, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { AuthContext } from "../../context/Auth";
import { useStore } from "../../hooks/Store/useStore";

import { Onboarding } from "../../components/Onboarding";
import { Shipping } from "../../components/Shipping";
import { ActiveStriper } from "../../components/ActiveStriper";

interface PrivateRouteProps {
	children: ReactNode;
}

interface JwtPayload {
	exp: number;
	rule?: string;
	[key: string]: any;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { login } = useContext(AuthContext);
	const { findAllStore, getStores } = useStore();

	const [checkedReasons, setCheckedReasons] = useState(false);
	const [redirectToLogin, setRedirectToLogin] = useState(false);
	const [overrideComponent, setOverrideComponent] = useState<ReactNode | null>(null);

	const token = login?.token;

	// 1. Valida token
	useEffect(() => {
		if (!token) {
			setRedirectToLogin(true);
			return;
		}

		try {
			const decoded = jwtDecode<JwtPayload>(token);
			if (decoded.exp * 1000 < Date.now() || decoded.rule !== "admin") {
				setRedirectToLogin(true);
			}
		} catch {
			setRedirectToLogin(true);
		}
	}, [token]);

	// 2. Busca store se necessário
	useEffect(() => {
		if (!findAllStore?.data && !findAllStore?.loading && getStores) {
			getStores();
		}
	}, [findAllStore, getStores]);

	// 3. Analisa razões e aplica componentes diferentes
	useEffect(() => {
		if (checkedReasons || !Array.isArray(findAllStore?.data?.reasons)) return;

		const reasons = findAllStore.data.reasons;

		if (reasons.some((r) => r?.code === "STORE_NOT_FOUND")) {
			setOverrideComponent(<Onboarding />);
		}

		if (reasons.some((r) => r?.code === "STRIPE_ACCOUNT_MISSING")) {
			setOverrideComponent(
				<ActiveStriper reason="missing" />
			);
		}

		if (reasons.some((r) => r?.code === "STRIPE_ACCOUNT_INACTIVE")) {
			setOverrideComponent(
				<ActiveStriper reason="inactive" />
			);
		}

		if (reasons.some((r) => r?.code === "SHIPPING_TOKEN_MISSING")) {
			setOverrideComponent(<Shipping />);
		}

		setCheckedReasons(true);
	}, [findAllStore?.data?.reasons, checkedReasons]);

	// 4. Redireciona se inválido
	if (redirectToLogin) {
		return <Navigate to="/administrativo/login" replace />;
	}

	// 5. Renderiza o componente de override se houver
	if (overrideComponent) {
		return overrideComponent;
	}

	// 6. Senão, renderiza o conteúdo da rota privada
	return <>{children}</>;
};
