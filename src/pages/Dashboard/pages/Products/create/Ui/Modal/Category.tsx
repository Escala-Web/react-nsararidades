import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useCategory } from "../../../../../../../hooks/Category/useCategory";

export const ModalCategory = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const [category, setCategory] = React.useState<string>("");
    const [idParentCategory, setIdCategory] = React.useState(null);

	const { createCategory, findCategory } = useCategory();



	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function handleCreateCategory() {
		createCategory.mutate({
			name: category,
			parent_category: idParentCategory,
			description: "",
		});
		handleClose();
		setCategory("");
        setIdCategory(null);
	}

	return (
		<>
			<Button className="mt" variant="outlined" onClick={handleClickOpen}>
				Criar Nova Categoria
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Adicionar nova categoria</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Digite abaixo o nome da nova categoria que você deseja adicionar.
						Use este campo para organizar melhor seus produtos.
					</DialogContentText>

					<InputLabel id="demo-simple-select-standard-label" sx={{ mt: '20px' }}>
						Adicionar em categoria já existente?
					</InputLabel>
					<Select
                    variant="standard"
                        sx={{ width: '100%' }}
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						value={idParentCategory}
						onChange={(event) => setIdCategory(event.target.value)}
						label="Age"
					>
						<MenuItem value={null}>
							Não
						</MenuItem>
                        {findCategory?.data?.content?.map((item) => (
                            <MenuItem value={item?.id_category}>{item?.name}</MenuItem>
                        ))}
					</Select>

					<TextField
						autoFocus
						required
						margin="dense"
						id="text"
						name="category"
						label="Digite a categoria"
						type="text"
						fullWidth
						variant="standard"
						value={category}
						onChange={(event) => setCategory(event.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleCreateCategory} type="button">
						Confirmar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
