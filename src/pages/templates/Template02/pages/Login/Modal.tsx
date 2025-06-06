import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { useUser } from "../../../../../hooks/users/useUser";

export const ModalEmail = () => {
	const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState<string>("");

    const { forgetPasswordLogin } = useUser();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    const handleForgetPassword = () => {
        forgetPasswordLogin.mutate({
            login: email
        })
        handleClose()
    }

	return (
		<>
			<div className="reset_password" onClick={handleClickOpen}>
				<p>
					Esqueceu sua senha?{" "}
					<span>Clique aqui para recuperar</span>
				</p>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
			>
				<DialogTitle>Recuperar senha</DialogTitle>
				<DialogContent>
					<DialogContentText>
                    Digite o e-mail cadastrado para enviarmos um link de recuperação.
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						id="name"
						name="email"
						label="E-mail"
						type="email"
						fullWidth
						variant="standard"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Fechar</Button>
					<Button onClick={handleForgetPassword} type="button">Enviar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
