import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createLogoApi, findAllApi } from "../../services/Logo";
import { adminMessage401, message403 } from "../../config/messages";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { ILogoResponse } from "../../types/ILogo";

export const useLogo = () => {
	const clientQuery = useQueryClient();

    const { setLogin } = useContext(AuthContext);

	const createLogo = useMutation({
		mutationFn: createLogoApi,
		onSuccess: (data) => {
			clientQuery.invalidateQueries("logo");
			console.log(data);
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

	const findAllLogo = useQuery<ILogoResponse>({
		queryKey: ['logo'],
		queryFn: findAllApi
	})

	return { createLogo, findAllLogo };
};
