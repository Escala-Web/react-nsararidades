import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orderCreateApi, orderGraphsApi, orderStatusGetByIdApi, orderStatusUpdateApi } from "../../services/orders";
import { toast } from "react-toastify";
import { adminMessage401, message403 } from "../../config/messages";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { IOrderGraphAll, IOrderStatus } from "../../types/IOrder";

interface IResponse {
	message: string;
	success: boolean;
	id_order: string;
}
export const useOrders = () => {

    const { setLogin } = useContext(AuthContext);
	const clientQuery = useQueryClient();

	const createOrder = useMutation({
		mutationFn: orderCreateApi,
		onSuccess: (data: IResponse) => {
			toast.success(data.message);
			clientQuery.invalidateQueries(["order"]);
		},
		onError: (error: any) => {

			console.log(error)

			if (error.status === 401) {
				toast.error(adminMessage401.message);
				setLogin(null);
			}
			if (error.status === 403) {
				toast.error(message403.message);
				setLogin(null);
			}
		},
	});

	const orderStatusAtt = useMutation({
		mutationFn: ({ id, data }: { id: number | string; data: IOrderStatus }) => orderStatusUpdateApi(id, data),
		onSuccess: (data: IResponse) => {
			toast.success(data.message);
			clientQuery.invalidateQueries(["order"]);
		},
		onError: (error) => {
			console.log(error)
		}
	})

	const orderGraphs = useQuery<IOrderGraphAll>({
		queryKey: ["order"],
		queryFn: orderGraphsApi,
	});

	return { orderStatusAtt,  createOrder, orderGraphs}

};

export const useOrderStatusGetById = (id: number | string) =>
	useQuery({
		queryKey: ["order", id],
		queryFn: () => orderStatusGetByIdApi(id),
		enabled: !!id,
	});
