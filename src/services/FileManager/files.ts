import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IFilesCreate } from "../../types/IFiles";

export const createFilesApi = async (data: FormData) => {

    const { data: files } = await api.post('/media/upload-file', data, {requiresAuth: true} as CustomAxiosRequestConfig);
    return files;

}