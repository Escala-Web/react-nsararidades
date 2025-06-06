import { FormEvent, useState } from "react";
import { useUser } from "../../../../../hooks/users/useUser";
import { Formulario } from "../../components/Formulario";
import { ContainerGlobal } from "../../styles/styles";
import { Container } from "../Home/styles";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

export const ResetPassword = () => {
	const [password, setPassword] = useState<string>("");
	const [cPassword, setCPassword] = useState<string>("");

	const [search] = useSearchParams();

	const { resetPasswordLogin } = useUser();

	const handleResetPassword = (event: FormEvent) => {
		const token = search.get("token");

		event.preventDefault();

		if (cPassword !== password) {
			toast.error("As senhas devem ser iguais");
		}

		resetPasswordLogin.mutate({
			password: password,
			token: token,
		});
	};

	return (
		<>
			<Container>
				<ContainerGlobal>
					<Formulario
						onSubmit={handleResetPassword}
						title="Redefinir sua senha"
						subTitle="Insira seu e-mail para receber instruções de redefinição de senha"
					>
						<label htmlFor="">Senha</label>
						<input
							type="password"
							placeholder="******"
							name="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						<div className="mt"></div>
						<label htmlFor="">Confirmar senha</label>
						<input
							type="password"
							placeholder="******"
							name="password"
							value={cPassword}
							onChange={(event) => setCPassword(event.target.value)}
						/>
						<div className="mt"></div>
						<button>Redefinir senha</button>
					</Formulario>
				</ContainerGlobal>
			</Container>
		</>
	);
};
