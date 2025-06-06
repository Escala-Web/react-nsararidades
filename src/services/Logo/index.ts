import { api } from "../../lib"
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig"
import { ICreateLogo } from "../../types/ILogo";

export const createLogoApi = async (data: ICreateLogo) => {    
    const { data: logo } = await api.post('/store-media', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return logo;
};

export const findAllApi = async () => {
    const { data } = await api.get('/store');
    return data;
}