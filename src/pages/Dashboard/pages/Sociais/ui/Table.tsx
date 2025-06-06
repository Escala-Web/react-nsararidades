import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {
	Box,
	Button,
	Stack,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IOnboardingSocial } from "../../../../../types/IOnboarding";
import { useSocialAdmin } from "../../../../../hooks/Store/useSocialAdmin";
import { Formulario } from "../../Products/create/styles";

const paginationModel = { page: 0, pageSize: 5 };

export const TableSociais = ({ data }: { data: IOnboardingSocial[] }) => {
	const [openEdit, setOpenEdit] = useState(false);
	const [selectedType, setSelectedType] = useState<
		IOnboardingSocial["type"] | null
	>(null);

	const [openDelete, setOpenDelete] = useState(false);
	const [typeToDelete, setTypeToDelete] = useState<
		IOnboardingSocial["type"] | null
	>(null);

	const { register, handleSubmit, reset } = useForm<IOnboardingSocial>();

	const { storeSociaisUpdate, storeSociaisDeleted } = useSocialAdmin();

	const selectedSocial =
		data.find((item) => item.type === selectedType) || null;

	const handleEdit = (type: IOnboardingSocial["type"]) => {
		setSelectedType(type);
		setOpenEdit(true);
	};

	const handleCloseEdit = () => {
		setOpenEdit(false);
		setSelectedType(null);
	};

	useEffect(() => {
		if (selectedSocial) {
			reset(selectedSocial);
		}
	}, [selectedSocial, reset]);

	const onSubmit = (formData: IOnboardingSocial) => {
	storeSociaisUpdate.mutate({
		type: formData.type,
		data: {
			type: formData.type,
			link: formData.link,
		},
	});
	setOpenEdit(false);
	setSelectedType(null);
};


	const handleDelete = (type: IOnboardingSocial["type"]) => {
		setTypeToDelete(type);
		setOpenDelete(true);
	};

	const confirmDelete = () => {
		if (typeToDelete) {
			storeSociaisDeleted.mutate(typeToDelete);
		}
		setOpenDelete(false);
		setTypeToDelete(null);
	};

	const columns = [
		{ field: "type", headerName: "Tipo", width: 250 },
		{ field: "link", headerName: "Link", width: 400 },
		{
			field: "action",
			headerName: "Ação",
			width: 200,
			sortable: false,
			filterable: false,
			renderCell: (params: any) => (
				<Stack direction="row" spacing={1}>
					<Button
						variant="contained"
						color="primary"
						size="small"
						onClick={() => handleEdit(params.row.type)}
					>
						Editar
					</Button>
					<Button
						variant="contained"
						color="error"
						size="small"
						onClick={() => handleDelete(params.row.type)}
					>
						Excluir
					</Button>
				</Stack>
			),
		},
	];

	const rows = data.map((social) => ({
		...social,
		id: social.type, // necessário para o DataGrid
	}));

	return (
		<Box
			sx={{
				padding: "1rem 1rem 2rem",
				background: "#fff",
				gap: "1rem",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				borderRadius: "8px",
			}}
		>
			<Paper sx={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{ pagination: { paginationModel } }}
					checkboxSelection
					sx={{ border: 0 }}
				/>
			</Paper>

			{/* Modal de edição */}
			<Dialog open={openEdit} onClose={handleCloseEdit}>
				<DialogTitle sx={{ width: "550px" }}>Editar Rede Social</DialogTitle>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogContent
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							marginTop: 1,
						}}
					>
						<Formulario>
							<div className="form_block">
								<label>Tipo</label>
								<select value={selectedSocial?.type || ""} disabled>
									<option value="INSTAGRAN">Instagram</option>
									<option value="FACEBOOK">Facebook</option>
									<option value="WHATSAPP">WhatsApp</option>
									<option value="LINKEDIN">LinkedIn</option>
								</select>
							</div>

							<div className="form_block mt">
								<label>Link</label>
								<input type="text" {...register("link")} />
							</div>
						</Formulario>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseEdit}>Cancelar</Button>
						<Button variant="contained" type="submit">
							Salvar
						</Button>
					</DialogActions>
				</form>
			</Dialog>

			{/* Modal de confirmação de exclusão */}
			<Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
				<DialogTitle>Confirmar Exclusão</DialogTitle>
				<DialogContent>
					Você realmente deseja excluir o link de{" "}
					<strong>{typeToDelete}</strong>?
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenDelete(false)}>Cancelar</Button>
					<Button variant="contained" color="error" onClick={confirmDelete}>
						Excluir
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};
