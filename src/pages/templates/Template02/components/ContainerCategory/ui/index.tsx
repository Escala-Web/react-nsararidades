import { Link } from "react-router-dom"
import { Container } from "./styles"

export const CardDetaque = () => {
    return (
        <>
            <Container>
                <h4>Seu Categoria</h4>
                <Link className="link">Ver mais</Link>
            </Container>
        </>
    )
}