import { useProductsRecents } from "../../../../../hooks/products/useProductRecents";
import { useProductsPopular } from "../../../../../hooks/products/useProductsPopular";
import { Hero } from "../../components/Hero";
import { Container } from "../../styles/Container";
import { Destaques } from "./Destaques";
import { Products } from "./Products";

export const Home = () => {

	const { data: popular } = useProductsPopular();
	const { data: recents } = useProductsRecents();

	return (
		<>
			<Hero />
			<Container>
				<main className="container">
					<Products title={'Populares'} data={popular}/>
					<Destaques />
					<Products title={'Recentes'} data={recents}/>
					Lancamentos
				</main>
			</Container>
		</>
	);
};
