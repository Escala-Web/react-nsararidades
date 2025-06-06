import { useForm } from "react-hook-form";
import { Formulario } from "../../components/Formulario";
import { Container } from "../../styles/Container";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useUser } from "../../../../../hooks/users/useUser";

const steps = ["Dados cadastrais", "Endereço", "Credenciais"];

export const Register = () => {
	const [step, setStep] = useState(0);
	const [password, setPassword] = useState<boolean>(false);
	const [cPassword, setCPassword] = useState<boolean>(false);

	const toggleNextStep = () => {
		if (step < 0) return;
		setStep((prev) => prev + 1);
	};

	const togglePrevStep = () => {
		if (step < 0) return;
		setStep((prev) => prev - 1);
	};

	const { register, handleSubmit } = useForm();
	const { createUser } = useUser();

	const onSubmit = (data: any) => {
		if (data.password !== data.cpassword) {
			alert("As senhas não coincidem");
			return;
		}

		const payload = {
			username: data.username,
			email: data.email,
			password: data.password,
			type: data.type,
			person: {
				cpf: data.cpf,
				dt_birth: data.dt_birth,
				gender: data.gender,
			},
			address: {
				public_area: data.public_area,
				number: data.address_number,
				district: data.district,
				city: data.city,
				state: data.state,
				zip_code: data.zip_code,
			},
			phone: {
				type: "WHATSAPP",
				number: data.phone_number,
			},
		};

		// console.log(payload)
		createUser.mutate(payload)
	};

	return (
		<Container>
			<div className="container">
				<Formulario title="Registrar" subTitle="">
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box sx={{ width: "100%", marginTop: "-30px", padding: "0" }}>
							<Stepper activeStep={step} alternativeLabel>
								{steps.map((label) => (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								))}
							</Stepper>
						</Box>

						{/* Step 0 */}
						{step === 0 && (
							<>
								<h4 className="mt-1">Dados cadastrais</h4>
								<div className="mt-1">
									<label>Nome</label>
									<input type="text" placeholder="Digite seu nome" {...register("username")} />
								</div>
								<div className="mt-1">
									<label>Email</label>
									<input type="text" placeholder="Ex: @seuemail.com" {...register("email")} />
								</div>
								<div className="mt-1">
									<label>Telefone</label>
									<input type="text" placeholder="Ex: (11) 99999-9999" {...register("phone_number")} />
								</div>

								<h4 className="mt">Dados Pessoais</h4>
								<div className="mt-1">
									<label>Pessoa</label>
									<select {...register("type")}>
										<option value="NATURAL">Física</option>
										<option value="LEGAL">Jurídica</option>
									</select>
								</div>
								<div className="mt-1">
									<label>CPF</label>
									<input type="text" placeholder="Ex: 999.999.999-99" {...register("cpf")} />
								</div>
								<div className="mt-1">
									<label>Gênero</label>
									<select {...register("gender")}>
										<option value="M">Masculino</option>
										<option value="F">Feminino</option>
										<option value="N/E">Não prefiro dizer</option>
									</select>
								</div>
								<div className="mt-1">
									<label>Data de Nascimento</label>
									<input type="date" {...register("dt_birth")} />
								</div>
								<div className="mt-1">
									<button type="button" onClick={toggleNextStep}>
										Próximo
									</button>
								</div>
							</>
						)}

						{/* Step 1 */}
						{step === 1 && (
							<>
								<h4>Endereço</h4>
								<div className="mt-1">
									<label>Endereço</label>
									<input type="text" placeholder="Digite seu endereço" {...register("public_area")} />
								</div>
								<div className="mt-1">
									<label>Cidade</label>
									<input type="text" placeholder="Ex: São Paulo" {...register("city")} />
								</div>
								<div className="mt-1">
									<label>Bairro</label>
									<input type="text" placeholder="Ex: Centro" {...register("district")} />
								</div>
								<div className="mt-1">
									<label>Estado</label>
									<input type="text" placeholder="Ex: SP" {...register("state")} />
								</div>
								<div className="mt-1">
									<label>Número</label>
									<input type="text" placeholder="Ex: 546" {...register("address_number")} />
								</div>
								<div className="mt-1">
									<label>CEP</label>
									<input type="text" placeholder="Ex: 99999-999" {...register("zip_code")} />
								</div>
								<div className="mt-1 flex">
									<button className="back" type="button" onClick={togglePrevStep}>
										Voltar
									</button>
									<button type="button" onClick={toggleNextStep}>
										Próximo
									</button>
								</div>
							</>
						)}

						{/* Step 2 */}
						{step === 2 && (
							<>
								<h4 className="mt">Credenciais</h4>
								<div className="mt-1">
									<label>Senha</label>
									<div className="container_password">
										<input
											type={password ? 'text' : 'password'}
											placeholder="*********"
											{...register("password")}
										/>
										<span className="btn_password" onClick={() => setPassword(!password)}>
											{password ? <VisibilityOffIcon /> : <VisibilityIcon />}
										</span>
									</div>
								</div>
								<div className="mt-1">
									<label>Confirmar senha</label>
									<div className="container_password">
										<input
											type={cPassword ? 'text' : 'password'}
											placeholder="*********"
											{...register("cpassword")}
										/>
										<span className="btn_password" onClick={() => setCPassword(!cPassword)}>
											{cPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
										</span>
									</div>
								</div>
								<div className="mt-1 flex">
									<button className="back" type="button" onClick={togglePrevStep}>
										Voltar
									</button>
									<button type="submit">Cadastrar</button>
								</div>
							</>
						)}
					</form>
				</Formulario>
			</div>
		</Container>
	);
};
