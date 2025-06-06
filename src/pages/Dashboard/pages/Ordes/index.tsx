import { useOrderStatus } from "../../../../hooks/Orders/useOrderStatus"
import { TableOrders } from "./TableOrders"

export const Orders = () => {

    const { data } = useOrderStatus('ALL', '1');

    return <TableOrders data={data?.content}/>
}