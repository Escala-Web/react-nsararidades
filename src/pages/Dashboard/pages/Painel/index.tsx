import { Container } from "./styles";
import { FaEye, FaMoneyBillTransfer } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardDashboard } from "../../components/CardDashboard";
import { GraphOrders } from "./Graph/Orders";
import { GraphSales } from "./Graph/Sales";
import { useOrders } from "../../../../hooks/Orders/useOrder";
import { useOrderStatus } from "../../../../hooks/Orders/useOrderStatus";
import { useUser } from "../../../../hooks/users/useUser";
import { useUserAdmin } from "../../../../hooks/users/useUserAdmin";
import { usePayment } from "../../../../hooks/Payment";
import { formatPrice } from "../../../../utils/formatPrice";

export const Painel = () => {
	const [dashSelect, setDataSelect] = useState({
		page: "sales",
		isActive: true,
	});

	const navigate = useNavigate();

	function clients() {
		navigate('/administrativo/clientes')
		setDataSelect({ page: "clients", isActive: true })
	}


	const { data } = useOrderStatus('ALL', '1');
	const { data: user } = useUserAdmin('1') 
	const { orderGraphs } = useOrders();
	const { paymentsFaturesGraph } = usePayment();

	const content = orderGraphs?.data?.content || {};
	const totalPedidos = Object.values(content).reduce((acc, curr) => acc + (curr || 0), 0);

	const faturamento = paymentsFaturesGraph?.data?.content?.total === undefined ? '0' : paymentsFaturesGraph?.data?.content?.total;

	return (
		<>
			<Container>
				<div className="container_section">
					<CardDashboard
						isActive={dashSelect.page === "sales"} 
						click={() => setDataSelect({ page: "sales", isActive: true })}
						name="Faturamento"
						color="#4AD991"
						data={formatPrice(faturamento)}
						icon={<FaMoneyBillTransfer />}
						/>
					<CardDashboard
						isActive={dashSelect.page === "order"}
						click={() => setDataSelect({ page: "order", isActive: true })}
						name="Pedidos"
						color="#FEC53D"
						data={totalPedidos}
						icon={<FaBoxOpen />}
					/>
					<CardDashboard
						isActive={dashSelect.page === "clients"}
						click={clients}
						name="Clientes"
						color="#0089ff"
						data={user?.pages?.total}
						icon={<FaUserTag />}
						// data={client?.content?.length}
					/>
					{/* <CardDashboard
						isActive={dashSelect.page === "access"}
						click={() => setDataSelect({ page: "access", isActive: true })}
						name="Acessos"
						color="#0089ff"
						icon={<FaEye />}
					/> */}
				</div>
				<div>
                    {dashSelect.page === 'sales' && <GraphSales  />}
                    {dashSelect.page === 'order' && <GraphOrders/>}
                </div>
			</Container>
		</>
	);
};