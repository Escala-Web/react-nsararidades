import { IoAccessibilityOutline } from "react-icons/io5";
import { api } from "../../lib";
import { IActiveAccount, IForgetPasswordType, ILogin, IRegisterUser, IResetPassword, IUserUpdate } from "../../types/IUsers";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";

export const userLoginApi = async (data: ILogin) => {

    const { data: user } = await api.post('/user/login',data);
    return user;

}

export const userCreateApi = async (data: IRegisterUser) => {

    const { data: user } = await api.post('/user/register', data);
    return user;
    
} 


export const userActiveAccountApi = async (data: IActiveAccount) => {

    const { data: user } = await api.put('/user/active-account', data);
    return user;

}

export const userForgetPasswordApi = async (data: IForgetPasswordType) => {

    const { data: user } = await api.post('/user/forget-password', data);
    return user;

}

export const userResetPasswordApi = async (data: IResetPassword) => {

    const { data: user } = await api.put('/user/reset-password', data);
    return user;

}

export const usersFindAllApi = async () => {
    const { data: user } = await api.get(`/user`, { requiresAuth: true } as CustomAxiosRequestConfig);
    return user;
}


// Atualiza dados do usuario na area administrativa do usuario
export const userUpdateDataApi = async (data: IUserUpdate) => {
    const { data: user } = await api.put(`/user`, data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return user;
}


// Admin
export const userFindAllApi = async (id:any) => {

    const { data: user } = await api.get(`/user/${id}`, { requiresAuth: true } as CustomAxiosRequestConfig);
    return user;

}