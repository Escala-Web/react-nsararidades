import { FaUser } from "react-icons/fa";
import { CardDashboard } from "../../components/CardDashboard";
import { Container } from "./styles";
import { useUserAdmin } from "../../../../hooks/users/useUserAdmin";
import { TableUser } from "./TableUser";
import { useState } from "react";


export const Clients = () => {

    const [paginationModel, setPaginationModel] = useState({page: 0, pageSize: 25});
    const { data: users } = useUserAdmin(paginationModel.page + 1);
    const total:number = users?.pages?.total;

    return (
        <>
            <Container>
                <div className="container">
                    <CardDashboard 
                        name='Clientes ativos'
                        icon={<FaUser />}
                        color='#0089ff'
                        data={users?.pages?.actives}
                    />
                    <CardDashboard 
                        name='Clientes Inativos'
                        icon={<FaUser />}
                        data={users?.pages?.inactives}
                    />
                    <CardDashboard 
                        name='Total de Clientes'
                        icon={<FaUser />}
                        color='#0089ff'
                        data={users?.pages?.total}
                    />
                    {/* <CardDashboard 
                        name='Total de Clientes'
                        icon={<FaUser />}
                        color='#0089ff'
                        data={users?.pages?.total}
                        // data={client?.content.length}
                    /> */}
                </div>
                <TableUser data={users?.content} paginationModel={paginationModel} setPagination={setPaginationModel} total={total}/>
            </Container>
        </>
    )
}