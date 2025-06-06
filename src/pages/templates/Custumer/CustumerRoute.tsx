import { Route, Routes } from "react-router-dom"
import { MyAccount } from "./pages/MyAccount"
import { MyDatas } from "./pages/MyDatas"
import { MyOrders } from "./pages/MyOrders"

export const CustumerRoute = () => {


    return (
        <Routes>
            <Route path="/custumer" element={<MyAccount />}/>
            <Route path="/custumer/meus-dados" element={<MyDatas />}/>
            <Route path="/custumer/pedidos" element={<MyOrders />} />
        </Routes>
    )
}