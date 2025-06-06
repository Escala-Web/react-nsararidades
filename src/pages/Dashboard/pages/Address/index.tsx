import { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { TableAddress } from "./ui/Table";
import { useStore } from "../../../../hooks/Store/useStore";
import { Formulario } from "../Products/create/styles";
import { useForm } from "react-hook-form";
import { FormLoja } from "../../components/FormLoja";
import { useAddressAdmin } from "../../../../hooks/Store/useAddressAdmin";
import { Button } from "@mui/material";

export const Address = () => {
	const [isAddress, setIsAddress] = useState<boolean>(false);
	const { findOneStore } = useStore();
	const { register, handleSubmit } = useForm({
		defaultValues: {
			is_show: false,
			is_default: false,
		},
	});

	const address = findOneStore?.data?.content?.ADDRESSES;
	const { createdAddress } = useAddressAdmin();

	const handleSubmitAddress = (data) => {
		const formattedData = {
			...data,
			is_show: data.is_show ?? false,
			is_default: data.is_default ?? false,
		};

		createdAddress.mutate(formattedData);
	};

	return (
		<>
			<Breadcrumb
				title="Meus Endereços"
				button={isAddress ? "Voltar" : "Cadastrar"}
				onclick={() => setIsAddress(!isAddress)}
			/>

			{isAddress ? (
				<FormLoja title="Cadastre um endereço">
					<Formulario onSubmit={handleSubmit(handleSubmitAddress)}>
						<div className="form_block">
							<label>Endereço</label>
							<input {...register("public_area")} />
						</div>
						<div className="form_block mt">
							<label>Número</label>
							<input {...register("number")} />
						</div>
						<div className="form_block mt">
							<label>Bairro</label>
							<input {...register("district")} />
						</div>
						<div className="form_block mt">
							<label>Cidade</label>
							<input {...register("city")} />
						</div>
						<div className="form_block mt">
							<label>Estado</label>
							<input {...register("state")} />
						</div>
						<div className="form_block mt">
							<label>CEP</label>
							<input {...register("zip_code")} />
						</div>
						<div className="form_flex mt">
							<label>Mostrar no site?</label>
							<input type="checkbox" {...register("is_show")} />
						</div>
						<div className="form_flex mt">
							<label>Padrão?</label>
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
					{findOneStore.data?.content?.ADDRESSES.length > 0 ? (
						<TableAddress data={findOneStore.data?.content?.ADDRESSES} />
					) : (
						<h2>Nenhum endereço cadastrado</h2>
					)}
				</>
			)}
		</>
	);
};
