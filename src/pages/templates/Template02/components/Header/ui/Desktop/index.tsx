import { Link } from "react-router-dom";
import { URL_HOST } from "../../../../../../../config/configUrl";
import { useLogo } from "../../../../../../../hooks/Logo/useLogo";
import { ContainerGlobal } from "../../../../styles/styles";
import { Container, NavigationUl } from "./styles";
import { Avatar } from "@mui/material";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Search } from "../Search";
import { useContext } from "react";
import { AuthContext } from "../../../../../../../context/Auth";

export const HeaderDesktop = () => {
	const { findAllLogo } = useLogo();

	const logo = findAllLogo.data?.content?.LOGO?.path;

	const { login } = useContext(AuthContext);

	return (
		<>
			<ContainerGlobal>
				<Container>
					<div className="container">
						<div className="logo">
							<img src={`${URL_HOST}${logo}`} alt="" />
						</div>

						<Search />

						<div className="container_account">
							{/* {login.rule === "USER" ? ( */}
							{/* <div className="account">
									<Avatar>{'v'}</Avatar>
									<Link to={'/custumer'}>{'ve'}</Link>
								</div> */}
							{/* ) : ( */}
							<div className="account_login">
								<Avatar>
									<FaUser />
								</Avatar>
								<p>
									<Link to={"/login"}>Entre</Link> ou{" "}
									<Link to={"/register"}>Cadastra-se</Link>
								</p>
							</div>
							{/* )} */}
							<div className="actions">
								<div className="cart">
									<FaShoppingCart />
									<span>2</span>
								</div>
								<div className="heart">
									<FaHeart />
									<span>2</span>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</ContainerGlobal>

			<NavigationUl>
				<ul>
					<li>
						<Link to={"/"}>Página Inicial</Link>
					</li>
					<li>
						<Link to={"/marcas"}>Marcas</Link>
					</li>
					<li>
						<Link to={"/categorias"}>Categorias</Link>
					</li>
					<li>
						<Link to={"/produtos"}>Lançamentos</Link>
					</li>
					<li>
						<Link to={"/contato"}>Contato</Link>
					</li>
				</ul>
			</NavigationUl>
		</>
	);
};
