import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Formulario } from "../../../../styles/Formulario";
import { useAddress } from "../../../../../../../hooks/Address/useAddress";
import { IAddressContent } from "../../../../../../../types/IAddress";
import { IoClose } from "react-icons/io5";

const style = {
	position: "absolute" as const,
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "100%",
	maxWidth: 500,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: "2rem",
	borderRadius: "12px",
};

export const AddressAdd = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { register, handleSubmit, reset, formState: { errors } } = useForm<IAddressContent>();
	const { createAddress } = useAddress();

	const handleSubmitAddress = (data: IAddressContent) => {
	const formattedData = {
		...data,
		zip_code: data.zip_code.replace(/\D/g, ""), // Remove hífens e qualquer caractere não numérico
	};

	createAddress.mutate(formattedData, {
		onSuccess: () => {
			handleClose();
			reset();
		},
	});
};


	return (
		<div>
			<button type="button" onClick={handleOpen} className="add_address">
				<FaPlus />
			</button>

			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
						<h2>Adicionar Novo Endereço</h2>
						<button onClick={handleClose} style={{ background: "none", border: "none", cursor: "pointer" }}>
							<IoClose size={24} />
						</button>
					</div>

					<Formulario onSubmit={handleSubmit(handleSubmitAddress)} className="formulario">
						<div className="mt">
							<label>Endereço</label>
							<input {...register("public_area", { required: "Campo obrigatório" })} />
							{errors.public_area && <span>{errors.public_area.message}</span>}
						</div>
						<div className="mt">
							<label>Cidade</label>
							<input {...register("city", { required: "Campo obrigatório" })} />
							{errors.city && <span>{errors.city.message}</span>}
						</div>
						<div className="mt">
							<label>Bairro</label>
							<input {...register("district", { required: "Campo obrigatório" })} />
							{errors.district && <span>{errors.district.message}</span>}
						</div>
						<div className="mt">
							<label>CEP</label>
							<input {...register("zip_code", {
								required: "Campo obrigatório",
								pattern: {
									value: /^\d{5}-?\d{3}$/,
									message: "Formato inválido (ex: 12345-678)"
								}
							})} />
							{errors.zip_code && <span>{errors.zip_code.message}</span>}
						</div>
						<div className="mt">
							<label>Estado</label>
							<input {...register("state", { required: "Campo obrigatório" })} />
							{errors.state && <span>{errors.state.message}</span>}
						</div>
						<div className="mt">
							<label>Número</label>
							<input {...register("number", { required: "Campo obrigatório" })} />
							{errors.number && <span>{errors.number.message}</span>}
						</div>
						<div className="mt">
							<label>Complemento</label>
							<input {...register("complement")} />
						</div>

						<div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1.5rem" }}>
							<button type="button" onClick={handleClose} className="cancel">
								Cancelar
							</button>
							<button type="submit" className="save">
								Salvar Endereço
							</button>
						</div>
					</Formulario>
				</Box>
			</Modal>
		</div>
	);
};
