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
import { IOnboardingPhone } from "../../../../../../types/IOnboarding";
import { Formulario } from "../../../Products/create/styles";
import { usePhoneAdmin } from "../../../../../../hooks/Store/usePhoneAdmin";

const paginationModel = { page: 0, pageSize: 5 };

export const TablePhone = ({ data }: { data: IOnboardingPhone[] }) => {
	const [openEdit, setOpenEdit] = useState(false);
	const [selectedPhone, setSelectedPhone] = useState<IOnboardingPhone | null>(null);

	const [openDelete, setOpenDelete] = useState(false);
	const [phoneToDelete, setPhoneToDelete] = useState<IOnboardingPhone | null>(null);

	const { register, handleSubmit, reset } = useForm<IOnboardingPhone>();

	const { phoneUpdated, phoneDeleted } = usePhoneAdmin();

	const handleEdit = (row: IOnboardingPhone) => {
		setSelectedPhone(row);
		setOpenEdit(true);
	};

	const handleCloseEdit = () => {
		setOpenEdit(false);
		setSelectedPhone(null);
	};

	useEffect(() => {
		if (selectedPhone) {
			reset(selectedPhone);
		}
	}, [selectedPhone, reset]);

	const onSubmit = (formData: IOnboardingPhone) => {
		phoneUpdated.mutate({
			data: {
				is_show: formData.is_show,
				is_default: formData.is_default,
				number: formData.number,
				type: formData.type,
			},
			id: formData.id
		});
		setOpenEdit(false);
	};

	const handleDelete = (row: IOnboardingPhone) => {
		setPhoneToDelete(row);
		setOpenDelete(true);
	};

	const confirmDelete = () => {

		phoneDeleted.mutate(phoneToDelete?.id)
		setOpenDelete(false);
		setPhoneToDelete(null);
	};

	const columns = [
		{ field: "id_phone", headerName: "#ID", width: 150 },
		{ field: "number", headerName: "Numero", width: 250 },
		{ field: "type", headerName: "Tipo", width: 250 },
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
						variant="contained"
						color="error"
						size="small"
						onClick={() => handleDelete(params.row)}
					>
						Delete
					</Button>
				</Stack>
			),
		},
	];

	const rows = data?.map((phone: IOnboardingPhone) => ({
		id: phone?.id_phone_store,
		id_phone: phone?.id_phone,
		number: phone?.number,
		type: phone?.type,
		is_show: phone?.is_show,
		is_default: phone?.is_default,
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
				<DialogTitle sx={{ width: '550px' }}>Editar Telefone</DialogTitle>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 1 }}>
						<Formulario>
							<div className="form_block">
								<label>Telefone</label>
								<input type="text" {...register("number")} />
							</div>
							<div className="form_block mt">
								<label>Tipo</label>
								<input type="text" {...register("type")} />
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
						<Button variant="contained" type="submit">Salvar</Button>
					</DialogActions>
				</form>
			</Dialog>

			{/* Modal de confirmação de exclusão */}
			<Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
				<DialogTitle>Confirmar Exclusão</DialogTitle>
				<DialogContent>
					Você realmente deseja excluir o telefone{" "}
					<strong>{phoneToDelete?.number}</strong>?
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
