import { FormEvent, useState } from "react";
import { useUser } from "../../../../../hooks/users/useUser";
import { Formulario } from "../../components/Formulario";
import { ContainerGlobal } from "../../styles/styles";
import { Container } from "../Home/styles";
import { Link } from "react-router-dom";
import { ModalEmail } from "./Modal";
import loginImage from "../../assets/login.png";

export const Login = () => {
	const { loginUser, forgetPasswordLogin } = useUser();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	function handleLogin(event: FormEvent) {
		event.preventDefault();

		loginUser.mutate({
			login: email,
			password: password,
		});
	}

	return (
		<>
			<ContainerGlobal>
				<Container>
					<Formulario
						image={loginImage}
						onSubmit={handleLogin}
						title="Login"
						subTitle="Faça login para acessar a sua conta"
					>
						<label htmlFor="">E-mail</label>
						<input
							type="email"
							placeholder="E-mail"
							value={email}
							name="email"
							onChange={(event) => setEmail(event.target.value)}
						/>
						<div className="mt"></div>
						<label htmlFor="">Senha</label>
						<input
							type="password"
							placeholder="***********"
							value={password}
							name="email"
							onChange={(event) => setPassword(event.target.value)}
						/>
						<div className="mt"></div>
						<button type="submit">Entrar</button>

						<ModalEmail />

						<div className="reset_password">
							<p>
								Ainda não tem uma conta?{" "}
								<Link to={"/register"}>Crie uma agora</Link>
							</p>
						</div>
					</Formulario>
				</Container>
			</ContainerGlobal>
		</>
	);
};
