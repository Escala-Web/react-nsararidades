import { Link } from "react-router-dom"
import { Title } from "../Title"
import { CardProduct } from "../CardProduct"
import { Container } from "./styles"
import { useProduct } from "../../../../../hooks/products/useProduct"

interface ProductPopularProps {
    name?: string,
    link?: string,
    image?: string,
    data?: []
}
export const ProductPopular = ({ name, link, data, image }: ProductPopularProps) => {

    return (
        <>
            <Container 
                image={image}
            >
                <div className="container_image_desktop">
                    
                </div>
                <div className="container_product_principal">
                    <div className="container_header">
                        <Title align="start" title={name} />
                        {/* <Link to='/produtos'>Ver mais</Link> */}
                    </div>
                    <div className="container_image_mobile">
                        
                    </div>
                    <div className="container_product">
                        {data?.map((item) => <CardProduct key={item?.id_product} product={item} variations={item?.variations[0]}/>)}
                    </div>
                </div>
            </Container>
        </>
    )
}