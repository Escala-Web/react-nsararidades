import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useAdmin } from "../../../../hooks/admin/useAdmin";

export const ForgetPassword = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
 
    const { forgetPassword } = useAdmin();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggleSubmit = () => {
        forgetPassword.mutate({
            email: email
        })
        handleClose();
    }

    return (
        <>
            <button
                type="button"
                className="button no_contain"
                onClick={handleClickOpen}
            >
                Esqueci minha senha
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: "form",
                    },
                }}
            >
                <DialogTitle>Recuperação de Senha</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para recuperar sua senha, por favor, insira o e-mail associado à sua
                        conta. Enviaremos um link de recuperação para o seu e-mail.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Digite seu e-mail aqui"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="button" onClick={toggleSubmit}>Enviar email</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
