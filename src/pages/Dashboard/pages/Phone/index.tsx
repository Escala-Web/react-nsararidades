import { useState } from "react";
import { useStore } from "../../../../hooks/Store/useStore";
import { Breadcrumb } from "../../components/Breadcrumb";
import { TablePhone } from "./ui/Table";
import { FormLoja } from "../../components/FormLoja";
import { useForm } from "react-hook-form";
import { Formulario } from "../Products/create/styles";
import { Button } from "@mui/material";
import { usePhoneAdmin } from "../../../../hooks/Store/usePhoneAdmin";

export const Phone = () => {
	const { findOneStore } = useStore();

	const { register, handleSubmit, reset } = useForm();
	const { phoneCreated } = usePhoneAdmin();

	const [statusPhone, setStatusPhone] = useState<boolean>(false);

	const handleSubmitPhone = (data) => {
		phoneCreated.mutate(data, {
			onSuccess: () => {
				reset(); // Limpa os campos do formulário após sucesso
				setStatusPhone(false); // Opcional: volta para a lista após cadastro
			},
		});
	};

	return (
		<>
			<Breadcrumb
				title="Meus Telefones"
				button={statusPhone ? "Voltar" : "Cadastrar"}
				onclick={() => setStatusPhone(!statusPhone)}
			/>

			{statusPhone ? (
				<FormLoja title="Cadastrar novo Telefone">
					<Formulario onSubmit={handleSubmit(handleSubmitPhone)}>
						<div className="form_block">
							<label>Telefone</label>
							<input type="text" {...register("number")} />
						</div>
						<div className="form_block mt">
							<label>Tipo</label>
							<select {...register("type")}>
								<option value="WHATSAPP">Whatsapp</option>
							</select>
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
					{findOneStore.data?.content?.PHONES.length > 0 ? (
						<TablePhone data={findOneStore.data?.content?.PHONES} />
					) : (
						<h2>Nenhum telefone cadastrado</h2>
					)}
				</>
			)}
		</>
	);
};
