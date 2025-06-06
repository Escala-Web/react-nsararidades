import { Avatar } from "@mui/material";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { useUser } from "../../../../../hooks/users/useUser";

export const CardMyAccount = () => {

	const { findAllUser } = useUser();

	const user = findAllUser?.data?.content;


	return (
		<>
			<Container>
				<div className="container">
					<div className="profile_container">
						<Avatar sx={{ height: "60px", width: "60px" }} />
						<div className="profile">
							<p>Seja Bem-vindo, {user?.username}</p>
							<div className="email">
                                <IoMail />
                                <p>{user?.email}</p>
                            </div>
						</div>
					</div>
					<Link className="link_my_account" to={"/custumer/meus-dados"}>
						Meus Dados
					</Link>
				</div>
			</Container>
		</>
	);
};
