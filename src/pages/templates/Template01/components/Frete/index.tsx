import { useForm } from "react-hook-form";
import { useCart } from "../../../../../context/Cart";
import { Container, ModalContainer } from "./style";
import { useState } from "react";
import { useFrete } from "../../../../../hooks/Frete/useFrete";
import { useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IFreteData } from "../../../../../types/IFrete";
import { formatPrice } from "../../../../../utils/formatPrice";
import { LoadingReg } from "../Loading/LoadingReg";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #00000015",
	boxShadow: 24,
	borderRadius: 4,
	p: 4,
};

export const Frete = () => {
	const { qtd } = useCart();
	const { register, handleSubmit } = useForm();
	const { calcularFrete } = useFrete();
	const { id_product } = useParams();

	const [dataFrete, setDataFrete] = useState([]);

	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);

	const handleSubmitFrete = (frete) => {
		calcularFrete.mutate(
			{
				products: [
					{
						id_product: Number(id_product),
						quantity: qtd,
					},
				],
				zip_code: frete.frete,
			},
			{
				onSuccess: (data: IFreteData) => {
					setOpen(true);
					setDataFrete(data);
				},
			}
		);
	};

	const calcularDataEntrega = (dias: number) => {
		const data = new Date();
		data.setDate(data.getDate() + dias);

		const dia = String(data.getDate()).padStart(2, "0");
		const mes = String(data.getMonth() + 1).padStart(2, "0");
		const ano = data.getFullYear();

		return `${dia}/${mes}/${ano}`;
	};

	return (
		<>
			<Container>
				<p>Calcule seu frete:</p>

				<form onSubmit={handleSubmit(handleSubmitFrete)} className="container">
					<input
						type="text"
						placeholder="Ex: 12345-678"
						{...register("frete")}
					/>
					<button>{calcularFrete.isPending ? <LoadingReg title="Carregando"/> : 'Calcular'}</button>
				</form>
			</Container>

			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<ModalContainer>
							<h2>Fretes disponiveis</h2>

							<div className="card_container">
								{dataFrete?.content
									?.filter(
										(i) =>
											i.error !==
											"Serviço econômico indisponível para o trecho."
									)
									?.map((item) => (
										<div className="card">
											<div className="card_flex">
												<p>Entregue por: {item?.name}</p>
												<img src={item?.company?.picture} alt={item?.name} />
											</div>
											<div className="card_flex">
												<p>
													Chegará até{" "}
													{calcularDataEntrega(item.custom_delivery_time)}
												</p>
												<strong>{formatPrice(item?.custom_price)}</strong>
											</div>
										</div>
									))}
							</div>
						</ModalContainer>
					</Box>
				</Modal>
			</div>
		</>
	);
};
