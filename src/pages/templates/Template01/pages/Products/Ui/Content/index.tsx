import { Pagination, Skeleton } from "@mui/material";
import { CardProduct } from "../../../../components/CardProduct";
import { Container, Load } from "./styles";
import { useContext, useEffect, useState } from "react";
import { useProduct } from "../../../../../../../hooks/products/useProduct";
import { useProductFilter } from "../../../../../../../hooks/products/useProductFilter";
import { FilterContext } from "../../../../../../../context/Filter";
import { Loading } from "../../../../components/Loading";
import { Breadcrumb } from "../../../../components/Breadcrumb";

export const ProductContent = () => {
	const [page, setPage] = useState<number>(1);
	const { selectedCategory, selectedBrand } = useContext(FilterContext);

	const { findAllProduct, isLoading: isLoadingDefault } = useProduct(page);
	const [products, setProducts] = useState<any[]>([]);
	const [totalPages, setTotalPages] = useState<number>(1);


	// Determina o tipo e o ID do filtro
	let filterType: "category" | "brand" | null = null;
	let id: string | null = null;

	if (selectedCategory) {
		filterType = "category";
		id = selectedCategory;
	} else if (selectedBrand) {
		filterType = "brand";
		id = selectedBrand;
	}

	const { data: filteredData, isLoading: isLoadingFiltered } = useProductFilter(
		filterType,
		id ? [id] : [],
		String(page),
		{ enabled: !!filterType && !!id }
	);

	// Resetar a página sempre que o filtro mudar
	useEffect(() => {
		setPage(1);
	}, [selectedCategory, selectedBrand]);

	// Atualizar os produtos exibidos com base no filtro ou dados padrões
	useEffect(() => {
		if (filterType && filteredData?.content) {
			setProducts(filteredData.content);
			setTotalPages(filteredData.totalPages ?? 1);
		} else if (!filterType && findAllProduct?.data?.content) {
			setProducts(findAllProduct.data.content);
			setTotalPages(findAllProduct.data.totalPages ?? 1);
		}
	}, [filteredData, findAllProduct, filterType, id]);


	if (isLoadingDefault || isLoadingFiltered) {
		return (
			<Load>
				<Loading />
			</Load>
		);
	}

	return (
		<Container>
			
			<div className="container_card">
				{products.length === 0 ? (
					<p style={{ textAlign: "center", marginTop: "2rem" }}>
						Nenhum produto encontrado.
					</p>
				) : (
					products.flatMap((item) =>
						(item?.variations ?? []).map((variation, index) => {
							if (!item || !variation) return null;
							return (
								<CardProduct
									key={`${item.id}_${variation.id ?? `v${index}`}`}
									product={item}
									variations={variation}
								/>
							);
						})
					)
				)}
			</div>

			<div className="pagination">
				{!filterType ? (
					<Pagination
						count={findAllProduct?.data?.page?.qtdPage}
						page={page}
						onChange={(_, value) => setPage(value)}
						showFirstButton
						showLastButton
					/>

				): (
					<Pagination
						count={filteredData?.page?.qtdPage}
						page={page}
						onChange={(_, value) => setPage(value)}
						showFirstButton
						showLastButton
					/>
				)}
			</div>
		</Container>
	);
};
