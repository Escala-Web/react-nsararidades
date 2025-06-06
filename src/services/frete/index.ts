import { api } from "../../lib"
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IFrete } from "../../types/IFrete";

export const calcularFreteApi = async (data: IFrete) => {

    const { data: frete } = await api.post('/shipping', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return frete;

}