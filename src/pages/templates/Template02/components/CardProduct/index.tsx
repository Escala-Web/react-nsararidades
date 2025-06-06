import { URL_HOST } from "../../../../../config/configUrl"
import { IProduct } from "../../../../../types/IOrder"
import { formatPrice } from "../../../../../utils/formatPrice"
import { formatUrl } from "../../../../../utils/formatUrl"
import { Container } from "./styles"

export const CardProducts = ({ data }) => {

    const safeFormat = (value) => value ? formatUrl(value) : '';
    const category = safeFormat(data?.category);
    const name = safeFormat(data?.name);

    return (
        <>
            <Container to={`/${category}/${name}/${data?.id_product}`}>
                <div className="card">
                    <div className="media">
                        <img src={`${URL_HOST}${data?.variations[0]?.image_path}`} alt="" />
                    </div>
                    <div className="content">
                        <p>{data?.name}</p>
                        <div className="container">
                            <span>R$ 29,99</span>
                            <p>{formatPrice(data?.variations[0]?.price)}</p>
                        </div>
                    </div>
                </div>
            </Container>

        
        </>
    )
}