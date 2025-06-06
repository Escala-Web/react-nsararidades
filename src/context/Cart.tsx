// context/CartContext.tsx
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { CartContextType, CartItem } from "../types/ICart";
import { toast } from "react-toastify";

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "my_cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>(() => {
		const storedCart = localStorage.getItem(CART_KEY);
		return storedCart ? JSON.parse(storedCart) : [];
	});

	const [qtd, setQtd] = useState(1);
	const [frete, setFrete] = useState();

	useEffect(() => {
		localStorage.setItem(CART_KEY, JSON.stringify(cart));
	}, [cart]);

	const addCartId = (id: number | string) => {
		if (!id) return;

		setCart((prevCart) => {
			const exists = prevCart?.some((item) => item?.id === id);
			if (exists) return prevCart;

			const newItem: CartItem = {
				id,
				quantity: qtd,
			};

			return [...prevCart, newItem];
		});
	};

	const removeFromCart = (id: number | string) => {
		setCart((prevCart) => {
			const updatedCart = prevCart.filter(
				(item) => String(item?.id) !== String(id) // agora ele remove corretamente
			);

			localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));

			return updatedCart;
		});
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				qtd,
				setQtd,
				addCartId,
				removeFromCart,
				frete,
				setFrete,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart deve ser usado dentro do CartProvider");
	}
	return context;
};
