import { useBread } from "../../../../../hooks/Bread/useBread";
import { useCategory } from "../../../../../hooks/Category/useCategory";
import { useProduct } from "../../../../../hooks/products/useProduct";
import { Breadcrumb } from "../../components/Breadcrumb";
import { CardProducts } from "../../components/CardProduct";
import { Container, ContainerGlobal } from "../../styles/styles";
import { MainStyles } from "./styles";

export const Products = () => {
	const { findAllProduct } = useProduct(1);
	const { findCategory } = useCategory();
	const { findAll } = useBread();

	const products = findAllProduct?.data?.content;
	const categories = findCategory?.data?.content;
	const breads = findAll?.data?.content;

	return (
		<>
			<Container>
				<ContainerGlobal>
                    <Breadcrumb 
						name="Lançamentos"
						qtd={findAllProduct?.data?.page?.total}
					/>
					<MainStyles>
						<div className="container_filter">
							<p className="title_filter">Categorias</p>
							<div className="filter_content">
								{categories?.map((item) => (
									<div key={item?.id_category} className="form_filter">
										<input type="checkbox" />
										<p>{item?.name}</p>
									</div>
								))}
							</div>
							<p className="title_filter">Anos</p>
							{breads?.map((item) => (
								<div key={item?.id_brand} className="form_filter">
									<input type="checkbox" />
									<p>{item?.name}</p>
								</div>
							))}
						</div>
						<div className="container_product">
							{products?.map((item) => {
								return <CardProducts data={item} />;
							})}
						</div>
					</MainStyles>
				</ContainerGlobal>
			</Container>
		</>
	);
};
