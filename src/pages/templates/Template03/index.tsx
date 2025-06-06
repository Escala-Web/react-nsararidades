import { CustumerRoute } from "../Custumer/CustumerRoute"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Template03Routes } from "./Template03Routes"

export const Template03 = () => {

    return (
        <>
            <Header />
            <Template03Routes />
            <CustumerRoute />
            <Footer />
        </>
    )

}