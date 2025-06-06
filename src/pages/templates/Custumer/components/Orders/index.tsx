import { Divider } from "@mui/material";
import { Container } from "./styles";
import { MdOutlineDateRange } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { IOrderResponse } from "../../../../../types/IOrder";
import { formatPrice } from "../../../../../utils/formatPrice";
import { formatPortugues } from "../../../../../utils/formatPortugues";
import { URL_HOST } from "../../../../../config/configUrl";
import { useEffect, useState } from "react";
import { api } from "../../../../../lib";

export const Orders = ({ data }: IOrderResponse) => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState<boolean>(false);

	async function orderPending(id) {
		setLoading(true);
		try {
			const { data } = await api.get(`/payments/pay/${id}`, {
				requiresAuth: true,
			});
			setOrders(data);
			setLoading(false);
		} catch (error) {}
	}

	console.log(orders);

	return (
		<>
			<Container>
				{data?.content.flatMap((item) => {
					const hours = item?.status_created_at?.split(" ")[1];
					const dateCreated = new Date(item.order_created_at).toLocaleString(
						"pt-BR",
						{ day: "2-digit", month: "2-digit", year: "numeric" }
					);

					const totalProductOnly = item.products?.reduce((acc, product) => {
						return (
							acc + parseFloat(product.price || "0") * (product.quantity || 1)
						);
					}, 0);

					const shippingCost = parseFloat(item?.shipping?.shipping_cost || "0");
					const totalProduct = totalProductOnly + shippingCost;

					const status = formatPortugues(item.status);

					useEffect(() => {
						orderPending(item?.id_order);
					}, []);

					console.log(status);

					return (
						<div className="container">
							<header className="header_container">
								<div className="header_order">
									<BsBoxSeam className="icon" />

									<p>Pedido: #{item.id_order}</p>
								</div>
								<div className="header_order">
									<MdOutlineDateRange className="icon" />

									<p>
										Data: {dateCreated} - {hours}
									</p>
								</div>
							</header>

							<div className="status">
								<p>
									Status do pedido:{" "}
									<strong>
										<span style={{ color: `${status.color}` }}>
											{status.value}
										</span>
									</strong>
								</p>
							</div>

							<Divider />

							{item.products.map((prod, index) => {
								const price = Number(prod?.price);
								return (
									<aside key={index} className="container_main">
										<div className="container_product">
											<div className="image">
												<img src={`${URL_HOST}${prod?.image_path}`} alt="" />
											</div>
											<p>{prod?.name}</p>
										</div>
										<div className="qtd block">
											<p>Qtd:</p>
											<p>{prod?.quantity}</p>
										</div>
										<div className="qtd price">
											<p>Preço:</p>
											<p>{formatPrice(price * prod?.quantity)}</p>
										</div>
									</aside>
								);
							})}

							{/* ISSO AQUI AGORA ESTÁ FORA DO MAP() */}
							<div className="resumo">
								{status.value === "Pendente" && (
									<>
										<div className="btn_payment">
											<a target="_blank" href={orders?.session_url}>
												Finalizar pagamento
											</a>
										</div>
									</>
								)}

								<div className="frete card">
									<h5 className="title">Frete:</h5>
									<p className="price_frete">
										{formatPrice(item?.shipping?.shipping_cost)}
									</p>
								</div>
								<div className="total card">
									<h5 className="title">Total:</h5>
									<p className="price_total">{formatPrice(totalProduct)}</p>
								</div>
							</div>
						</div>
					);
				})}
			</Container>
		</>
	);
};
