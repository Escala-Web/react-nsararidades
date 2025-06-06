import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";


export const paymentCreateApi = async (id: number) => {

    try {
        const { data: payment } = await api.get(`/payments/pay/${id}`, { requiresAuth: true } as CustomAxiosRequestConfig);
        return payment;
        
    } catch (error) {
        console.log(error)
    }
    
} 

export const paymentsFaturesGraphApi = async () => {
    const { data: payment } = await api.get(`/payments/report`, { requiresAuth: true } as CustomAxiosRequestConfig);
        return payment;
}