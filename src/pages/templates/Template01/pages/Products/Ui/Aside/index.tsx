import {
	Radio,
	RadioGroup,
	FormControlLabel,
	Skeleton,
	Button,
	useMediaQuery,
} from "@mui/material";
import { Container } from "./styles";
import { useContext, useState, useEffect } from "react";
import { FilterContext } from "../../../../../../../context/Filter";
import { useStore } from "../../../../../../../hooks/Store/useStore";
import { FaFilter } from "react-icons/fa6";
import { useTheme } from "@mui/material/styles";

export const ProductAside = ({ categories, breads }) => {
	const {
		handleBrandChange,
		handleCategoryChange,
		selectedBrand,
		selectedCategory,
	} = useContext(FilterContext);

	const { findOneStore } = useStore();

	const [isMenu, setIsMenu] = useState(false);

	const theme = useTheme();
	const isSmallScreen = useMediaQuery("(max-width:1090px)");

	// Quando sair de tela pequena, garantir que o filtro fique visível automaticamente
	useEffect(() => {
		if (!isSmallScreen) {
			setIsMenu(true);
		} else {
			setIsMenu(false);
		}
	}, [isSmallScreen]);

	return (
		<Container>
			{isSmallScreen && (
				<button onClick={() => setIsMenu(!isMenu)} className="filter_mobile">
					<FaFilter />
					<p>Filtro</p>
				</button>
			)}

			{isMenu && (
				<>
					{categories.isLoading ? (
						<Skeleton
							animation="wave"
							variant="rectangular"
							width={"100%"}
							height={450}
						/>
					) : (
						<div className="container">
							<h4 className="title">Categorias</h4>
							<RadioGroup
								value={selectedCategory || ""}
								onChange={(e) => handleCategoryChange(e.target.value)}
							>
								{categories?.data?.content?.map((item: any) => {
									const id = item.id_category.toString();
									return (
										<FormControlLabel
											key={id}
											value={id}
											control={<Radio />}
											label={item.name}
										/>
									);
								})}
							</RadioGroup>
							{selectedCategory && (
								<Button
									variant="outlined"
									size="small"
									sx={{ mt: 1 }}
									onClick={() => handleCategoryChange("")}
								>
									Limpar filtro de categoria
								</Button>
							)}
						</div>
					)}

					{breads.isLoading ? (
						<Skeleton
							animation="wave"
							variant="rectangular"
							width={"100%"}
							height={550}
						/>
					) : (
						<div className="container">
							<h4 className="title">
								{findOneStore?.data?.content?.NAME_STORE?.toLocaleLowerCase().startsWith(
									"nsa"
								)
									? "Ano"
									: "Marca"}
							</h4>
							<RadioGroup
								value={selectedBrand || ""}
								onChange={(e) => handleBrandChange(e.target.value)}
							>
								{breads?.data?.content?.map((item: any) => {
									const id = item.id_brand.toString();
									return (
										<FormControlLabel
											key={id}
											value={id}
											control={<Radio />}
											label={item.name}
										/>
									);
								})}
							</RadioGroup>
							{selectedBrand && (
								<Button
									variant="outlined"
									size="small"
									sx={{ mt: 1 }}
									onClick={() => handleBrandChange("")}
								>
									Limpar filtro de marca
								</Button>
							)}
						</div>
					)}
				</>
			)}
		</Container>
	);
};
