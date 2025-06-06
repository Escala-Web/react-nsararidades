import { useProduct } from "../../../../../hooks/products/useProduct";
import { Seo } from "../../../../../seo";
import { Banner } from "../../components/Banner";
import { CardProducts } from "../../components/CardProduct";
import { ContainerCategory } from "../../components/ContainerCategory";
import { ContainerProducts } from "../../components/ContainerProducts";
import { Title } from "../../components/Title";
import { ContainerGlobal } from "../../styles/styles";
import { Container } from "./styles";

export const Home = () => {

	const { findAllProduct } = useProduct(1);
	
	const productsLancamentos = findAllProduct?.data?.content?.slice(0, 3);
	const productsProcurados = findAllProduct?.data?.content?.slice(4, 7);

	return (
		<>
			<Seo description="Descrição" title="Página Inicial" keywords="" />

			<Container>
				<Banner />
				<ContainerGlobal>
					<div className="container_home">
						<ContainerProducts />
						<ContainerCategory 
							title="Lançamentos"
							link="/produtos"
							data={productsLancamentos}
						/>
						<ContainerCategory 
							title="Mais Procurados"
							link="/produtos"
							data={productsProcurados}
						/>
					</div>
			
				</ContainerGlobal>
			</Container>
		</>
	);
};
