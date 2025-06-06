import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categoryCreateApi, categoryFindAllApi } from "../../services/category";
import { toast } from "react-toastify";
import { adminMessage401, message403 } from "../../config/messages";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

interface ICategoryResponse {
	success: boolean;
	message: string;
}
export const useCategory = () => {
	const { setLogin } = useContext(AuthContext);

	const clientQuery = useQueryClient();

	const createCategory = useMutation({
		mutationFn: categoryCreateApi,
		onSuccess: (data: ICategoryResponse) => {
			toast.success(data.message);
			clientQuery.invalidateQueries(["category"]);
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

	const findCategory = useQuery({
		queryFn: categoryFindAllApi,
		queryKey: ["category"],
	});

	return { createCategory, findCategory };
};
