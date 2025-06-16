import { FormEvent, useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { Title } from "../../components/Title";
import { Formulario } from "../../styles/Formulario";
import { Container } from "./styles";
import { toast } from "react-toastify";
import { IRegisterUser } from "../../../../../types/IUsers";
import { useUser } from "../../../../../hooks/users/useUser";
import { IMaskInput } from "react-imask";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const steps = ["Informações Pessoais", "Endereço", "Credenciais"];

export const Register = () => {
	const [password, setPassword] = useState<string>("");
	const [formData, setFormData] = useState<IRegisterUser>({
		username: "",
		email: "",
		password: "",
		type: "NATURAL",
		person: {
			cpf: "",
			dt_birth: "",
			gender: "M",
		},
		address: {
			public_area: "",
			number: "",
			district: "",
			city: "",
			state: "",
			zip_code: "",
		},
		phone: {
			type: "WHATSAPP",
			number: "",
		},
	});

	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => setActiveStep((prev) => prev + 1);
	const handleBack = () => setActiveStep((prev) => prev - 1);

	const { createUser } = useUser();

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		// Exemplo básico de validação
		if (!formData.username || !formData.email) {
			toast.warning("Preencha os campos obrigatórios");
			return;
		}

		if (password !== formData.password) {
			toast.error("As senhas devem ser iguais!");
			return;
		}

		formData.address.zip_code.replace("-", "");

		createUser.mutate(formData);
	}

	const [isPassword, setIsPassword] = useState<boolean>(false);
	const [isPasswordC, setIsPasswordC] = useState<boolean>(false);

	return (
		<Container>
			<div className="container">
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label, index) => (
						<Step key={index}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<Formulario>
					<Title align="start" title="Registre-se" />

					{activeStep === 0 && (
						<>
							<div className="form_flex mt">
								<div className="form_block">
									<label htmlFor="username">Nome</label>
									<input
										type="text"
										name="username"
										value={formData.username}
										onChange={(e) =>
											setFormData({ ...formData, username: e.target.value })
										}
										placeholder="Digite o seu nome"
										required
									/>
								</div>
								<div className="form_block">
									<label htmlFor="email">E-mail</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
										placeholder="Digite seu e-mail"
										required
									/>
								</div>
							</div>

							<div className="form_flex mt">
								<div className="form_block">
									<label htmlFor="number">Celular</label>
									<IMaskInput
										mask="(00) 00000-0000"
										type="tel"
										name="number"
										value={formData.phone.number}
										onAccept={(value) =>
											setFormData({
												...formData,
												phone: { ...formData.phone, number: value },
											})
										}
										placeholder="Digite o seu número"
										required
									/>
								</div>
								<div className="form_block">
									<label htmlFor="type">Tipo de pessoa</label>
									<select
										name="type"
										value={formData.type}
										onChange={(e) => {
											const newType = e.target.value as "NATURAL" | "LEGAL";
											setFormData({
												...formData,
												type: newType,
												person:
													newType === "NATURAL"
														? { cpf: "", dt_birth: "", gender: "M" }
														: {
																cnpj: "",
																corporate_name: "",
																trade_name: "",
																state_registration: "",
															},
											});
										}}
									>
										<option value="NATURAL">Pessoa Física</option>
										<option value="LEGAL">Pessoa Jurídica</option>
									</select>
								</div>
							</div>

							<>
								{formData.type === "NATURAL" && (
									<div className="form_flex mt">
										<div className="form_block">
											<label htmlFor="gender">Gênero</label>
											<select
												name="gender"
												value={
													"gender" in formData.person
														? formData.person.gender
														: ""
												}
												onChange={(e) => {
													const newGender = e.target.value;
													if ("gender" in formData.person) {
														setFormData({
															...formData,
															person: {
																...formData.person,
																gender: newGender,
															},
														});
													}
												}}
											>
												<option value="M">Masculino</option>
												<option value="F">Feminino</option>
												<option value="N/E">Prefiro não responder</option>
											</select>
										</div>

										<div className="form_block">
											<label htmlFor="cpf">CPF</label>
											<IMaskInput
												mask="000.000.000-00"
												name="cpf"
												placeholder="Digite seu CPF"
												value={
													"cpf" in formData.person ? formData.person.cpf : ""
												}
												onChange={(e) => {
													if ("cpf" in formData.person) {
														setFormData({
															...formData,
															person: {
																...formData.person,
																cpf: e.target.value,
															},
														});
													}
												}}
											/>
										</div>
										<div className="form_block">
											<label htmlFor="dt_birth">Data de Nascimento</label>
											<input
												type="date"
												name="dt_birth"
												value={
													"dt_birth" in formData.person &&
													formData.person.dt_birth
														? formData.person.dt_birth
														: ""
												}
												onChange={(e) => {
													if ("dt_birth" in formData.person) {
														setFormData({
															...formData,
															person: {
																...formData.person,
																dt_birth: e.target.value, // já vem no formato YYYY-MM-DD
															},
														});
													}
												}}
											/>
										</div>
									</div>
								)}
							</>
							<>
								{formData.type === "LEGAL" && (
									<>
										<div className="form_flex mt">
											<div className="form_block">
												<label htmlFor="cnpj">CNPJ</label>
												<IMaskInput
													mask="00.000.000/0000-00"
													type="tel"
													name="cnpj"
													placeholder="Digite seu cnpj"
													value={
														"cnpj" in formData.person
															? formData.person.cnpj
															: ""
													}
													onChange={(e) => {
														if ("cnpj" in formData.person) {
															setFormData({
																...formData,
																person: {
																	...formData.person,
																	cnpj: e.target.value,
																},
															});
														}
													}}
												/>
											</div>

											<div className="form_block">
												<label htmlFor="cpf">Nome da empresa</label>
												<input
													type="text"
													name="corporate_name"
													placeholder="Digite o nome da empresa"
													value={
														"corporate_name" in formData.person
															? formData.person.corporate_name
															: ""
													}
													onChange={(e) => {
														if ("corporate_name" in formData.person) {
															setFormData({
																...formData,
																person: {
																	...formData.person,
																	corporate_name: e.target.value,
																},
															});
														}
													}}
												/>
											</div>
										</div>
										<div className="form_flex">
											<div className="form_block">
												<label htmlFor="trade_name">Nome Fantasia</label>
												<input
													type="text"
													name="corporate_name"
													placeholder="Digite seu Nome Fantasia"
													value={
														"trade_name" in formData.person
															? formData.person.trade_name
															: ""
													}
													onChange={(e) => {
														if ("trade_name" in formData.person) {
															setFormData({
																...formData,
																person: {
																	...formData.person,
																	trade_name: e.target.value,
																},
															});
														}
													}}
												/>
											</div>
											<div className="form_block">
												<label htmlFor="state_registration">
													Inscriação Estadual
												</label>
												<input
													type="text"
													name="state_registration"
													placeholder="Digite seu Nome Fantasia"
													value={
														"state_registration" in formData.person
															? formData.person.state_registration
															: ""
													}
													onChange={(e) => {
														if ("state_registration" in formData.person) {
															setFormData({
																...formData,
																person: {
																	...formData.person,
																	state_registration: e.target.value,
																},
															});
														}
													}}
												/>
											</div>
										</div>
									</>
								)}
							</>
						</>
					)}

					{activeStep === 1 && (
						<>
							<div className="form_flex mt">
								<div className="form_block">
									<label htmlFor="public_area">Rua</label>
									<input
										type="text"
										name="public_area"
										placeholder="Digite o nome da rua"
										value={formData.address.public_area}
										onChange={(e) =>
											setFormData({
												...formData,
												address: {
													...formData.address,
													public_area: e.target.value,
												},
											})
										}
										required
									/>
								</div>
								<div className="form_block">
									<label htmlFor="number">Número</label>
									<input
										type="text"
										name="number"
										placeholder="Número"
										value={formData.address.number}
										onChange={(e) =>
											setFormData({
												...formData,
												address: {
													...formData.address,
													number: e.target.value,
												},
											})
										}
										required
									/>
								</div>
							</div>

							<div className="form_flex mt">
								<div className="form_block">
									<label htmlFor="district">Bairro</label>
									<input
										type="text"
										name="district"
										placeholder="Digite o bairro"
										value={formData.address.district}
										onChange={(e) =>
											setFormData({
												...formData,
												address: {
													...formData.address,
													district: e.target.value,
												},
											})
										}
										required
									/>
								</div>
								<div className="form_block">
									<label htmlFor="city">Cidade</label>
									<input
										type="text"
										name="city"
										placeholder="Digite a cidade"
										value={formData.address.city}
										onChange={(e) =>
											setFormData({
												...formData,
												address: {
													...formData.address,
													city: e.target.value,
												},
											})
										}
										required
									/>
								</div>
							</div>

							<div className="form_flex mt">
								<div className="form_block">
									<label htmlFor="state">Estado</label>
									<input
										type="text"
										name="state"
										placeholder="UF"
										maxLength={2}
										value={formData.address.state}
										onChange={(e) =>
											setFormData({
												...formData,
												address: {
													...formData.address,
													state: e.target.value.toUpperCase(),
												},
											})
										}
										required
									/>
								</div>
								<div className="form_block">
									<label htmlFor="zip_code">CEP</label>
									<IMaskInput
										mask="00000-000"
										type="text"
										name="zip_code"
										placeholder="Digite o CEP"
										value={formData.address?.zip_code || ""}
										onAccept={(value) =>
											setFormData((prev) => ({
												...prev,
												address: {
													...prev.address,
													zip_code: value,
												},
											}))
										}
										required
									/>
								</div>
							</div>
						</>
					)}

					{activeStep === 2 && (
						<>
							<div className="form_flex mt">
								<div className="form_block">
									<label htmlFor="password">Senha</label>
									<input
										type={isPassword ? "text" : "password"}
										name="password"
										placeholder="Digite sua senha"
										value={formData.password}
										onChange={(e) =>
											setFormData({
												...formData,

												password: e.target.value,
											})
										}
										required
									/>
									<button
										type="button"
										className="password"
										onClick={() => setIsPassword(!isPassword)}
									>
										{isPassword ? <MdVisibilityOff /> : <MdVisibility />}
									</button>
								</div>
								<div className="form_block">
									<label htmlFor="passwordC">Confirmar senha</label>
									<input
										type={isPasswordC ? "text" : "password"}
										name="passwordC"
										placeholder="Confirme sua senha"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
										className="input"
									/>
									<button
										type="button"
										className="password"
										onClick={() => setIsPasswordC(!isPasswordC)}
									>
										{isPasswordC ? <MdVisibilityOff /> : <MdVisibility />}
									</button>
								</div>
							</div>
						</>
					)}

					<div className="container_stepps">
						{/* Botão Próximo */}
						{activeStep < steps.length - 1 && (
							<button type="button" className="contain" onClick={handleNext}>
								Próximo
							</button>
						)}

						{/* Botão Cadastrar */}
						{activeStep === steps.length - 1 && (
							<button type="submit" className="contain" onClick={handleSubmit}>
								Cadastrar
							</button>
						)}

						{/* Botão Voltar */}
						{activeStep > 0 && (
							<button type="button" className="no_contain" onClick={handleBack}>
								Voltar
							</button>
						)}
					</div>
				</Formulario>
			</div>
		</Container>
	);
};
