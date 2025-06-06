import { useOrderStatus } from "../../../../../hooks/Orders/useOrderStatus";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";

import { MdShoppingCart } from "react-icons/md";
import { Skeleton } from "@mui/material";
import { Orders } from "../../components/Orders";
import { Title } from "../../components/Title";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { OrderNotFount } from "../../components/OrderNotFount";

export const MyOrders = () => {
	const [status, setStatus] = useState<string>("all");

	const { data, isLoading } = useOrderStatus(status, "1");

	const [search] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (search.get("check")) {
			Swal.fire({
				title: "Compra realizada com sucesso",
				icon: "success",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/custumer/pedidos");
				}
			});
		}
	}, [search]);

	console.log(data);

	return (
		<>
			<ContainerTemplate>
				<Container>
					<div className="filter">
						<Title title="Meus Pedidos" icon={<MdShoppingCart />} />

						<select id="" onChange={(event) => setStatus(event.target.value)}>
							<option value="ALL">Todos</option>
							<option value="PENDING">Pendente</option>
							<option value="PROCESSING">Processando</option>
							<option value="SHIPPED">Enviado</option>
							<option value="DELIVERED">Entregue</option>
							<option value="CANCELLED">Cancelado</option>
							<option value="REFUNDED">Reembolsado</option>
							<option value="RETURNED">Devolvido</option>
						</select>
					</div>
					{data === undefined && <OrderNotFount />}
					{data && (
						<>
							{isLoading ? (
								<div className="skeleton">
									<Skeleton height={300} width={"100%"} />
								</div>
							) : (
								<>
									<Orders data={data} />
								</>
							)}
						</>
					)}
				</Container>
			</ContainerTemplate>
		</>
	);
};
