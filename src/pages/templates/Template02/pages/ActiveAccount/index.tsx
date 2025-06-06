import { useSearchParams } from "react-router-dom"
import { Container, ContainerGlobal } from "../../styles/styles"
import { ContainerAccount } from "./styles"
import { useUser } from "../../../../../hooks/users/useUser";

export const ActiveAccount = () => {

    const [search] = useSearchParams();

    const { loginActiveAccount } = useUser();

    const handleActiveAccount = () => {

        const token = search.get('token');

        loginActiveAccount.mutate({
            token: token
        })
    }

    return (
        <>
            <Container>
                <ContainerGlobal>
                    <ContainerAccount>
                        <div className="container">
                            <div className="header_title">
                                <h4>Ative sua conta para começar</h4>
                                <p>Confirme sua ativação para ter acesso completo ao sistema e aproveitar todos os recursos disponíveis.</p>
                            </div>
                            <div className="active">
                                <button onClick={handleActiveAccount}>Ativar minha conta</button>
                            </div>
                        </div>
                    </ContainerAccount>
                </ContainerGlobal>
            </Container>
        </>
    )
}