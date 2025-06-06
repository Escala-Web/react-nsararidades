import { Link } from "react-router-dom";
import { Container } from "./styles";
import { MdProductionQuantityLimits } from "react-icons/md";

export const OrderNotFount = () => {
	return (
		<>
			<Container>
				<div className="container">
					<div className="icone">
						<MdProductionQuantityLimits />
					</div>
					<div className="container_description">
						<div className="description">
							<h2>Ops! Nenhum pedido encontrado.</h2>
							<p>
								Mas não se preocupe, temos uma variedade de produtos incríveis
								te esperando! <br /> Que tal dar uma olhadinha na nossa loja e
								encontrar algo perfeito para você?
							</p>
						</div>
						<div className="link">
							<Link to={'/'}>Ir às compras</Link>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
