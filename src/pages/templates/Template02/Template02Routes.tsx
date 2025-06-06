import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";
import { ActiveAccount } from "./pages/ActiveAccount";
import { Product } from "./pages/Product";

export const Template02Routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="/register" element={<Register />} />
			<Route path="/produtos" element={<Products />} />
			<Route path="/active-account" element={<ActiveAccount />} />

			<Route path="/:category/:name/:id_product" element={<Product />} />
		</Routes>
	);
};
