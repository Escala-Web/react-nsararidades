import { Link } from "react-router-dom"
import { Title } from "../Title"
import { Container } from "./styles"
import { formatPrice } from "../../../../../utils/formatPrice";
import { URL_HOST } from "../../../../../config/configUrl";
import { formatUrl } from "../../../../../utils/formatUrl";

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
    category: string
}

interface DestaquesProps {
    data?: Product
}
export const Destaques = ({ data }: DestaquesProps) => {

    return (
        <>
            <Container >
                <Title title="Destaques de hoje" align="start" link="Ver mais"/>
                <div className="container_images">
                    {data?.flatMap((product: Product) => (
                        product?.variations?.map((variation: ProductVariation) => (
                            <div className="image" style={{ backgroundImage: `url(${URL_HOST+variation?.image_path || "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000"})`, }}>
                                <div className="content">
                                    <p className="name_product">{product?.name}</p>
                                    <p className="price">{formatPrice(variation?.price)}</p>
                                    <Link to={`/${formatUrl(product?.category)}/${formatUrl(product?.name)}/${product?.id_product}`}>Comprar</Link>
                                </div>
                            </div>
                        ))
                    ))}
                
                </div>
            </Container>
        </>
    )
}