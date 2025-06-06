import { Editor } from "primereact/editor";
import { Title } from "../../../components/Title";
import {
	Container,
	ContentAside,
	ContentMain,
	Formulario,
} from "../create/styles";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Button, FormGroup, Typography } from "@mui/material";
import { ModalVariation } from "../create/Ui/Modal/Variation";
import { FileManager } from "../../../components/FileManager";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductPageOne } from "../../../../../hooks/products/useProductPageOne";
import { useForm, Controller } from "react-hook-form";
import { ModalCategory } from "../create/Ui/Modal/Category";
import { ModalBreads } from "../create/Ui/Modal/Breads";
import { useStore } from "../../../../../hooks/Store/useStore";
import { useCategory } from "../../../../../hooks/Category/useCategory";
import { useBread } from "../../../../../hooks/Bread/useBread";
import { useProduct } from "../../../../../hooks/products/useProduct";

export const Update = () => {
	const [search] = useSearchParams();
	const id = search.get("id");

	const { findOneProduct } = useProductPageOne(String(id));
	const product = findOneProduct?.data?.content;

	const { register, handleSubmit, control, reset } = useForm({
		defaultValues: {
			name: "",
			description: "",
			id_category: "",
			id_brand: "",
			variations: [],
			weight: "",
			length: "",
			width: "",
			height: "",
		},
	});

	const [productData, setProductData] = useState({
		variations: [{ id_variant_attribute: 1 }],
	});

	useEffect(() => {
		if (product) {
			reset({
				name: product.name,
				description: product.description,
				id_category: product.id_category,
				id_brand: product.brand,
				variations: product.variations || [],
				weight: product.weight,
				length: product.length,
				width: product.width,
				height: product.height,
			});

			setProductData({ variations: product.variations || [] });
		}
	}, [product, reset]);

	const { updateProduct } = useProduct();

	const onSubmit = (formData) => {
		const formattedData = {
			id_category: Number(formData.id_category),
			products: {
				name: formData.name,
				description: formData.description,
				id_brand: Number(formData.id_brand),
				weight: formData.weight,
				length: formData.length,
				width: formData.width,
				height: formData.height,
				variations: formData.variations.map((variation, index) => ({
					id_product_variant: variation.id_product_variant || undefined,
					sku: variation.sku,
					price: variation.price,
					qtd_stock: Number(variation.qtd_stock),
					is_default: variation.is_default ?? true,
					discount: variation.discount || "0",
					value_variant: variation.value_variant ?? null,
					pictures:
						variation.pictures?.map((picture) => ({
							id_media: picture.id_media,
							position: picture.position,
							is_main: picture.is_main,
						})) || [],
				})),
			},
		};

		updateProduct.mutate({
			id: id,
			data: formattedData,
		});
	};

	const { findOneStore } = useStore();
	const { findCategory } = useCategory();
	const { findAll } = useBread();

	const handleRemoveVariation = (indexToRemove) => {
		const newVariations = [...productData.variations];
		newVariations.splice(indexToRemove, 1);
		setProductData({ variations: newVariations });
		reset((prev) => ({ ...prev, variations: newVariations }));
	};

	return (
		<Container>
			<Formulario onSubmit={handleSubmit(onSubmit)}>
				<div className="container">
					<div className="container_main">
						<ContentMain>
							<Title title="Informações do Produto" />
							<div className="form_block mt-2">
								<label htmlFor="name">Nome do Produto</label>
								<input type="text" {...register("name")} />
							</div>
							<div className="form_block mt-1">
								<label htmlFor="description">Descrição do Produto</label>
							</div>
							<Controller
								name="description"
								control={control}
								render={({ field }) => (
									<Editor
										style={{ height: "320px", width: "100%" }}
										value={field.value}
										onTextChange={(e) => field.onChange(e.htmlValue)}
									/>
								)}
							/>
						</ContentMain>

						<ContentMain>
							<Title title="Opções de produto" />
							<div className="form_block mt-2">
								<Typography variant="body2">
									Seu produto tem diferentes opções como tamanho, cor ou
									material? <br /> Adicione-as aqui.
								</Typography>
								<ModalVariation />
							</div>
						</ContentMain>

						{productData.variations.map((variation, index) => (
							<ContentMain key={variation.id_variant_attribute}>
								<div
									className="form_group mb-2"
									style={{
										padding: "1rem",
										borderRadius: "8px",
										position: "relative",
									}}
								>
									<Title title={`Produto`} />
									<button
										type="button"
										onClick={() => handleRemoveVariation(index)}
										style={{
											position: "absolute",
											top: "8px",
											right: "8px",
											background: "red",
											border: "none",
											color: "#fff",
											cursor: "pointer",
											fontSize: "1.2rem",
											width: "30px",
											height: "30px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										✖
									</button>
									<div className="form_flex">
										<div className="form_block">
											<label>SKU</label>
											<input
												type="text"
												{...register(`variations.${index}.sku`)}
											/>
										</div>
										<div className="form_block">
											<label>Preço</label>
											<input
												type="text"
												{...register(`variations.${index}.price`)}
											/>
										</div>
										<div className="form_block">
											<label>Estoque</label>
											<input
												type="number"
												{...register(`variations.${index}.qtd_stock`)}
											/>
										</div>
									</div>
									<div className="form_flex mt-1">
										<div className="form_block">
											<label>Desconto</label>
											<input
												type="text"
												{...register(`variations.${index}.discount`)}
											/>
										</div>
									</div>
									<div className="form_block mt">
										<label>Adicionar imagem</label>
										<FileManager
											title="Imagens do produto"
											id={variation.id_variant_attribute}
											imagesFind={variation.pictures}
										/>
									</div>
								</div>
							</ContentMain>
						))}
						<ContentMain>
							<Title title={`Pacote`} /> <br />
							<div className="form_flex">
								<div className="form_block">
									<label htmlFor="weight">Peso</label>
									<input type="text" {...register("weight")} />
								</div>
								<div className="form_block">
									<label htmlFor="length">Tamanho</label>
									<input type="text" {...register("length")} />
								</div>
							</div>
							<div className="form_flex">
								<div className="form_block">
									<label htmlFor="height">Altura</label>
									<input type="text" {...register("height")} />
								</div>
								<div className="form_block">
									<label htmlFor="width">Largura</label>
									<input type="text" {...register("width")} />
								</div>
							</div>
						</ContentMain>
					</div>
					<ContentAside>
						<div className="container">
							<Title title="Categoria" />
							<FormGroup className="mt-1">
								{findCategory?.data?.content
									?.filter((fil) => fil.parent_category == null)
									?.map((item) => (
										<Controller
											key={item.id_category}
											name="id_category"
											control={control}
											render={({ field }) => (
												<label
													style={{ display: "block", marginBottom: "8px" }}
												>
													<input
														type="radio"
														value={item.id_category}
														checked={field.value == item.id_category}
														onChange={(e) => field.onChange(e.target.value)}
														style={{ marginRight: "8px", width: "20px" }}
													/>
													{item.name}
												</label>
											)}
										/>
									))}
								<ModalCategory />
							</FormGroup>
						</div>

						<div className="container mt-1">
							<Title
								title={
									findOneStore?.data?.content?.NAME_STORE.toLowerCase().startsWith(
										"nsa"
									)
										? "Ano"
										: "Marca"
								}
							/>
							<FormGroup className="mt-1">
								{findAll?.data?.content?.map((item) => (
									<Controller
										key={item.id_brand}
										name="id_brand"
										control={control}
										render={({ field }) => (
											<label style={{ display: "block", marginBottom: "8px" }}>
												<input
													type="radio"
													value={item.id_brand}
													checked={field.value == item.id_brand}
													onChange={(e) => field.onChange(e.target.value)}
													style={{ marginRight: "8px", width: "20px" }}
												/>
												{item.name}
											</label>
										)}
									/>
								))}
								<ModalBreads />
							</FormGroup>
						</div>
					</ContentAside>
				</div>

				<div className="form_block" style={{ width: "69%" }}>
					<Button type="submit" variant="contained">
						Salvar
					</Button>
				</div>
			</Formulario>
		</Container>
	);
};
