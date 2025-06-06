import { api } from "../../lib";
import { ActiveAccountType, ForgetPasswordType, Login, ResetPasswordType } from "../../types/iAdmin";

export const findLogin = async (data: Login) => {

    const { data: login } = await api.post('/admin/login', data); 
    return login;

};

export const forgetPasswordApi = async (email: ForgetPasswordType) => {

    const { data } = await api.post('/admin/forget-password', email);
    return data;

}

export const ResetPasswordApi = async (data: ResetPasswordType) => {

    const { data: reset} = await api.put('/admin/reset-password', data);
    return reset;

}

export const activeAccountApi = async (data: ActiveAccountType) => {

    const { data: account } = await api.put('/admin/active-account', data);
    return account;

}