
import React, { useState } from "react";
import { FaFolderPlus } from "react-icons/fa"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { useFolder } from "../../../../../../hooks/FileManger/useFolder";

interface FolderAddProps {
    idFolder: number;
  }

export const FolderAdd: React.FC<FolderAddProps> = ({ idFolder }) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { createFolder } = useFolder();


    return (

        <>
            <span onClick={handleClickOpen}>
                <FaFolderPlus />
            </span>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: (event:  React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(formData.entries());
                            const email = formJson.email;
                            createFolder.mutate({
                                parent_id: idFolder,
                                folder_name: String(email)
                            })
                            handleClose();
                        },
                    },
                }}
            >
                <DialogTitle>Nova Pasta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Organize seus arquivos de forma eficiente criando uma nova pasta.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Nova pasta"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="submit">Criar</Button>
                </DialogActions>
            </Dialog>

        </>

    )
}