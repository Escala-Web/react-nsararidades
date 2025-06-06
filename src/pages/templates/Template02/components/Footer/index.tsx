import { ContainerGlobal } from "../../styles/styles"
import { Container } from "./styles"

export const Footer = () => {
    return (
        <>

        <Container>
            <ContainerGlobal style={{background: 'transparent'}}>
            <footer className="container">
    <div className="footer-col logo">
        <p>ehwuiyb</p>
    </div>
    
    <div className="footer-col">
        <h4>Ajuda</h4>
        <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Como funciona</a></li>
        </ul>
    </div>
    
    <div className="footer-col">
        <h4>Contato</h4>
        <p>Email: contato@exemplo.com</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>Endereço: Rua Exemplo, 123 - SP</p>
    </div>
    
    <div className="footer-col">
        <h4>Mapa</h4>
        <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100"  loading="lazy"></iframe>
    </div>
</footer>

            </ContainerGlobal>
        </Container>
        </>
    )
}