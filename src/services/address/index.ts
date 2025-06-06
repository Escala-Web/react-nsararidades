import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IAddressContent, IAddressCreate } from "../../types/IAddress";

export const addressCreateApi = async (data: IAddressCreate) => {

    const { data: address } = await api.post('/address/create', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return address;

}

export const addressFindAllApi = async () => {

    const { data: address } = await api.get('/address', { requiresAuth: true } as CustomAxiosRequestConfig);
    return address;

}

export const addressUpdateApi = async (data: IAddressContent) => {
    const { data: address } = await api.put('/address', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return address;
}