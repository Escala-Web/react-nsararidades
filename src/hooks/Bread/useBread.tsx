import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	breadCreateApi,
	breadDeleteApi,
	breadFindAllApi
} from "../../services/bread";
import { toast } from "react-toastify";
import { IBread } from "../../types/IBread";
import { adminMessage401, message403 } from "../../config/messages";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

interface IBreandResponse {
	success: boolean;
	message: string;
}

export const useBread = () => {

    const { setLogin } = useContext(AuthContext);
	const queryClient = useQueryClient();

	const findAll = useQuery<IBread>({
		queryFn: breadFindAllApi,
		queryKey: ["breads"],
	});

	const create = useMutation({
		mutationFn: breadCreateApi,
		onSuccess: (data: IBreandResponse) => {
			toast.success(data.message);
			queryClient.invalidateQueries(["breads"]);
		},
		onError: (error: any) => {
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

	const deleteBrands = useMutation({
		mutationFn: breadDeleteApi,
		onSuccess: (data: IBreandResponse) => {
			toast.success(data.message);
			queryClient.invalidateQueries(["breads"]);
		},
		onError: (error: any) => {
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

	const findAllAuth = useQuery<IBread>({
		queryFn: breadFindAllApi,
		queryKey: ["breads"],
	});



	return { create, findAll, deleteBrands, findAllAuth };
};
