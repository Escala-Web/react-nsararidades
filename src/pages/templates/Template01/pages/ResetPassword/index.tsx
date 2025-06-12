import { FormEvent, useState } from "react";
import { Title } from "../../components/Title";
import { Formulario } from "../../styles/Formulario";
import { Container } from "./styles";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../../../../../hooks/users/useUser";

export const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');

	const { resetPasswordLogin } = useUser();

    const [search] = useSearchParams();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if(password != passwordC) {
            toast.error('As senhas devem ser iguais');
			return;
        }

        resetPasswordLogin.mutate({
            password: password,
            token: String(search.get('token'))
        })
    }

	return (
		<>
			<Container>
				<div className="container">
					<Title title="Recuperar Senha" align="start" />
					<Formulario onSubmit={handleSubmit}>
						<div className="form_block">
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
						<div className="form_block mt">
							<label htmlFor="passwordC">Confirmar senha</label>
							<input
								placeholder="Confirmar senha"
								type="password"
								name="passwordC"
								id="passwordC"
                                value={passwordC}
                                onChange={(event) => setPasswordC(event.target.value)}
							/>
						</div>
						<div className="form_flex mt">
							<button type="submit" className="button contain">
								Confirmar
							</button>
						</div>
					</Formulario>
				</div>
			</Container>
		</>
	);
};
