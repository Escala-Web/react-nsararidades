import { Button, Typography } from "@mui/material";
import { useStore } from "../../../../hooks/Store/useStore";
import { TablePhone } from "./ui/Table";
import { Breadcrumb } from "../../components/Breadcrumb";
import { FormLoja } from "../../components/FormLoja";
import { useForm } from "react-hook-form";
import { Formulario } from "../Products/create/styles";
import { useState } from "react";
import { useEmailAdmin } from "../../../../hooks/Store/useEmailAdmin";

export const EmailPage = () => {
	const [statusRegister, setStatusRegister] = useState<boolean>(false);

	const { findOneStore } = useStore();
	const { createdEmail } = useEmailAdmin();

	const { register, handleSubmit } = useForm();

	const handleSubmitEmail = (data) => {
		createdEmail.mutate(data);
	};

	return (
		<>
			<Breadcrumb
				title="Meus E-mails"
				button={!statusRegister ? "Cadastrar" : "Voltar"}
				onclick={() => setStatusRegister(!statusRegister)}
			/>

			{statusRegister ? (
				<FormLoja title="Cadastrar novo email">
					<Formulario onSubmit={handleSubmit(handleSubmitEmail)}>
						<div className="form_block">
							<label>Email</label>
							<input type="email" {...register("email")} />
						</div>
						<div className="form_flex mt">
							<label>Mostrar na loja</label>
							<input type="checkbox" {...register("is_show")} />
						</div>
						<div className="form_flex mt">
							<label>Padrão</label>
							<input type="checkbox" {...register("is_default")} />
						</div>
						<div className="form_block mt">
							<Button variant="contained" type="submit">
								Cadastrar
							</Button>
						</div>
					</Formulario>
				</FormLoja>
			) : (
				<>
					{findOneStore.data?.content?.EMAILS.length > 0 ? (
						<TablePhone data={findOneStore.data?.content?.EMAILS} />
					) : (
						<h2>Nenhum E-mail cadastrado</h2>
					)}
				</>
			)}
		</>
	);
};
