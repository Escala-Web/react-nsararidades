import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Container } from "../../styles/Container";
import { useProductPageOne } from "../../../../../hooks/products/useProductPageOne";
import { ProductContainer } from "./styles";
import { URL_HOST } from "../../../../../config/configUrl";
import { Divider } from "@mui/material";
import { formatPrice } from "../../../../../utils/formatPrice";
import { Title } from "../../components/Title";
import { useProductFilter } from "../../../../../hooks/products/useProductFilter";
import { CardProduct } from "../../components/Card/CardProduct";
import { useCart } from "../../../../../context/Cart";

export const Product = () => {
	const { id_product } = useParams();
	const { findOneProduct } = useProductPageOne(Number(id_product));
  const { data: relacions, isLoading } = useProductFilter("category", '1', "1");

  const { addCartId } = useCart();

	const product = findOneProduct?.data?.content;
	const pictures = product?.variations?.[0]?.pictures || [];

	const [selectedImage, setSelectedImage] = useState<string>("");

	useEffect(() => {
		if (pictures.length > 0) {
			setSelectedImage(pictures[0].image_path);
		}
	}, [pictures]);

	const handleSelectImage = (img: string) => {
		setSelectedImage(img);
	};

  const navigate = useNavigate();

  const cardAdd = (id) => {
    addCartId(id)
    navigate('/carrinho');
  } 

	return (
		<>
			<Breadcrumb page="Produto" />
			<Container>
				<div className="container">
					<ProductContainer>
						<div className="container_content">
							<div className="container_banner">
								<div className="banner">
									{selectedImage ? (
										<img
											src={`https://api.nsararidades.com.br${selectedImage}`}
											alt="Imagem principal do produto"
										/>
									) : (
										<p>Carregando imagem...</p>
									)}
								</div>

								<div className="prev_images">
									{pictures.map((pic) => (
										<img
											key={pic.id_media}
											src={`${URL_HOST}${pic.image_path}`}
											alt={`Miniatura ${pic.position}`}
											onClick={() => handleSelectImage(pic.image_path)}
											className={
												selectedImage === pic.image_path ? "active" : ""
											}
										/>
									))}
								</div>
							</div>

							<div className="aside">
								<div className="content_container">
									<h3>{product?.name}</h3>

									<div className="infos">
										<p>Ano: {product?.brand}</p>
										<p>Categoria: {product?.name_category}</p>
										<p>Codigo do produto: {product?.variations[0]?.sku}</p>
									</div>

									<h4>{formatPrice(product?.variations[0]?.price)}</h4>

									<div className="container_btns">
										<button className="btn conten" onClick={() => cardAdd(product?.id_product)}>Comprar Agora</button>
										<button className="btn no_conten" onClick={() => addCartId(product?.id_product)}>
											Adicionar no Carrinho
										</button>
									</div>
								</div>
							</div>
						</div>
						<Title title="Descrição" />
						<div
							className="description"
							dangerouslySetInnerHTML={{
								__html: findOneProduct?.data?.content?.description,
							}}
						></div>

						<div className="relations">
							<Title title="Relacionados" />
							<div className="card_relations">
                  {relacions?.content?.slice(0, 10)?.map((item) => (
                    <CardProduct data={item}/>
                  ))}
              </div>
						</div>
					</ProductContainer>
				</div>
			</Container>
		</>
	);
};
