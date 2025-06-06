import { Route, Routes } from "react-router-dom";
import { ProductsCreate } from "./pages/Products/create";
import { Painel } from "./pages/Painel";
import { Products } from "./pages/Products/List";
import { Clients } from "./pages/Clients";
import { Layouts } from "./pages/Layouts";
import { Paletas } from "./pages/Paletas";
import { Seo } from "../../seo";

export const DashboardApp = () => {

	return (
		<>
			<Routes>
				<Route index element={<Painel />} />
				<Route path="/clientes" element={<Clients />} />
				<Route path="/produtos" element={<Products />} />
				<Route path="/produtos/create" element={<ProductsCreate />} />
				<Route path="/pagamentos" element={"Pagamentos"} />
				<Route path="/administrativo/templates" element={<Layouts />} />
				<Route path="/administrativo/templates/paletas" element={<Paletas />} />
			</Routes>
		</>
	);
};
