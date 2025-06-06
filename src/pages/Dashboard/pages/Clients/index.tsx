import { FaUser } from "react-icons/fa";
import { CardDashboard } from "../../components/CardDashboard";
import { Container } from "./styles";
import { useUserAdmin } from "../../../../hooks/users/useUserAdmin";
import { TableUser } from "./TableUser";


export const Clients = () => {

    const { data: users } = useUserAdmin(1)

    console.log(users)


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
                <TableUser data={users?.content}/>
            </Container>
        </>
    )
}