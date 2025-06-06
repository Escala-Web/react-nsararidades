import { CardProduct } from "../../../components/Card/CardProduct"
import { Title } from "../../../components/Title"
import { Container } from "./styles"

export const Products = ({ data, title }) => {

    return (
        <>
            <Container>
                <Title title={title}/>
                <div className="content_card">
                    {data?.content.slice(0,10)?.map((item) => (
                        <CardProduct data={item}/>
                    ))}
                </div>
            </Container>
        </>
    )
}