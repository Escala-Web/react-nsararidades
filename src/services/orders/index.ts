import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IOrderCreate, IOrderStatus } from "../../types/IOrder";

export const orderCreateApi = async (data: IOrderCreate) => {

    const { data: order } = await api.post('/order', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return order;
    
} 

export const orderStatusGetApi = async (status: string, page: string) => {

    const { data } = await api.get(`/order/${status}/${page}`, { requiresAuth: true } as CustomAxiosRequestConfig);
    return data;

}

export const orderStatusGetByIdApi = async (id: string) => {

    const { data } = await api.get(`/order/${id}/`, { requiresAuth: true } as CustomAxiosRequestConfig);
    return data;

}

export const orderStatusUpdateApi = async (id: string | number, data: IOrderStatus) => {
    const { data: order } = await api.post(`/order/change-status/${id}`, data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return order;
}


export const orderGraphsApi = async () => {

    const { data } = await api.get(`/order/get-quantity-status/`, { requiresAuth: true } as CustomAxiosRequestConfig);
    return data;

}