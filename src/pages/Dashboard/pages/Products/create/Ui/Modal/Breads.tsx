import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useBread } from "../../../../../../../hooks/Bread/useBread";

export const ModalBreads = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const [bread, setBread] = React.useState<string>("");

	const { create } = useBread();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function handleCreateBread() {
		create.mutate({
			name: bread,
		});

		handleClose();
		setBread("");
	}

	return (
		<>
			<Button className="mt" variant="outlined" onClick={handleClickOpen}>
				Adicionar nova marca
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Adicionar nova marca</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Insira abaixo o nome da marca que você deseja adicionar. Pode ser
						qualquer marca para o seu produtos.
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						id="text"
						name="bread"
						label="Digite a marca"
						type="text"
						fullWidth
						variant="standard"
						value={bread}
						onChange={(event) => setBread(event.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleCreateBread} type="button">
						Confirmar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
