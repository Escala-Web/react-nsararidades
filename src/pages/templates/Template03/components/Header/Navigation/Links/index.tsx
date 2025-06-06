import { Link } from "react-router-dom"
import { Container } from "./styles"

export const LinksNavigation = () => {
    return (
        <>
            <Container>
                <ul>
                    <li>
                        <Link to={'/'}>Página Inicial</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Categorias</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Anos</Link>
                    </li>
                    <li>
                        <Link to={'/produtos'}>Lançamentos</Link>
                    </li>
                    <li>
                        <Link to={'/contato'}>Contato</Link>
                    </li>
                </ul>
            </Container>
        </>
    )
}