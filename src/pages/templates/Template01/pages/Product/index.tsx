import { useNavigate, useParams } from "react-router-dom";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";
import { Container } from "./styles";
import { useProductPageOne } from "../../../../../hooks/products/useProductPageOne";
import { Banner } from "./ui/Banner";
import { useCart } from "../../../../../context/Cart";
import { Divider } from "@mui/material";
import { Relacion } from "./ui/Relacion";
import { formatPrice } from "../../../../../utils/formatPrice";
import { toast } from "react-toastify";
import { Loading } from "../Loading";
import { Quantidade } from "../../components/Quantidade";
import { useStore } from "../../../../../hooks/Store/useStore";
import { Frete } from "../../components/Frete";
import { ActionsBuyECart } from "./ui/ActionsBuyECart";
import { Seo } from "../../../../../seo";

export const Product = () => {
	const { id_product } = useParams();
	const { findOneProduct } = useProductPageOne(parseInt(id_product));
	const { findOneStore } = useStore();

	if (findOneProduct.isLoading) {
		return <Loading />;
	}

	return (
		<>
			<Seo
				description={findOneProduct?.data?.content?.name}
				title={`${findOneStore?.data?.content?.NAME_STORE} - ${findOneProduct?.data?.content?.name}`}
			/>
			<ContainerTemplate>
				<Container>
					<div className="container">
						<div>
							{(findOneProduct?.data?.content?.variations || []).map((item) => (
								<Banner
									key={item?.id_product_variant}
									data={item}
									load={false}
								/>
							))}
						</div>
						<div className="container_content">
							<div className="content_description">
								<h1>{findOneProduct?.data?.content?.name}</h1>
							</div>
							<Divider />

							<div className="infos_aside">
								{findOneProduct?.data?.content?.variations?.map((item) => (
									<>
										<p>
											{findOneStore?.data?.content?.NAME_STORE?.toLocaleLowerCase().startsWith(
												"nsa"
											)
												? "Ano"
												: "Marca"}
											: <strong>{findOneProduct?.data?.content?.brand}</strong>
										</p>
										<p>
											Categoria:{" "}
											<strong>
												{findOneProduct?.data?.content?.name_category}
											</strong>
										</p>
										<p>
											Codigo do produto: <strong>{item?.sku}</strong>
										</p>
									</>
								))}
							</div>
							<Divider />
							<div className="container_price">
								<h3>
									{findOneProduct?.data?.content?.variations?.[0]?.price
										? formatPrice(
												findOneProduct?.data?.content?.variations[0]?.price
											)
										: "Preço não disponível"}
								</h3>
							</div>

							<Divider />

							<div className="container_qtd">
								<p>Quantidade: </p>
								<Quantidade data={findOneProduct?.data?.content} />
								{findOneProduct?.data?.content?.variations?.map((item) => (
									<>
										<p>
											Quantidade em estoque: <strong>{item?.qtd_stock}</strong>
										</p>
									</>
								))}
							</div>

							<ActionsBuyECart />

							<Divider />
							<Frete />
						</div>
					</div>
					<Divider />
					<div className="container_description">
						<br />
						<div
							className="descricao-produto"
							dangerouslySetInnerHTML={{
								__html: findOneProduct?.data?.content?.description,
							}}
						/>
						<br />
					</div>
					<div className="container_description">
						<h2 className="title">Produtos Relacionados</h2>
						<Relacion
							id={findOneProduct?.data?.content?.id_category}
							id_product={findOneProduct?.data?.content?.id_product}
						/>
					</div>
				</Container>
			</ContainerTemplate>
		</>
	);
};
