import { useState } from "react";
import { useCategory } from "../../../../../hooks/Category/useCategory";
import { CardProduct } from "../CardProduct";
import { Title } from "../Title";
import { Container } from "./styles";
import { useProductFilter } from "../../../../../hooks/products/useProductFilter";
import { Loading } from "../Loading";

const data = [
	"Smartphones",
	"Controles",
	"Mouses",
	"Teclados",
	"Monitores",
	"Computadores",
	"Fone",
];

export const CardCategory = () => {
	const [category, setCategory] = useState<number>(1);

	const { findCategory } = useCategory();
	const { data, isLoading } = useProductFilter("category", category, "1");

	return (
		<Container>
			<Title align="center" title="Principais Categorias" />

			<div className="container_card">
				{findCategory.data?.content?.map((cate) => (
					<div onClick={() => setCategory(cate.id_category)} className="card" key={cate.id_category}>
						<p >{cate.name}</p>
					</div>
				))}
			</div>
			<div className="content">
				{isLoading ?(
					<>
						<div className="load">
							<Loading />
						</div>
					</>
				) : (
					<>
				{data?.content?.slice(0, 8).flatMap((item) => {
					return item?.variations?.map((variation) => (
						<CardProduct variations={variation} product={item} />
					));
				})}
					</>
				)}
			</div>
		</Container>
	);
};
