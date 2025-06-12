import { Link } from "react-router-dom";
import { Container } from "./styles";
import { IoArrowBackSharp } from "react-icons/io5";
import { useOnboarding } from "../../hooks/Onboarding/useOnboarding";
import { useStore } from "../../hooks/Store/useStore";
import { ReactNode } from "react";

interface DashboardTemplateProps {
    children: ReactNode,
    description?: string
}
export const DashboardTemplate = ({ children, description }: DashboardTemplateProps) => {

    const { findAllStore } = useStore();
    const { onBoarding } = useOnboarding();

    const handleOnBoarding = () => {
    onBoarding.mutate(undefined, {
        onSuccess: (data) => {
            if (data?.redirect_url) {
            
                    window.open(data.redirect_url, '_blank');
            } else {
                console.error('URL de redirecionamento não encontrada.');
            }
        },
        onError: (error) => {
            console.error('Erro ao iniciar onboarding:', error);
        },
    });
};

    


    return (
        <>
            <Container>
                <div className="container">
                    <div className="content">
                        {children}
                    </div>
                </div>

                <div className="sidebar">
                    <div className="content_sidebar">
                        <div className="logo">
                            <img
                                src="https://avatars.githubusercontent.com/u/189899865?v=4&size=64"
                                alt="Logo da escala"
                            />
                            <h4>Escala Web</h4>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                        <Link to={"https://escalaweb.com.br"} target="_blank">
                            <IoArrowBackSharp />
                            <p>Dúvidas? entre em contato</p>
                        </Link>
                    </div>
                    <div className="footer">
                        <a target="_blank" href="https://escalaweb.com.br/politica-de-privacidade">Contato</a>
                        <a target="_blank" href="https://escalaweb.com.br/politica-de-privacidade">Politicas de Privacidade</a>
                        <p>Todos os direitos reservados da <a href="">Escala Web</a></p>
                    </div>
                </div>
            </Container>
        </>
    );
};
