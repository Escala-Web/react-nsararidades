import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Container } from "./styles";
import imagePage from '../../../assets/page_contruct.png'
import { useStore } from "../../../hooks/Store/useStore";
import { contactWhats } from "../../../utils/contactWhats";
import { Seo } from "../../../seo";

export const PageContruct = () => {

    const { findOneStore } = useStore();

    const stores = findOneStore?.data?.content;

    const whatsLink = contactWhats(findOneStore?.data?.content?.PHONES[0]?.number);



	return (
		<>
            <Seo 
                keywords={stores?.NAME_STORE}
                title="Loja em construção"
                description="Estamos trabalhando com dedicação nos últimos detalhes para trazer
							até você um site totalmente novo, pensado para oferecer a melhor
							experiência possível. Em breve, você poderá acessar nossa
							plataforma com conteúdo exclusivo, novidades incríveis e tudo o
							que preparamos com muito cuidado."
            />
			<Container>
				<div className="container">
					<div className="container_content">
						<h4>{stores?.NAME_STORE}</h4>
						<h2>
							Lançamento <br /> em Breve
						</h2>
						<p>
							Estamos trabalhando com dedicação nos últimos detalhes para trazer
							até você um site totalmente novo, pensado para oferecer a melhor
							experiência possível. Em breve, você poderá acessar nossa
							plataforma com conteúdo exclusivo, novidades incríveis e tudo o
							que preparamos com muito cuidado.
						</p>
						<a target="_blank" href={whatsLink}>Fale Conosco</a>
						<div className="container_redes_sociais">
							<p>Siga-nos</p>
							<div className="bar"></div>
							<div className="redes_sociais">
								<span>
									<FaFacebook />
								</span>
								<span>
									<FaInstagram />
								</span>
                                <span>
									<FaInstagram />
								</span>
							</div>
						</div>
					</div>
					<div className="image">
                        {/* <img src={imagePage} alt="" /> */}
                    </div>
				</div>
			</Container>
		</>
	);
};
