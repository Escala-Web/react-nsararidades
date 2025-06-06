import { CustumerRoute } from "../Custumer/CustumerRoute"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Template02Routes } from "./Template02Routes"


export const Template02 = () => {

    return (
        <>
            <Header />
            <Template02Routes />
            <CustumerRoute />
            {/* <Footer /> */}
        </>
    )
}