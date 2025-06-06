import { MdShoppingCart } from "react-icons/md";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";
import { Title } from "../../components/Title";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { Shortcut } from "../../components/Shortcut";
import { Container } from "./styles";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { CardMyAccount } from "../../components/CardMyAccount";
import { useOrderStatus } from "../../../../../hooks/Orders/useOrderStatus";
import { Orders } from "../../components/Orders";
import { Skeleton } from "@mui/material";
import { OrderNotFount } from "../../components/OrderNotFount";

export const MyAccount = () => {

	const { data, isLoading } = useOrderStatus('all', '1');

	return (
		<>
			<ContainerTemplate>
				<Container>
					<CardMyAccount />
					<br />

					<Title title="Meu Painel" icon={<HiMiniSquare3Stack3D />} />

					<div className="container_shortcut">
						<Shortcut
							icon={<FaUserAlt />}
							title="Meus Dados"
							link="meus-dados"
							description=" Aqui você pode manter seus dados sempre atualizados para garantir uma melhor comunicação."
						/>
						{/* <Shortcut
							icon={<FaHeart />}
							title="Favoritos"
							link=""
							description="Seus favoritos ficam armazenados para você encontrar tudo com mais facilidade sempre que precisar."
						/> */}
						<Shortcut
							icon={<IoMdCart />}
							title="Pedidos"
							link="pedidos"
							description="Veja detalhes, status de entrega, datas e muito mais. Tudo organizado para você ter controle total."
						/>
					</div>
					<br />

					<Title title="Meus Pedidos" icon={<MdShoppingCart />} />

					{!data ? (
						<OrderNotFount />
					) : (
						<>
						{isLoading ? (
						<div className="skeleton">
							<Skeleton height={300} width={'100%'}/>
						</div>
					) : (
						<>
						<Orders data={data}/>
						</>
					)}
						</>
					)}

					
				</Container>
			</ContainerTemplate>
		</>
	);
};
