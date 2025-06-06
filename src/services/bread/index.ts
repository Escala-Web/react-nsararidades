
import { api } from "../../lib"
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IBreadCreate, IBreadParams } from "../../types/IBread"

export const breadCreateApi = async (data: IBreadCreate) => {

    const { data: bread } = await api.post('/brands/create', data, {requiresAuth: true} as CustomAxiosRequestConfig);
    return bread;

}

export const breadFindAllApi = async () => {


    const { data: bread } = await api.get('/brands', {requiresAuth: true} as CustomAxiosRequestConfig);
    return bread;

}


export const breadDeleteApi = async ( id:IBreadParams ) => {

    

    const { data: bread } = await api.delete(`/brands/${id.id}`, {requiresAuth: true} as CustomAxiosRequestConfig);
    return bread;

}