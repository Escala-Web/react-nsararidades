import { FormEvent, useState } from "react";
import { Container, Formulario } from "./styles";
import { useAdmin } from "../../../../hooks/admin/useAdmin";
import { ForgetPassword } from "../../components/ForgetPassword";

export const Login = () => {
	const { login } = useAdmin();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin(event: FormEvent) {
		event.preventDefault();

		login.mutate({
			email,
			password,
		});
	}

	return (
		<>
			<Container>
				<div className="container">
					<div className="container_header">
						<h2>Login</h2>
					</div>
					<Formulario>
						<div className="form_block">
							<label htmlFor="" style={{ color: '#333' }}>E-mail</label>
							<input
								type="text"
								placeholder="Ex: @seuemail.com.br"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="form_block">
							<label htmlFor="" style={{ color: '#333' }}>Senha</label>
							<input
								type="password"
								placeholder="**************"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
						<div className="form_buttons">
							<button onClick={handleLogin} className="contain">Entrar</button>
							<ForgetPassword />
						</div>
					</Formulario>
				</div>
			</Container>
		</>
	);
};
