import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { Formulario } from "../../../Products/create/styles";
import { arrayOfOrders } from "../../../../../../utils/formatPortugues";
import { useForm } from "react-hook-form";
import { useOrders } from "../../../../../../hooks/Orders/useOrder";

interface AttOrderProps {
	open: boolean;
	order: any;
	onClose: () => void;
}

export const AttOrder = ({ open, order, onClose }: AttOrderProps) => {
	const { register, handleSubmit } = useForm<{
		order: string;
		anexo: FileList;
	}>();

	const { orderStatusAtt } = useOrders();

	const handleSubmitOrderStatusAtt = ({ order: status, anexo }) => {
		const formData = new FormData();
		formData.append("status", status);
		if (anexo && anexo.length > 0) {
			formData.append("attachment", anexo[0]);
		}

		orderStatusAtt.mutate({
			id: order?.id_order,
			data: formData,
		});
	};

	return (
		<Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle>Atualizar Pedido #{order?.id_order}</DialogTitle>
			<DialogContent dividers>
				<Formulario
					onSubmit={handleSubmit(handleSubmitOrderStatusAtt)}
					encType="multipart/form-data"
				>
					<div className="form_block">
						<label>Status do pedido</label>
						<select {...register("order")}>
							{arrayOfOrders?.map((item) => (
								<option key={item.index} value={item.index}>
									{item.value}
								</option>
							))}
						</select>
					</div>
					<div className="form_block mt">
						<label>Anexo</label>
						<input type="file" {...register("anexo")} />
					</div>
					<div className="form_block mt">
						<button className="contain">Atualizar Pedido</button>
					</div>
				</Formulario>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Fechar</Button>
			</DialogActions>
		</Dialog>
	);
};
