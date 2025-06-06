import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Register } from "./pages/Register";

export const Template03Routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/produtos" element={<Products />} />
			<Route path="/contato" element={<Contact />} />
			<Route path="/carrinho" element={<Cart />} />

			<Route path="/:category/:name/:id_product" element={<Product />} />
		</Routes>
	);
};
