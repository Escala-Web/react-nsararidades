import { CustumerRoute } from "../Custumer/CustumerRoute";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Template01Routes } from "./Template01Routes";

export const Template01 = () => {
	return (
		<>
			<Header />
			<Template01Routes />
			<CustumerRoute />
			<Footer />
		</>
	);
};
