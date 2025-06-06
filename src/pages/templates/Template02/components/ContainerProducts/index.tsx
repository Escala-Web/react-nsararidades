import { useCategory } from "../../../../../hooks/Category/useCategory";
import { useProduct } from "../../../../../hooks/products/useProduct";
import { CardProducts } from "../CardProduct";
import { Title } from "../Title";
import { Container } from "./styles";

export const ContainerProducts = () => {

		const { findCategory } = useCategory();
		const { findAllProduct } = useProduct(1);
		
		const category = findCategory?.data?.content;
		const products = findAllProduct?.data?.content;
 
	return (
		<>
			<Container>
				<Title
					title="Principais Categorias"
					data={category}
				/>
				<div className="container">
					{products?.map((item) => {
						return <CardProducts key={item.id_product} data={item}/>
					})}
				</div>
			</Container>
		</>
	);
};
