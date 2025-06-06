import { useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Typography
} from "@mui/material";
import { Container } from "./styles";

export const Frete = () => {
    const [frete, setFrete] = useState<string>("");
    const [isFrete, setIsFrete] = useState<boolean>(false);

    const handleOpen = () => {
        setIsFrete(true);
    };

    const handleClose = () => {
        setIsFrete(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrete(event.target.value);
    };

    return (
        <>
            <Container>
                <div className="frete_container" onClick={handleOpen} style={{ cursor: "pointer" }}>
                    <span className="icon">
                        <FaTruckFast />
                    </span>
                    <p>Informe seu CEP</p>
                </div>
            </Container>

            <Dialog open={isFrete} onClose={handleClose}>
                <DialogTitle>Consultar frete e prazo de entrega</DialogTitle>
                <Typography sx={{ padding: '0 1.6rem' }}>O valor e o prazo de entrega podem variar de acordo <br /> com a sua localização.</Typography>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="CEP"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={frete}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={() => {
                        // Aqui você pode adicionar a lógica para calcular o frete
                        handleClose();
                    }}>Calcular</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
