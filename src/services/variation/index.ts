import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IVariationCreate, IVariationValue } from "../../types/IVariations";

export const variationCreateApi = async (data: IVariationCreate) => {

    const { data: variation } = await api.post('/variations/create-variation', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return variation;

};

export const variationValueCreateApi = async (data: IVariationValue) => {

    const { data: variation } = await api.post('/variations/create-value', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return variation;

}

export const variationFindAllApi = async () => {

    const { data: variation } = await api.get('/variations/get-variations', { requiresAuth: true } as CustomAxiosRequestConfig)
    return variation;

}

