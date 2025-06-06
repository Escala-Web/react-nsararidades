import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";
import { useStore } from "../../../../../hooks/Store/useStore";

export const Loading = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const location = useLocation();

	const { findOneStore } = useStore();

	useEffect(() => {
		setLoading(true);

		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [location]);


	const nomeEmpresa = findOneStore?.data?.content?.NAME_STORE;

	return (
		<>
			<Container>
				<div className="loading">
					<p>Logo Site</p>
					<div className="load">
						{nomeEmpresa?.split("")?.map((item, index) => (
							<p className="name" style={{ animationDelay: `${index * 0.1}s` }}>
								{item}
							</p>
						))}
					</div>
				</div>
			</Container>
		</>
	);
};
