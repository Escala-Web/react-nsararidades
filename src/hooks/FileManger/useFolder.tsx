import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
	createFoldersApi,
	deleteFolderApi,
	findAllFoldersApi,
	moveTrashFolderApi,
	restoreFolderApi,
	updateFolderApi,
} from "../../services/FileManager/folders";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { adminMessage401, message403 } from "../../config/messages";
import { AuthContext } from "../../context/Auth";

interface IFolderResponse {
	success: boolean;
	message: string;
}
type FoldersQueryData = {
	success: boolean;
	message: string;
	content: IFolderResponse[];
};
export const useFolder = () => {
	const { setLogin } = useContext(AuthContext);
	const queryClient = useQueryClient();

	const findAllFolders = useMutation({
		mutationFn: findAllFoldersApi,
		onSuccess: (data: IFolderResponse) => {
			queryClient.invalidateQueries(["folders"]);
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

	const createFolder = useMutation({
		mutationFn: createFoldersApi,
		onSuccess: (data: IFolderResponse) => {
			queryClient.invalidateQueries(["folders"]);
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

	const renameFolder = useMutation({
		mutationFn: updateFolderApi,
		onSuccess: (data: IFolderResponse) => {
			toast.success(data.message);
			queryClient.invalidateQueries<FoldersQueryData>(["folders"]);
		},
		onError: (error) => {
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

	const moveTrashFolder = useMutation({
		mutationFn: moveTrashFolderApi,
		onSuccess: (data: IFolderResponse) => {
			toast.success(data.message);
			queryClient.invalidateQueries(["folders"]);
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

	const restoreFolder = useMutation({
		mutationFn: restoreFolderApi,
		onSuccess: (data: IFolderResponse) => {
			toast.success(data.message);
			queryClient.invalidateQueries(["folders"]);
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

	const deleteFolder = useMutation({
		mutationFn: deleteFolderApi,
		onSuccess: (data: IFolderResponse) => {
			toast.success(data.message);
			queryClient.invalidateQueries(["folders"]);
		},
		onError: (error: any) => {
			const status = error?.response?.status;

			console.log(status)

			if (status === 401) {
				toast.error(adminMessage401.message);
			} else if (status === 403) {
				toast.error(message403.message);
			} else {
				toast.error("Erro ao deletar pasta. Tente novamente.");
				console.error(error);
			}
		},
	});

	return {
		findAllFolders,
		createFolder,
		renameFolder,
		moveTrashFolder,
		restoreFolder,
		deleteFolder,
	};
};
