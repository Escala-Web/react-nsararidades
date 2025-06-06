import React, { useState } from "react";
import { Title } from "../../components/Title";
import { Formulario } from "../../styles/Formulario";
import { Container } from "./styles";
import { useAdmin } from "../../../../../hooks/admin/useAdmin";
import { ForgetPassword } from "../../components/Login/ForgetPassword";
import { useUser } from "../../../../../hooks/users/useUser";
import { Link } from "react-router-dom";

interface LoginProps {
	type: string;
}
export const Login = ({ type }: LoginProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login: loginAdmin } = useAdmin();
	const { loginUser } = useUser();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		loginUser.mutate({
			login: email,
			password,
		});
	};

	return (
		<>
			<Container>
				<div className="container">
					<Title title="Acesse sua conta" align="start" />
					<Formulario onSubmit={handleSubmit}>
						<div className="form_block">
							<label htmlFor="email">E-mail</label>
							<input
								placeholder="E-mail"
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="form_block mt">
							<label htmlFor="password">Senha</label>
							<input
								placeholder="Senha"
								type="password"
								name="password"
								id="password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
						<div className="form_flex mt">
							<button type="submit" className="button contain">
								{loginAdmin.isPending ? "Entrando..." : "Entrar"}
							</button>
							<ForgetPassword />
						</div>
						<div className="form_flex">
							<Link to={'/register'} className="new_user mt" style={{ marginTop: "10px" }}>
								Novo por aqui? Cadastre-se e comece agora!
							</Link>
						</div>
					</Formulario>
				</div>
			</Container>
		</>
	);
};
