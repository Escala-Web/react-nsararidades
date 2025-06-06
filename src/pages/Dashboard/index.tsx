import { Seo } from "../../seo";
import { Header } from "./components/Header";
import { DashboardApp } from "./DashboardApp";

export const DashboardRoute = () => {
	return (
		<>
			<Seo title="Administrativo - Escala web" />
			<Header>
				<DashboardApp />
			</Header>
		</>
	);
};
