
import React, { useState } from "react";
import { FaFolderPlus } from "react-icons/fa"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useFolder } from "../../../../../../hooks/FileManger/useFolder";

interface RenameProps {
    idFolder: number;
  }

export const Rename: React.FC<RenameProps> = ({ idFolder }) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const { renameFolder } = useFolder();


    return (

        <>
            <span onClick={handleClickOpen}>
                <EditIcon />
                Edit
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
                            const name = formJson.email;
                            renameFolder.mutate({
                                folder_name: String(name),
                                id_folder: idFolder
                            })
                            handleClose();
                        },
                    },
                }}
            >
                <DialogTitle>Renomear Pasta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Renomei suas pastas de forma eficiente.
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