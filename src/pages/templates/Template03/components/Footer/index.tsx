import { Link } from "react-router-dom";
import { URL_HOST } from "../../../../../config/configUrl";
import { useLogo } from "../../../../../hooks/Logo/useLogo";
import { ContainerFooter } from "./styles";
import { useStore } from "../../../../../hooks/Store/useStore";
import { formatNumberPhone } from "../../../../../utils/formatNumberPhone";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { contactWhats } from "../../../../../utils/contactWhats";

export const Footer = () => {
    const { findAllLogo } = useLogo();
    const { findOneStore } = useStore();

    const assets = findOneStore?.data?.content;

    return (
        <ContainerFooter>
            <div className="footer-wrapper">
                <div className="footer-section logo">
                    <img
                        src={
                            findAllLogo.data?.content?.LOGO_FOOTER?.path
                                ? `${URL_HOST}${findAllLogo.data.content.LOGO_FOOTER.path}`
                                : "/default-logo.png"
                        }
                        alt="Logo do rodapé"
                    />
                    <p>
                        Conectando você ao que há de melhor em produtos. Atendimento,
                        qualidade e entrega rápida.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Institucional</h4>
                    <ul>
                        <li>
                            <Link to={"/"}>Página Inicial</Link>
                        </li>
                        <li>
                            <Link to={"/categorias"}>Categorias</Link>
                        </li>
                        <li>
                            <Link to={"/produtos"}>Lançamentos</Link>
                        </li>
                        <li>
                            <Link to={"/contato"}>Contato</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Ajuda</h4>
                    <ul>
                        <li>
                            <a href="/privacidade">Política de privacidade</a>
                        </li>
                        <li>
                            <a target="_blank" href={contactWhats(assets?.PHONES[0]?.number)}>Trocas e devoluções</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contato</h4>
                    {assets?.EMAILS?.map((item) => <p>Email: {item?.email}</p>)}
                    {assets?.PHONES?.map((item) => {
                        const phones = formatNumberPhone(item?.number);
                        return <p>Telefone: {phones}</p>;
                    })}

                    <div className="social">
                        {assets?.SOCIAIS == "" ? (
                            ""
                        ) : (
                            <>
                                {(assets?.SOCIAIS ?? [])?.map((item) => (
                                    <>
                                        {item?.type === "INSTAGRAM" && (
                                            <a target="_blank" href={item?.link}>
                                                <FaSquareInstagram />
                                            </a>
                                        )}
                                        <>
                                            {item?.type === "FACEBOOK" && (
                                                <a target="_blank" href={item?.link}>
                                                    <FaFacebook />
                                                </a>
                                            )}
                                        </>
                                    </>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} {assets?.NAME_STORE}. Todos os direitos
                    reservados.
                </p>
            </div>
        </ContainerFooter>
    );
};
