import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	productCreateApi,
	productDeleteApi,
	productFindAllApi,
	productUpdateApi,
} from "../../services/products";
import { toast } from "react-toastify";
import { IProductsResponse } from "../../types/IProducts";
import { adminMessage401, message403 } from "../../config/messages";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

interface IProductResponse {
	message: string;
	status: boolean;
}
export const useProduct = (page: number = null) => {
	const { setLogin } = useContext(AuthContext);

	const clientQuery = useQueryClient();

	const findAllProduct = useQuery<IProductsResponse>({
		queryKey: ["product", page],
		queryFn: () => productFindAllApi(page),
	});

	const createProduct = useMutation({
		mutationFn: productCreateApi,
		onSuccess: (data: IProductResponse) => {
			toast.success(data.message);
			clientQuery.invalidateQueries(["product"]);
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

	const updateProduct = useMutation({
		mutationFn: ({ data, id }: { data: any; id: number | string }) =>
			productUpdateApi(data, id),

		onSuccess: (data: IProductResponse) => {
			toast.success('Produto atualizado com sucesso!');
			clientQuery.invalidateQueries(["product"]);
		},

		onError: (error: any) => {

			if (error.status === 401) {
				toast.error(adminMessage401.message);
				setLogin(null);
			} else if (error.status === 403) {
				toast.error(message403.message);
				setLogin(null);
			} else {
				toast.error("Erro ao atualizar produto");
			}
		},
	});

	const deleteProduct = useMutation({
		mutationFn: productDeleteApi,

		onSuccess: (data: IProductResponse) => {
			toast.success('Produto deletado com sucesso!');
			clientQuery.invalidateQueries(["product"]);
		},

		onError: (error: any) => {

			console.log(error)

			if (error.status === 401) {
				toast.error(adminMessage401.message);
				setLogin(null);
			} else if (error.status === 403) {
				toast.error(message403.message);
				setLogin(null);
			} else {
				toast.error("Erro ao deletar produto");
			}
		},
	});



	return { createProduct, findAllProduct, updateProduct, deleteProduct };
};
