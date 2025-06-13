import { useState } from "react";
import { useOrderStatus } from "../../../../hooks/Orders/useOrderStatus"
import { TableOrders } from "./TableOrders"

export const Orders = () => {

    const [paginationModel, setPaginationModel] = useState({page: 0, pageSize: 25});

    const { data } = useOrderStatus('ALL', `${paginationModel.page + 1}`);

    return <TableOrders data={data?.content} paginationModel={paginationModel} setPaginationModel={setPaginationModel} totalCount={data?.page?.total || 0}/>
}