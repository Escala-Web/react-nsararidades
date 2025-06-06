import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFolder } from '../../../../../../hooks/FileManger/useFolder';

interface TrashProps {
    idFolder: number
}
export const Trash: React.FC<TrashProps> = ({ idFolder }) => {
    const [open, setOpen] = React.useState(false);
    const { moveTrashFolder } = useFolder();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMoveTrash = () => {
        moveTrashFolder.mutate({
            id_folder: idFolder
        });
        handleClose()
    }

  return (
    <React.Fragment>

      <p onClick={handleClickOpen}>Mover para lixeira</p>
      <Dialog   
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que deseja excluir esta pasta?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao mover a pasta para lixeira, todos os arquivos nela serão removidos tambem.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleMoveTrash} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
