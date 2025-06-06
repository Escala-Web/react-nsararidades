import { useState } from "react";
import { useProduct } from "../../../../../hooks/products/useProduct";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";
import { Container } from "./styles";
import { ProductAside } from "./Ui/Aside";
import { ProductContent } from "./Ui/Content";
import { useCategory } from "../../../../../hooks/Category/useCategory";
import { useBread } from "../../../../../hooks/Bread/useBread";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Seo } from "../../../../../seo";
import { Loading } from "../../components/Loading";

export const Products = () => {
	const { findCategory } = useCategory();
	const { findAll: breads } = useBread();

	const { findAllProduct } = useProduct(1);

	return (
		<>
			<Seo title="Lançamentos" />
			<ContainerTemplate>
				<div className="bre">
<Breadcrumb title="Produtos" number={findAllProduct.length} />
				</div>
				<Container>
					{!findAllProduct.isLoading ? (
						<div className="container">
							<ProductAside categories={findCategory} breads={breads} />
							<ProductContent />
						</div>
					) : (
						<div className="load">
							<Loading />
						</div>
					)}
				</Container>
			</ContainerTemplate>
		</>
	);
};
