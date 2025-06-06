import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../../../../../context/Cart";

export const ActionsBuyECart = () => {
	const navigate = useNavigate();
	const { addCartId, cart } = useCart();
	const { id_product } = useParams();

	const productId = Number(id_product);
	const isInCart = cart.some((item) => Number(item?.id) === productId);

	const addCartPage = () => {
		addCartId(productId);
		navigate("/carrinho");
	};

	return (
		<div className="container_buy">
			{isInCart ? (
				<button className="buy" onClick={() => navigate('/carrinho')}>
					Ver minha sacola
				</button>
			) : (
				<>
					<button className="buy" onClick={addCartPage}>
						Comprar Agora
					</button>
					<button className="add_cart" onClick={() => addCartId(productId)}>
						Adicionar no carrinho
					</button>
				</>
			)}
		</div>
	);
};
