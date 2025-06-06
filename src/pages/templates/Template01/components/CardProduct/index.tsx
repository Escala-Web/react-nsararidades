import { Link } from "react-router-dom";
import { URL_HOST } from "../../../../../config/configUrl";
import { formatPrice } from "../../../../../utils/formatPrice";
import { formatUrl } from "../../../../../utils/formatUrl";
import { Container } from "./styles";
import { CanvasImage } from "../../pages/Product/ui/Canvas";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../../../../context/Cart";

interface ProductVariation {
	id_product_variant: number;
	sku: string;
	price: string;
	qtd_stock: number;
	discount: string;
	image_path: string;
	is_default: number;
}

interface Product {
	id_product: number;
	brand: string;
	name: string;
	variations: ProductVariation[];
}

interface CardProductProps {
	product?: Product;
	variations: { id_product_variant: number };
}

export const CardProduct: React.FC<CardProductProps> = ({
	product,
	variations,
}) => {
	const variation = product
		? product?.variations?.filter(
				(item) => item?.id_product_variant === variations?.id_product_variant
			)
		: [];

	const safeFormat = (value) => (value ? formatUrl(value) : "");
	const category = safeFormat(
		product?.category ? product?.category : product?.categoria
	);
	const name = safeFormat(product?.name);

	return (
		<Container to={variations?.qtd_stock !== null ? `/${category}/${name}/${product?.id_product}` : '/contato'}>
			<div className="media">
				<img src={`${URL_HOST}${variations?.image_path}`} />
			</div>
			<div className="content">
				<p>
					{product ? product.name : "Lorem ipsum dolor sit amet consectetur."}
				</p>
				<div className="price">
		
					<h4>
						{variations?.qtd_stock !== null
							? formatPrice(variation[0]?.price)
							: "Produto esgotado!"}
					</h4>

					{/* <p>Até em 5x de {formatPrice(variation[0]?.price / 5)} sem juros</p> */}
				</div>
				{variations?.qtd_stock ? (
				<Link
					to={product ? `/${category}/${name}/${product?.id_product}` : ""}
					className="link_mobile"
				>
					Comprar
				</Link>

				): (
					<Link to={'/contato'} className="link_contact">Entrar em contato</Link>
				)}
			</div>
		</Container>
	);
};
