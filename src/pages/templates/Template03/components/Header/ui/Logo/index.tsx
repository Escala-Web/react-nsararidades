import { URL_HOST } from "../../../../../../../config/configUrl";
import { useStore } from "../../../../../../../hooks/Store/useStore"
import { Container } from "./styles";

export const Logo = () => {

    const { findOneStore } = useStore();

    return (
        <>
            <Container>
                <img src={`${URL_HOST}${findOneStore?.data?.content?.LOGO?.path}`} alt={`Logo da ${findOneStore?.data?.content?.NAME_STORE}`}/>
            </Container>
        </>
    )
}