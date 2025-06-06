import { useParams, useSearchParams } from "react-router-dom";
import { useProductPageOne } from "../../../../../hooks/products/useProductPageOne"
import { Container, ContainerGlobal } from "../../styles/styles"
import { ContainerProduct } from "./styles";
import { formatPrice } from "../../../../../utils/formatPrice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Divider } from "@mui/material";
import { Slider } from "./Slider";
import { Description } from "./Description";
import { useCart } from "../../../../../context/Cart";
import { Breadcrumb } from "../../components/Breadcrumb";

export const Product = () => {

    const { id_product } = useParams();
    const { addToCart } = useCart();
    const { findOneProduct } = useProductPageOne(id_product);

    const products = findOneProduct?.data?.content;

    return (
        <>
            <Container>
                <ContainerGlobal>
                    <Breadcrumb name={products?.name}/>

                    <ContainerProduct>
                        <div className="banner">
                            <Slider data={products?.variations}/>
                        </div>
                        <div className="container_infos">
                            <h2>{products?.name}</h2>
                            <div className="info_bread">
                                <li>
                                    <p>Código do produto:</p>
                                    <span>{products?.variations[0]?.sku}</span>
                                </li>
                                <li>
                                    <p>Marca:</p>
                                    <span>{products?.brand}</span>
                                </li>
                                
                            </div>
                            <h1>{formatPrice(products?.variations[0]?.price)}</h1>

                            <div className="actions">

                                <div className="count_container">
                                    <span>
                                        <FaMinus />
                                    </span>
                                    <input type="text" disabled value={'6'}/>
                                    <span>
                                        <FaPlus />
                                    </span>
                                </div>

                                <button>Comprar agora</button>
                                <button onClick={() => addToCart(products)}>Adicionar no carrinho</button>
                            </div>
                        </div>
                    </ContainerProduct>
                    <Description description={products?.description}/>
                </ContainerGlobal>
            </Container>
        </>
    )
}