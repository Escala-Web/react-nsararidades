import { api } from "../../lib"
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig"
import { IBanner, IBannerCreate } from "../../types/IBanner";

export const createBannerApi = async (data: IBannerCreate) => {
    const { data: banner } = await api.post('/banner', data, {requiresAuth: true} as CustomAxiosRequestConfig);
    return banner;
}

export const findAllBannersApi = async () => {
    const { data } = await api.get('/banner');
    return data;
}

export const deleteBannerApi = async (id: number) => {
    const { data: banner } = await api.delete(`/banner/${id}`, { requiresAuth: true } as CustomAxiosRequestConfig);
    return banner;
}

export const updateBannerApi = async (id: number, data: IBanner) => {
    const { data: banner } = await api.put(`/banner/${id}`, data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return banner;
}