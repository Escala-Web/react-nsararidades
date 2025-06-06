import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container, ContainerPrimary } from "./styles";
import registerPng from "../../assets/images/bg_register.png";
import { Formulario } from "../../pages/Dashboard/pages/Products/create/styles";
import { useFieldArray, useForm } from "react-hook-form";
import { FaTrashAlt } from "react-icons/fa";
import { Button, Divider } from "@mui/material";
import { useOnboarding } from "../../hooks/Onboarding/useOnboarding";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "../../hooks/Store/useStore";

const steps = ["E-commerce", "Redes Sociais", "Integração"];

export const Onboarding = () => {
	const [primary, setPrimary] = React.useState(true);

	const [step, setStep] = React.useState(0);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		trigger
	} = useForm({
		defaultValues: {
			name: "",
			phones: [
				{ number: "", type: "WHATSAPP", is_show: false, is_default: false },
			],
			emails: [{ email: "", is_default: false, is_show: false }],
			sociais: [
				{
					type: "",
					link: "",
				},
			],
			addresses: [
				{
					public_area: "",
					number: "",
					complement: "",
					district: "",
					city: "",
					state: "",
					zip_code: "",
					is_default: false,
					is_show: false,
				},
			],
		},
	});

	const {
		fields: phoneFields,
		append: appendPhone,
		remove: removePhone,
	} = useFieldArray({
		control,
		name: "phones",
	});

	// 📧 EMAILS
	const {
		fields: emailFields,
		append: appendEmail,
		remove: removeEmail,
	} = useFieldArray({
		control,
		name: "emails",
	});

	const {
		fields: addressFields,
		append: appendAdress,
		remove: removeAdress,
	} = useFieldArray({
		control,
		name: "addresses",
	});

	const {
		fields: sociaisFields,
		append: appendSociais,
		remove: removeSociais,
	} = useFieldArray({
		control,
		name: "sociais",
	});

	const [redeSocial, setRedeSocial] = React.useState("");

	const { createOnboarding } = useOnboarding();

	const navigate = useNavigate();

	const onSubmit = (data) => {
	
		const datafrete = data?.token_shipping === "" ? null : data?.token_shipping;

		createOnboarding.mutate({
			name: data.name,
			emails: data.emails,
			phones: data.phones,
			addresses: data.addresses,
			token_shipping: datafrete,
		});


		if (createOnboarding.isSuccess) {
			navigate("/administrativo/active-stripe");
		}

		if (createOnboarding.isError) {
			if (
				createOnboarding.error.response.data.message === "Loja já cadastrada"
			) {
				toast.warning(createOnboarding.error.response.data.message);
				navigate("/administrativo/active-stripe");
			}
			console.log("Erroor: " + createOnboarding.error);
		}
	};

	const proximoStep = async () => {
		const camposDoStepAtual =
			step === 1 ? ["name", "email"] : ["address", "cep"];

		const valido = await trigger(camposDoStepAtual);

		if (valido) setStep((prev) => prev + 1);
	};

	return (
		<>
			{primary ? (
				<ContainerPrimary>
					<div className="container">
						<div className="title">
							<h2>Obrigado pela sua confiança!</h2>
							<h4>Compra realizada com sucesso!</h4>
						</div>
						<div className="description">
							<p>
								{" "}
								É um prazer ter você como cliente. Em breve, você receberá todos
								os detalhes do seu serviço. Nossa equipe está à disposição para
								te oferecer a melhor experiência possível.
							</p>
						</div>
						<button onClick={() => setPrimary(!primary)}>
							Ativar meu E-commerce
						</button>
					</div>
				</ContainerPrimary>
			) : (
				<Container>
					<div className="form">
						<Box sx={{ width: "100%" }}>
							<Stepper activeStep={step} alternativeLabel>
								{steps.map((label) => (
									<Step key={label}>
										<StepLabel className="text_color">{label}</StepLabel>
									</Step>
								))}
							</Stepper>
							<Formulario
								onSubmit={handleSubmit(onSubmit)}
								style={{
									display: "flex",
									justifyContent: "center",
									alignContent: "center",
									flexDirection: "column",
									minHeight: "80vh",
									marginTop: "4rem",
								}}
							>
								<>
									{step === 0 && (
										<>
											<div className="form_block">
												<label htmlFor="">Nome da loja</label>
												<input
													type="text"
													{...register("name", {
														required: "O nome da loja é obrigatorio.",
													})}
												/>
												{errors.name && (
													<p className="error">{errors.name.message}</p>
												)}
											</div>
											<h4 className="title mt">Telefones</h4>
											{phoneFields.map((field, index) => (
												<>
													<div className="form_flex mt" key={field.id}>
														<div
															className="form_block"
															style={{ width: "70%" }}
														>
															<label>Telefone</label>
															<input
																type="tel"
																{...register(`phones.${index}.number`)}
															/>
														</div>
														<div
															className="form_block"
															style={{ width: "40%" }}
														>
															<label>Tipo</label>
															<select {...register(`phones.${index}.type`)}>
																<option value="WHATSAPP">Whatsapp</option>
																<option value="CELLPHONE">Celular</option>
																<option value="PHONE">Telefone</option>
																<option value="COMMERCIAL">
																	Telefone Comercial
																</option>
															</select>
														</div>
														<div
															className="form_block"
															style={{ width: "15%" }}
														>
															<span onClick={() => removePhone(index)}>
																<FaTrashAlt />
															</span>
														</div>
													</div>
													<div className="form_block mt">
														<div className="form_flex" style={{ width: "40%" }}>
															<label>Aparecer na loja?</label>
															<input
																type="checkbox"
																{...register(`phones.${index}.is_show`)}
															/>
														</div>
														<div className="form_flex" style={{ width: "40%" }}>
															<label>É padrão?</label>
															<input
																type="checkbox"
																{...register(`phones.${index}.is_default`)}
															/>
														</div>
													</div>
													<Divider
														sx={{
															paddingTop: "1rem",
															backgroundColor: "transparent",
														}}
													/>
												</>
											))}

											<div className="form_block" style={{ width: "30%" }}>
												<Button
													type="button"
													className="mt contain"
													variant="outlined"
													onClick={() =>
														appendPhone({
															phone: "",
															type: "WHATSAPP",
															is_show: false,
															is_default: false,
														})
													}
												>
													Adicionar novo telefone
												</Button>
											</div>

											<h4 className="title mt" style={{ marginTop: "2rem" }}>
												Emails
											</h4>
											{emailFields.map((field, index) => (
												<>
													<div className="form_flex mt" key={field.id}>
														<div
															className="form_block"
															style={{ width: "100%" }}
														>
															<label>Email</label>
															<input
																type="email"
																{...register(`emails.${index}.email`)}
															/>
														</div>

														<div
															className="form_block"
															style={{ width: "15%" }}
														>
															<span onClick={() => removeEmail(index)}>
																<FaTrashAlt />
															</span>
														</div>
													</div>
													<div className="form_flex">
														<div className="form_flex" style={{ width: "40%" }}>
															<label>Aparecer na loja?</label>
															<input
																type="checkbox"
																{...register(`emails.${index}.is_show`)}
															/>
														</div>
													</div>
													<div className="form_flex">
														<div className="form_flex" style={{ width: "40%" }}>
															<label>É padrão?</label>
															<input
																type="checkbox"
																{...register(`emails.${index}.is_default`)}
															/>
														</div>
													</div>
													<Divider
														sx={{
															paddingTop: "1rem",
															backgroundColor: "transparent",
														}}
													/>
												</>
											))}

											<div className="form_block" style={{ width: "30%" }}>
												<Button
													type="button"
													className="mt contain"
													variant="outlined"
													onClick={() =>
														appendEmail({
															email: "",
															is_default: false,
															is_show: false,
														})
													}
												>
													Adicionar novo Email
												</Button>
											</div>
											<h3 className="title mt">Endereço</h3>
											{addressFields.map((field, index) => (
												<>
													<div className="form_flex mt" key={field.id}>
														<div
															className="form_block"
															style={{ width: "100%" }}
														>
															<label>Endereço</label>
															<input
																type="text"
																{...register(`addresses.${index}.public_area`)}
															/>
														</div>
														<div
															className="form_block"
															style={{ width: "20%" }}
														>
															<label>Numero</label>
															<input
																type="text"
																{...register(`addresses.${index}.number`)}
															/>
														</div>
														<div
															className="form_block"
															style={{ width: "30%" }}
														>
															<label>CEP</label>
															<input
																type="text"
																{...register(`addresses.${index}.zip_code`)}
															/>
														</div>
													</div>
													<div className="form_flex mt">
														<div className="form_block">
															<label>Complamento</label>
															<input
																type="text"
																{...register(`addresses.${index}.complement`)}
															/>
														</div>
														<div className="form_block">
															<label>Cidade</label>
															<input
																type="text"
																{...register(`addresses.${index}.city`)}
															/>
														</div>
														<div className="form_block">
															<label>Bairro</label>
															<input
																type="text"
																{...register(`addresses.${index}.district`)}
															/>
														</div>
														<div
															className="form_block"
															style={{ width: "30%" }}
														>
															<label>UF</label>
															<input
																type="text"
																{...register(`addresses.${index}.state`)}
															/>
														</div>
													</div>

													<div className="form_flex">
														<div className="form_block mt">
															<div
																className="form_flex"
																style={{ width: "40%" }}
															>
																<label>Aparecer na loja?</label>
																<input
																	type="checkbox"
																	{...register(`addresses.${index}.is_show`)}
																/>
															</div>
															<div
																className="form_flex"
																style={{ width: "40%" }}
															>
																<label>É padrão?</label>
																<input
																	type="checkbox"
																	{...register(`addresses.${index}.is_default`)}
																/>
															</div>
														</div>
														<div
															className="form_block"
															style={{ width: "10%" }}
														>
															<span onClick={() => removeAdress(index)}>
																<FaTrashAlt />
															</span>
														</div>
													</div>

													<Divider
														sx={{
															paddingTop: "1rem",
															backgroundColor: "transparent",
														}}
													/>
												</>
											))}

											<div className="form_block" style={{ width: "30%" }}>
												<Button
													type="button"
													className="mt contain"
													variant="outlined"
													onClick={() =>
														appendAdress({
															public_area: "",
															number: "",
															complement: "",
															district: "",
															city: "",
															state: "",
															zip_code: "",
															is_default: false,
															is_show: false,
														})
													}
												>
													Adicionar novo Endereço
												</Button>
											</div>
											<div className="form_block mt-4">
												<Button
													variant="contained"
													onClick={proximoStep}
												>
													Proximo
												</Button>
											</div>
										</>
									)}
								</>
								<>
									{step === 1 && (
										<>
											<h3 className="title">Redes Sociais</h3>
											<div className="form_block">
												{sociaisFields?.map((field, index) => (
													<>
														<div className="form_block mt">
															<label>Escolha uma rede social</label>
															<select {...register(`sociais.${index}.type`)}>
																<option value="INSTAGRAN">Instagran</option>
																<option value="FACEBOOK">Facebook</option>
																<option value="YOUTUBE">Youtube</option>
																<option value="LINKEDIN">Linkedin</option>
																<option value="TIKTOK">Tik-tok</option>
																<option value="X">X</option>
															</select>
														</div>
														<div className="form_block" key={field.id}>
															<label>Link do </label>
															<input
																type="text"
																{...register(`sociais.${index}.link`)}
															/>
														</div>
														<div
															className="form_block"
															style={{ width: "100%" }}
														>
															<button
																className="add"
																onClick={() => removeSociais(index)}
															>
																<FaTrashAlt />
															</button>
														</div>
													</>
												))}
												<div className="form_block">
													<button
														type="button"
														className="contain"
														onClick={() =>
															appendSociais({
																type: "",
																link: "",
															})
														}
													>
														Adicionar nova rede social
													</button>
												</div>
											</div>

											<div className="form_flex mt" style={{ width: "100%" }}>
												<Button onClick={() => setStep(step - 1)}>
													Voltar
												</Button>
												<Button
													onClick={() => setStep(step + 1)}
													variant="contained"
												>
													Proximo
												</Button>
											</div>
										</>
									)}
								</>
								<>
									{step === 2 && (
										<>
											<div className="form_flex">
												<div className="form_block">
													<label>Integração de frente (Não obrigatorio)</label>
													<textarea
														{...register("token_shipping")}
														rows={15}
													></textarea>
												</div>
											</div>
											<div className="form_block">
												<a
													className="contain"
													style={{ textAlign: "center" }}
													target="_blank"
													href="https://melhorenvio.com.br/"
												>
													Cadastra-se aqui
												</a>
											</div>

											<div className="form_flex mt-4" style={{ width: "100%" }}>
												<Button onClick={() => setStep(step - 1)}>
													Voltar
												</Button>
												<Button type="submit" variant="contained">
													Cadastrar
												</Button>
											</div>
										</>
									)}
								</>
							</Formulario>
						</Box>
					</div>
					<div
				style={{ backgroundImage: `url("${registerPng}")` }}
				className="image"
				></div>

				</Container>
			)}
		</>
	);
};
