import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IEmail } from "../../types/IEmail";

export const sendEmailContactApi = async (data: IEmail) => {    
    const { data: email } = await api.post('/email', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return email;
};
