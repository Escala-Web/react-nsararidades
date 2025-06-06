import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	variationCreateApi,
	variationFindAllApi,
	variationValueCreateApi,
} from "../../services/variation";
import { toast } from "react-toastify";
import { IVariation } from "../../types/IVariations";
import { adminMessage401, message403 } from "../../config/messages";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

interface variationResponse {
	success: boolean;
	message: string;
}
export const useVariation = () => {

    const { setLogin } = useContext(AuthContext);

	const clientQuery = useQueryClient();

	const findAllVariation = useQuery<IVariation>({
		queryFn: variationFindAllApi,
		queryKey: ["variation"],
	});

	const createVariation = useMutation({
		mutationFn: variationCreateApi,
		onSuccess: (data: variationResponse) => {
			toast.success(data.message);
			clientQuery.invalidateQueries(["variation"]);
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

	const createValueVariation = useMutation({
		mutationFn: variationValueCreateApi,
		onSuccess: (data: variationResponse) => {
			toast.success(data.message);
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

	return { createVariation, findAllVariation, createValueVariation };
};
