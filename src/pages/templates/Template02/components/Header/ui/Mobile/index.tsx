import { URL_HOST } from "../../../../../../../config/configUrl"
import { useLogo } from "../../../../../../../hooks/Logo/useLogo"
import { ILogoResponseJson } from "../../../../../../../types/ILogo"
import { NavigationMobile } from "../NavigationMobile"
import { Search } from "../Search"
import { Container } from "./styles"

export const Mobile = () => {

    const { findAllLogo } = useLogo();

    const logo = findAllLogo?.data?.content as ILogoResponseJson

    console.log(logo)

    return (
        <>
            <Container>
                <div className="logo">
                    <img src={`${URL_HOST}${logo?.LOGO?.path}`} alt="" />
                </div>
                <Search />
                <NavigationMobile />
            </Container>
        </>
    )
}