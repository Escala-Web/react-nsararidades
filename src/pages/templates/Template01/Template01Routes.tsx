import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";
import { ActiveAcount } from "./pages/ActiveAccount";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Filter } from "./pages/Filter";
import { Contact } from "./pages/Contact";

export const Template01Routes = () => {
	return (
		<>
		
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contato" element={<Contact />} />
				<Route path="/carrinho" element={<Cart />} />
				<Route path="/produtos" element={<Products />} />
				<Route path="/marca/:name/:id" element={<Filter />} />
				<Route
					path="/:category/:name/:id_product"
					element={<Product />}
				/>
				<Route path="/login" element={<Login type={"user"} />} />
				<Route path="/register" element={<Register />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/active-account" element={<ActiveAcount />} />
				<Route
					path="/administrativo/login"
					element={<Login type={"admin"} />}
				/>
			</Routes>
		</>
	);
};
