import { toast } from "react-toastify";
import { useCart } from "../../../../../context/Cart";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Container } from "../../styles/Container";
import { ContainerCart } from "./styles";
import { FormEvent, useContext, useEffect, useState } from "react";
import { productFindOneApi } from "../../../../../services/products";
import { URL_HOST } from "../../../../../config/configUrl";
import { formatPrice } from "../../../../../utils/formatPrice";
import { Divider } from "@mui/material";
import { useFrete } from "../../../../../hooks/Frete/useFrete";
import { useAddress } from "../../../../../hooks/Address/useAddress";
import { IFreteData } from "../../../../../types/IFrete";
import { Frete } from "./Frete";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../context/Auth";
import { useOrders } from "../../../../../hooks/Orders/useOrder";
import { CartItem } from "../../../../../types/ICart";
import { api } from "../../../../../lib";

export const Cart = () => {
	const [cart, setCart] = useState([]);
	const [frete, setFrete] = useState<string>("");
	const [fretes, setFretes] = useState([]);
	const [loading, setLoading] = useState(false);
	const { cart: cartFromContext, qtd, removeFromCart, frete: freteCalculado, setFreteCalculado } = useCart();
	const { calcularFrete } = useFrete();
	const { findAllAddress } = useAddress();
	const { login } = useContext(AuthContext);

	useEffect(() => {
		const fetchProducts = async () => {
			if (!cartFromContext || cartFromContext.length === 0) {
				setCart([]); // limpa visualmente
				return;
			}

			try {
				const responses = await Promise.all(
					cartFromContext.map((item: { id: number }) =>
						productFindOneApi(item.id)
					)
				);

				const cartData = responses.map((product) => {
					const productId = product?.content?.id_product;
					const cartItem = cartFromContext.find(
						(item) => item.id === productId
					);

					return {
						id: cartItem?.id, // se não encontrar, vai ser undefined
						name: product?.content?.name,
						price: product?.content?.variations[0]?.price,
						quantity: cartItem?.quantity || 1,
						image:
							product?.content?.variations[0]?.pictures[0]?.image_path ||
							"https://via.placeholder.com/80",
					};
				});

				const validCartData = cartData.filter((item) => item.id !== undefined);

				setCart(validCartData);
			} catch (error) {
				toast.error("Erro ao buscar os produtos do carrinho.");
			}
		};

		fetchProducts();
	}, [cartFromContext]);

	const total = cart?.reduce((sum, product) => {
		const price = parseFloat(product?.price || "0");
		const quantity = product?.quantity || 1;
		return sum + price * quantity;
	}, 0);
	const addressData = findAllAddress.data?.content.find(
		(item) => item.id_address === frete
	);
	
	useEffect(() => {
		const product = cart.map((v) => ({
			id_product: v.id,
			quantity: v.quantity,
		}));

		const idAddress = frete.split('-')


		calcularFrete.mutate(
			{
				products: product,
				zip_code: idAddress[0],
			},
			{
				onSuccess: (data) => {
					setFretes(data);
				},
			}
		);
	}, [frete]);

	const { createOrder } = useOrders();
	const navigate = useNavigate();


	function handleCreateOrder(event: FormEvent) {
			event.preventDefault();
	
			if (!login) {
				toast.error("Você precisa estar logado para fazer um pedido.");
				setFreteCalculado("");
				navigate("/login");
				return;
			}
	
			if (!frete || !freteCalculado?.signature_eccomerce) {
				toast.error(
					"Selecione um endereço e calcule o frete antes de finalizar a compra."
				);
				return;
			}

			const idAddress = frete.split('-')
	
			createOrder.mutate(
				{
					id_address: idAddress[1],
					shipping_signature: freteCalculado?.signature_eccomerce,
					order_items: cart.map((item: CartItem) => ({
						id_product_variant: item.id,
						quantity: item.quantity,
					})),
				},
				{
					onSuccess: async (data) => {
						setLoading(true);
						try {
							const { data: payment } = await api.get(
								`/payments/pay/${data.id_order}`,
								{
									requiresAuth: true,
								}
							);
							window.location.href = payment?.session_url;
						} catch (error) {
							toast.error("Erro ao redirecionar para o pagamento.");
						} finally {
							setLoading(false);
						}
					},
					onError: (error) => {
						toast.error("Erro ao criar o pedido.");
					},
				}
			);
	
			localStorage.removeItem("my_cart");
		}


	return (
		<>
			<Breadcrumb page="Carrinho" />
			<Container>
				<section className="container">
					<ContainerCart>
						<div className="container_content">
							<h2>Meu carrinho</h2>
							{cart?.map((item) => (
								<div className="content_cart">
									<>
										<picture className="cart_image">
											<img src={`${URL_HOST}${item.image}`} alt={item.name} />
										</picture>
										<div className="cart_description">
											<p>Produto:</p>
											<strong>{item?.name}</strong>
										</div>

										<div className="cart_qtd">
											<p>Quantidade:</p>
											<strong>{item?.quantity}</strong>
										</div>
									</>

									<div className="cart_price">
										<p>Preço:</p>
										<strong>{formatPrice(item?.price)}</strong>
									</div>
								</div>
							))}
						</div>
						<div className="container_aside">
							<h2>Frete</h2>

							<div className="aside_cart">
								<div className="form">
									<label htmlFor="">Selecione um endereço</label>
									<select
										value={frete ?? ""}
										onChange={(event) => setFrete(event.target.value)}
									>
										{findAllAddress?.data?.content?.map((item) => (
											<option value={`${item.zip_code}-${item.id_address}`}>
												{item.public_area} - {item.city} - {item.state}
											</option>
										))}
									</select>
								</div>

								<Frete data={fretes}/>

								<Divider />

								<div className="resumo_amount">
									<h2 style={{ paddingBottom: "1rem" }}>Resumo</h2>
									<ul>
										<li>
											<strong>Valor:</strong>
											<p>{formatPrice(total)}</p>
										</li>
										<li>
											<strong>Frete:</strong>
											<p>{formatPrice(freteCalculado?.price ?? 0)}</p>
										</li>
										<Divider />
										<li>
											<strong>Valor total:</strong>
											<p>{formatPrice(total)}</p>
										</li>
									</ul>
								</div>
								<button className="buy" onClick={handleCreateOrder}>Finalizar Compra</button>
							</div>
						</div>
					</ContainerCart>
				</section>
			</Container>
		</>
	);
};
