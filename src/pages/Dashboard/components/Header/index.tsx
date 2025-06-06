import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { Painel } from "../../pages/Painel";
import { ProductsCreate } from "../../pages/Products/create";
import { headerNavigationTemplate } from "../../utils/headerNavigationTemplate";
import { headerNavigationAdm } from "../../utils/HeaderNavigationAdm";
import { Products } from "../../pages/Products/List";
import { Clients } from "../../pages/Clients";
import { Layouts } from "../../pages/Layouts";
import { Paletas } from "../../pages/Paletas";
import { Logo } from "../../pages/Logo";
import { Banners } from "../../pages/Banners";
import { Orders } from "../../pages/Ordes";
import { PaymentIntegracion } from "../../pages/PaymentIntegracion";
import { Google } from "../../pages/Google";
import { Phone } from "../../pages/Phone";
import { EmailPage } from "../../pages/Email";
import { Address } from "../../pages/Address";
import StoreIcon from "@mui/icons-material/Store";
import { AuthContext } from "../../../../context/Auth";
import { Box, Button } from "@mui/material";
import { URL_HOST } from "../../../../config/configUrl";
import { Update } from "../../pages/Products/update";
import { Pagamentos } from "../../pages/Pagamentos";
import { Sociais } from "../../pages/Sociais";

interface HeaderProps {
	window?: () => Window;
}

const demoTheme = extendTheme({
	colorSchemes: { light: true},
	colorSchemeSelector: "class",

	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 600,
			lg: 1480,
			xl: 1636,
		},
	},
});

interface Router {
	pathname: string;
	searchParams: URLSearchParams;
	navigate: (path: string) => void;
}

function useDemoRouter(initialPath: string): Router {
	const [pathname, setPathname] = React.useState<string>(initialPath);

	const router = React.useMemo(() => {
		return {
			pathname,
			searchParams: new URLSearchParams(),
			navigate: (path: string) => {
				setPathname(path);
				window.history.pushState({}, "", path);
			},
		};
	}, [pathname]);

	return router;
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { window } = props;
	const navigate = useNavigate();
	const location = useLocation();

	const { logout } = React.useContext(AuthContext);

	function sair () {
		logout()
		navigate(URL_HOST)
	}

	const pages: Record<string, React.JSX.Element> = {
		// Administrativo >
		"/administrativo": <Painel />,
		"/administrativo/clientes": <Clients />,
		"/administrativo/produtos": <Products />,
		"/administrativo/produtos/create": <ProductsCreate />,
		"/administrativo/produtos/atualizar": <Update />,
		"/administrativo/pedidos": <Orders />,
		"/administrativo/pagamentos": <Pagamentos />,

		// Templates >
		"/administrativo/templates": <Layouts />,
		"/administrativo/templates/paletas": <Paletas />,
		"/administrativo/templates/logo": <Logo />,
		"/administrativo/templates/banner": <Banners />,
		"/administrativo/integracao-de-pagamento": <PaymentIntegracion />,
		"/administrativo/google": <Google />,
		"/administrativo/telefone": <Phone />,
		"/administrativo/email": <EmailPage />,
		"/administrativo/endereco": <Address />,
		"/administrativo/redes-sociais": <Sociais />,
	};

	const demoWindow = window ? window() : undefined;

	const NAVIGATION = [
		...(location.pathname.includes("template")
			? headerNavigationTemplate
			: headerNavigationAdm),
	];

	const handleNavigation = (segment: string) => {
		const navItem = NAVIGATION.find((item) => item.segment === segment);

		if (navItem && navItem.onClick) {
			navItem.onClick();
		} else {
			navigate(`/${segment}`);
		}
	};

	return (
		<AppProvider
			navigation={NAVIGATION}
			router={{ pathname: location.pathname, navigate }}
			theme={demoTheme}
			window={demoWindow}
			onNavigate={handleNavigation}
			branding={{
				logo: "",
				title: <img src="https://escalaweb.com.br/images/logo-nova.png" />,
				homeUrl: "/administrativo",
			}}
		>
			<DashboardLayout
	sx={{
		position: "relative",
		zIndex: "99",
		"& .MuiDrawer-paper": {
			mt: 0,
			width: 300,
			padding: "10px",
		},
	}}
	disableCollapsibleSidebar={false}
>
	{/* Botão personalizado no topo */}
	<Box
		sx={{
			position: 'absolute',
			display: "flex",
			justifyContent: "flex-end",
			padding: "1rem",
			top: '-4px',
			zIndex: '99999999',
			right: '50px'
		}}
	>
		<Button
			variant="contained"
			color="error"
			onClick={() => sair()}
		>
			Sair
		</Button>
	</Box>

	<PageContainer sx={{ mt: 4 }}>
		{pages[location.pathname] || <div>Page not found</div>}
	</PageContainer>
</DashboardLayout>

		</AppProvider>
	);
};
