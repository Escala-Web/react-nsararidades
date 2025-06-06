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
import { Formulario } from "../../../Products/create/styles";
import { useStore } from "../../../../../../hooks/Store/useStore";
import { useAddressAdmin } from "../../../../../../hooks/Store/useAddressAdmin";

// Tipo ajustado
interface IOnboardingAddress {
	id_address_store: number;
	public_area: string;
	number: string;
	district: string;
	city: string;
	state: string;
	zip_code: string;
	is_show: boolean;
	is_default: boolean;
}

const paginationModel = { page: 0, pageSize: 5 };

export const TableAddress = ({ data }: { data: IOnboardingAddress[] }) => {
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [address, setAddress] = useState<IOnboardingAddress | null>(null);
	const [addressToDelete, setAddressToDelete] = useState<IOnboardingAddress | null>(null);

	const { register, handleSubmit, reset } = useForm<IOnboardingAddress>();

	const { addressUpdate } = useStore();
	const { deletedAddress } = useAddressAdmin()

	// Editar
	const handleEdit = (row: IOnboardingAddress) => {
		setAddress(row);
		setOpenEdit(true);
	};

	const handleCloseEdit = () => {
		setOpenEdit(false);
		setAddress(null);
	};

	// Deletar
	const handleOpenDelete = (row: IOnboardingAddress) => {
		setAddressToDelete(row);
		setOpenDelete(true);
	};

	const handleCloseDelete = () => {
		setOpenDelete(false);
		setAddressToDelete(null);
	};

	const confirmDelete = () => {

		if (addressToDelete) {
			deletedAddress.mutate(addressToDelete.id_address_store);
			handleCloseDelete();
		}
	};

	useEffect(() => {
		if (address) {
			reset(address);
		}
	}, [address, reset]);

	const onSubmit = (formData: IOnboardingAddress) => {
		addressUpdate.mutate({
			data: {
				public_area: formData.public_area,
				number: formData.number,
				district: formData.district,
				city: formData.city,
				state: formData.state,
				zip_code: formData.zip_code,
				is_show: formData.is_show,
				is_default: formData.is_default,
			},
			id: formData.id_address_store,
		});
		setOpenEdit(false);
	};

	const columns = [
		{ field: "public_area", headerName: "Endereço", width: 200 },
		{ field: "number", headerName: "Número", width: 100 },
		{ field: "district", headerName: "Bairro", width: 150 },
		{ field: "city", headerName: "Cidade", width: 150 },
		{ field: "state", headerName: "Estado", width: 100 },
		{ field: "zip_code", headerName: "CEP", width: 120 },
		{
			field: "is_show",
			headerName: "Mostrar?",
			width: 120,
		},
		{
			field: "is_default",
			headerName: "Padrão?",
			width: 120,
		},
		{
			field: "action",
			headerName: "Ação",
			width: 200,
			renderCell: (params: any) => (
				<Stack direction="row" spacing={1}>
					<Button variant="contained" size="small" onClick={() => handleEdit(params.row)}>
						Editar
					</Button>
					<Button
						variant="contained"
						size="small"
						color="error"
						onClick={() => handleOpenDelete(params.row)}
					>
						Delete
					</Button>
				</Stack>
			),
		},
	];

	return (
		<Box sx={{ padding: 2, background: "#fff", borderRadius: "8px" }}>
			<Paper sx={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={data}
					columns={columns}
					getRowId={(row) => row.id_address_store}
					initialState={{ pagination: { paginationModel } }}
					sx={{ border: 0 }}
				/>
			</Paper>

			{/* Modal de Edição */}
			<Dialog open={openEdit} onClose={handleCloseEdit}>
				<DialogTitle sx={{ width: "550px" }}>Editar Endereço</DialogTitle>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
						<Formulario>
							<div className="form_block"><label>Endereço</label><input {...register("public_area")} /></div>
							<div className="form_block mt"><label>Número</label><input {...register("number")} /></div>
							<div className="form_block mt"><label>Bairro</label><input {...register("district")} /></div>
							<div className="form_block mt"><label>Cidade</label><input {...register("city")} /></div>
							<div className="form_block mt"><label>Estado</label><input {...register("state")} /></div>
							<div className="form_block mt"><label>CEP</label><input {...register("zip_code")} /></div>
							<div className="form_flex mt"><label>Mostrar</label><input type="checkbox" {...register("is_show")} /></div>
							<div className="form_flex mt"><label>Padrão</label><input type="checkbox" {...register("is_default")} /></div>
						</Formulario>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseEdit}>Cancelar</Button>
						<Button variant="contained" type="submit">Salvar</Button>
					</DialogActions>
				</form>
			</Dialog>

			{/* Modal de Confirmação de Exclusão */}
			<Dialog open={openDelete} onClose={handleCloseDelete}>
				<DialogTitle>Confirmar Exclusão</DialogTitle>
				<DialogContent>
					Tem certeza que deseja excluir este endereço?
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDelete}>Cancelar</Button>
					<Button variant="contained" color="error" onClick={confirmDelete}>
						Excluir
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};
