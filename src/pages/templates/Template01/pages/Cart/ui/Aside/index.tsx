import { Divider } from "@mui/material";
import { useAddress } from "../../../../../../../hooks/Address/useAddress";
import { Formulario } from "../../../../styles/Formulario";
import { Container } from "./styles";
import { useCart } from "../../../../../../../context/Cart";
import { formatPrice } from "../../../../../../../utils/formatPrice";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useOrders } from "../../../../../../../hooks/Orders/useOrder";
import { FormEvent, useContext, useEffect, useState } from "react";
import { CartItem } from "../../../../../../../types/ICart";
import { toast } from "react-toastify";
import { useFrete } from "../../../../../../../hooks/Frete/useFrete";
import { Frete } from "../Frete";
import { IFreteContent } from "../../../../../../../types/IFrete";
import { AuthContext } from "../../../../../../../context/Auth";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../../components/Loading";
import { FaPlus } from "react-icons/fa";
import { AddressAdd } from "../Address";
import { api } from "../../../../../../../lib";
import { LoadingReg } from "../../../../components/Loading/LoadingReg";

export const Aside = ({ cart }) => {
	const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
	const [dataFrete, setDataFrete] = useState<IFreteContent>([]);
	const [loading, setLoading] = useState(false);

	const { login } = useContext(AuthContext);
	const { findAllAddress } = useAddress();
	const { frete: freteResponse, setFrete: setFreteCart, qtd } = useCart();
	const { calcularFrete } = useFrete();
	const { createOrder } = useOrders();
	const navigate = useNavigate();

	const addressData = findAllAddress.data?.content.find(
		(item) => item.id_address === selectedAddress
	);

	useEffect(() => {
		if (!selectedAddress || !addressData) return;

		const product = cart.map((v) => ({
			id_product: v.id,
			quantity: v.quantity,
		}));

		calcularFrete.mutate(
			{
				zip_code: addressData.zip_code,
				products: product,
			},
			{
				onSuccess: (data) => setDataFrete(data),
				onError: () =>
					toast.error("Erro ao calcular o frete. Verifique o CEP."),
			}
		);
	}, [selectedAddress]);

	function handleCreateOrder(event: FormEvent) {
		event.preventDefault();

		if (!login) {
			toast.error("Você precisa estar logado para fazer um pedido.");
			setFreteCart("");
			navigate("/login");
			return;
		}

		if (!selectedAddress || !freteResponse?.signature_eccomerce) {
			toast.error(
				"Selecione um endereço e calcule o frete antes de finalizar a compra."
			);
			return;
		}

		createOrder.mutate(
			{
				id_address: selectedAddress,
				shipping_signature: freteResponse.signature_eccomerce,
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

	const total = cart?.reduce((sum, product) => {
		const price = parseFloat(product?.price || "0");
		const quantity = product?.quantity || 1;
		return sum + price * quantity;
	}, 0);


	return (
		<Container>
			<div className="container loading">
				<div className="header">
					<h3>Entrega</h3>
				</div>

				<Formulario>
					<div className="form_flex">
						<select
							value={selectedAddress ?? ""}
							onChange={(event) =>
								setSelectedAddress(Number(event.target.value))
							}
						>
							<option value="" disabled>
								Selecione um endereço
							</option>
							{findAllAddress.data?.content.map((item) => (
								<option key={item.id_address} value={item.id_address}>
									{item.public_area} - Nº {item.number}
								</option>
							))}
						</select>
						<AddressAdd />
					</div>
					{calcularFrete.isPending && <Loading />}
				</Formulario>

				<Frete data={dataFrete} />
			</div>

			<div className="container">
				<div className="header">
					<h3>Carrinho</h3>
				</div>

				<div className="flex">
					<p>Produto</p>
					<span>{formatPrice(total)}</span>
				</div>
				<div className="flex">
					<p>Frete</p>
					<span>{formatPrice(freteResponse?.price || 0)}</span>
				</div>
				<Divider />
				<div className="flex">
					<p>Total</p>
					<span>{formatPrice(total + parseFloat(freteResponse?.price || 0))}</span>
				</div>

				<Formulario onSubmit={handleCreateOrder}>
					<div className="form_block mt">
						<button type="submit" className="button contain">
							<div
								className="form_flex"
								style={{ display: "flex", justifyContent: "center" }}
							>
								{loading ? (
									<LoadingReg title="Finalizando" />
								) : (
									<>
										{createOrder.isSuccess ? (
											<LoadingReg title="Finalizando" />
										) : (
											<>
												<ShoppingBasketIcon />
												<p>Finalizar compra</p>
											</>
										)}
									</>
								)}
							</div>
						</button>
					</div>
				</Formulario>
			</div>
		</Container>
	);
};
