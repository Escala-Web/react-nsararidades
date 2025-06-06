import { useState } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
} from "@mui/material";

import { Formulario } from "../../styles";
import { useVariation } from "../../../../../../../hooks/Variation/useVariation";
import { Title } from "../../../../../components/Title";
import { Container } from "./styles";

export const ModalVariation = () => {
	const [open, setOpen] = useState(false);
	const [variationName, setVariationName] = useState<string>("");


	const { createVariation, findAllVariation } = useVariation();
	const { data } = findAllVariation;

	// Função para abrir o modal
	const handleOpen = () => {
		setOpen(true);
	};

	// Função para fechar o modal
	const handleClose = () => {
		setOpen(false);
	};

	// Função de envio da variação
	const handleSubmitVariations = () => {
		createVariation.mutate({
			name: variationName,
		});
		handleClose();
	};

	return (
		<Container>
			<button className="mt" onClick={handleOpen}>
				Adcionar opção
			</button>

			<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
				<DialogContent>
					<Title title="Adicionar variação de produto" />
					<p style={{ marginTop: "16px", marginBottom: "16px" }}>
						Você poderá gerenciar preço e estoque para esta opção de produto
						mais tarde.
					</p>

					<Formulario>
						<div className="form_group mt-3">
							<div className="form_flex">
								<div className="form_group">
									<label>Nome da variação</label>
									<input
										type="text"
										style={{ color: "#333" }}
										value={variationName}
										onChange={(e) => setVariationName(e.target.value)}
										placeholder="Nome da variação"
										className="input"
									/>
								</div>
								<div className="form_group">
									<label htmlFor="" style={{ color: "transparent" }}>
										.
									</label>
									<Button
										variant="contained"
										color="primary"
										onClick={handleSubmitVariations}
									>
										Cadastrar
									</Button>
								</div>
							</div>
						</div>
					</Formulario>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Fechar
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};
