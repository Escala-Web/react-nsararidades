import { Pagination } from "@mui/material";
import { Breadcrumb } from "../../../../components/Breadcrumb";
import { CardProduct } from "../../../../components/CardProduct";
import { Container } from "./styles";
import { useState } from "react";
import { useProduct } from "../../../../../../../hooks/products/useProduct";
import { decryptRoute } from "../../../../../../../utils/cryptoRoutes";
import { useParams } from "react-router-dom";
import { useProductFilter } from "../../../../../../../hooks/products/useProductFilter";

export const ProductContent = () => {
	const [page, setPage] = useState<number>(1);

	const { filter, id: category } = useParams();

	const id = decryptRoute(String(category));

    const { data: products } = useProductFilter('category', id, '1')

	// console.log(products)

	// return

	return (
		<>
			<Container>
				
				<div className="container_card">
					{products?.content?.flatMap((item) =>
						item?.variations?.map((variation, index) => {
							return (
								<CardProduct product={item} variations={variation} />
							);
						})
					)}
				</div>
				<div className="pagination">
					<Pagination count={10} showFirstButton showLastButton />
				</div>
			</Container>
		</>
	);
};
