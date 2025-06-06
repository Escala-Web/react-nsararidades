

import { Link } from "react-router-dom";
import { URL_HOST } from "../../../../../../config/configUrl";
import { formatPrice } from "../../../../../../utils/formatPrice";
import { Container } from "./style";
import { formatUrl } from "../../../../../../utils/formatUrl";

export const CardProduct = ({ data }) => {

    const categoria = data.category ?? data?.categoria

	return (
		<>
	
            <Container to={`/${formatUrl(categoria)}/${formatUrl(data.name)}/${data.id_product}`}>
                <figure className="image">
                    <img src={`${URL_HOST}${data.variations[0].image_path}`} alt={data.name} />
                </figure>
                <main className="content">
                    <div className="description">
                        <p>{data.name}</p>
                        <h5>{formatPrice(data.variations[0].price)}</h5>
                    </div>
                    <div className="button">
                        <Link>Comprar</Link>
                    </div>
                </main>
            </Container>
		</>
	);
};
