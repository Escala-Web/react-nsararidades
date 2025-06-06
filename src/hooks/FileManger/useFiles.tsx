import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFilesApi } from "../../services/FileManager/files";
import { toast } from "react-toastify";
import { adminMessage401, message403 } from "../../config/messages";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

interface IFilesResponse {
	success: boolean;
	message: string;
}
export const useFiles = () => {

    const { setLogin } = useContext(AuthContext);
	const clientQuery = useQueryClient();

	const createFile = useMutation({
		mutationFn: createFilesApi,
		onSuccess: (data: IFilesResponse) => {
			toast.success(data.message);
			clientQuery.invalidateQueries(["folders"]);
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

			console.log(error)
		},
	});

	return { createFile };
};
