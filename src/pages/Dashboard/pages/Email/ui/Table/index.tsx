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
import {
	IOnboardingEmail,
	IOnboardingPhone,
} from "../../../../../../types/IOnboarding";
import { Formulario } from "../../../Products/create/styles";
import { useStore } from "../../../../../../hooks/Store/useStore";
import { useEmailAdmin } from "../../../../../../hooks/Store/useEmailAdmin";

const paginationModel = { page: 0, pageSize: 5 };

export const TablePhone = ({ data }: { data: IOnboardingEmail[] }) => {
	const [openEdit, setOpenEdit] = useState(false);
	const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

	const [selectedEmail, setSelectedEmail] = useState<IOnboardingEmail | null>(null);

	const { register, handleSubmit, reset } = useForm<IOnboardingEmail>();

	const { emailUpdate } = useStore(); // <- Mutation de update (mantenha)
	// const { emailDelete } = useStore(); <- (adicione para usar no futuro)
	const { deletedEmail } = useEmailAdmin();

	const handleEdit = (row: IOnboardingEmail) => {
		setSelectedEmail(row);
		setOpenEdit(true);
	};

	const handleCloseEdit = () => {
		setOpenEdit(false);
		setSelectedEmail(null);
	};

	useEffect(() => {
		if (selectedEmail) {
			reset(selectedEmail);
		}
	}, [selectedEmail, reset]);

	const onSubmit = (formData: IOnboardingEmail) => {
		emailUpdate.mutate({
			data: {
				email: formData.email,
				is_show: formData.is_show,
				is_default: formData.is_default,
			},
			id: formData.id,
		});
		setOpenEdit(false);
	};

	const handleDelete = (row: IOnboardingEmail) => {
		setSelectedEmail(row);
		setOpenDeleteConfirm(true);
	};

	const confirmDelete = () => {
		if (selectedEmail) {
			deletedEmail.mutate(selectedEmail.id)
		}
		setOpenDeleteConfirm(false);
		setSelectedEmail(null);
	};

	const cancelDelete = () => {
		setOpenDeleteConfirm(false);
		setSelectedEmail(null);
	};

	const columns = [
		{ field: "id", headerName: "#ID", width: 150 },
		{ field: "email", headerName: "Email", width: 250 },
		{ field: "is_show", headerName: "Aparece no site?", width: 250 },
		{ field: "is_default", headerName: "É padrão?", width: 200 },
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
						onClick={() => handleEdit(params.row)}
					>
						Editar
					</Button>
					<Button
						variant="outlined"
						color="error"
						size="small"
						onClick={() => handleDelete(params.row)}
					>
						Excluir
					</Button>
				</Stack>
			),
		},
	];

	const rows = data?.map((email: IOnboardingEmail) => ({
		id: email.id_email_store,
		email: email.email,
		is_show: email.is_show ? "Sim" : "Não",
		is_default: email.is_default ? "Sim" : "Não",
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
					getRowId={(row) => row.id}
					initialState={{ pagination: { paginationModel } }}
					checkboxSelection
					sx={{ border: 0 }}
				/>
			</Paper>

			{/* Modal de Edição */}
			<Dialog open={openEdit} onClose={handleCloseEdit}>
				<DialogTitle sx={{ width: "550px" }}>Editar Email</DialogTitle>
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
								<label>Email</label>
								<input type="email" {...register("email")} />
							</div>
							<div className="form_flex mt">
								<label>Mostrar na loja</label>
								<input type="checkbox" {...register("is_show")} />
							</div>
							<div className="form_flex mt">
								<label>Padrão</label>
								<input type="checkbox" {...register("is_default")} />
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

			{/* Modal de Confirmação de Exclusão */}
			<Dialog open={openDeleteConfirm} onClose={cancelDelete}>
				<DialogTitle>Confirmar Exclusão</DialogTitle>
				<DialogContent>
					Você tem certeza que deseja excluir este email?
				</DialogContent>
				<DialogActions>
					<Button onClick={cancelDelete}>Cancelar</Button>
					<Button onClick={confirmDelete} variant="contained" color="error">
						Excluir
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};
