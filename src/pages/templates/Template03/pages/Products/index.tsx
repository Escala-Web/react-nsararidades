import { useState } from "react";
import { useProduct } from "../../../../../hooks/products/useProduct";
import { Container } from "../../styles/Container";
import { CardProduct } from "../../components/Card/CardProduct";
import { Section } from "./styles";
import { useCategory } from "../../../../../hooks/Category/useCategory";
import { useBread } from "../../../../../hooks/Bread/useBread";
import { Breadcrumb } from "../../components/Breadcrumb";

export const Products = () => {
	const [page, setPage] = useState<number>(1);
    const { findAll } = useBread();
	const { findCategory } = useCategory();
	const { findAllProduct } = useProduct(page);

	return (
		<>
            <Breadcrumb page="Lançamentos"/>
			<Container>
				<section className="container">
					<Section>
						<div className="asides">
							<div>
								<header className="header">Categorias</header>
								<main className="aside_content">
									{findCategory?.data?.content?.map((item) => (
										<div className="form">
											<input type="radio" />
											<p>{item.name}</p>
										</div>
									))}
								</main>
							</div>
                                    
                            <div>
								<header className="header">Marcas</header>
								<main className="aside_content">
									{findAll?.data?.content?.map((item) => (
										<div className="form">
											<input type="radio" />
											<p>{item.name}</p>
										</div>
									))}
								</main>
							</div>
						</div>

						<main className="content_card">
							{findAllProduct?.data?.content?.map((item) => (
								<CardProduct key={item?.id_product} data={item} />
							))}
						</main>
					</Section>
				</section>
			</Container>
		</>
	);
};
