import { Box, Container } from "@mui/material";
import { Formulario } from "../Dashboard/pages/Products/create/styles";
import { FormEvent, useState } from "react";
import { useAdmin } from "../../hooks/admin/useAdmin";

export const Login = () => {

    const { login } = useAdmin();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    function handleLogin(event: FormEvent) {
        event.preventDefault();

        login.mutate({
            email,
            password
        })
    }

	return (
		<>
			<Container
				sx={{
					height: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box sx={{ width: "50%" }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "3rem",
						}}
					>
						<h2>Logo</h2>
					</Box>
					<Formulario onSubmit={handleLogin}>
						<div className="form_block">
							<label htmlFor="">E-mail</label>
							<input
								type="text"
								name="email"
								placeholder="Digite o seu E-mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
								required
							/>
						</div>
						<div className="form_block mt">
							<label htmlFor="">Senha</label>
							<input
								type="password"
								name="password"
								placeholder="Digite o sua senha"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
								required
							/>
						</div>
						<button className="contain">Entrar</button>
					</Formulario>
				</Box>
			</Container>
		</>
	);
};
