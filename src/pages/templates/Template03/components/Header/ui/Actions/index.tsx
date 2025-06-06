import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../../../../../../context/Auth";
import { useCart } from "../../../../../../../context/Cart";

export const Actions = () => {

	const { login } = useContext(AuthContext);
	const { cart } = useCart();

	console.log(cart)

	return (
		<>
			<Container>
				{!login || login?.rule === 'admin' ? (
					<div className="action">
					<span className="icon">
                        <FaCircleUser />
                    </span>
					<div className="text">
						<p><Link to={"/login"}>Entrar</Link> ou</p> 
						<Link to={"/register"}> Cadastre-se</Link>
					</div>
				</div>

				) : (
				<Link to={'/custumer'} className="action on">
					<span className="icon">
						<p>{login?.name[0]}</p>
                    </span>
					<div className="text">
						<p>{login?.name?.split(' ')[0]}</p> 
					</div>
				</Link>
				)}
                <Link className="action">
					<span className="icon">
                        <FaShoppingCart />
                    </span>
					<div className="text">
						<p>Carrinho <strong>{cart?.length}</strong></p>
                        {/* <p>R$ 289,95</p> */}
					</div>
				</Link>
			</Container>
		</>
	);
};
