import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { userActiveAccountApi, userCreateApi, userForgetPasswordApi, userLoginApi, userResetPasswordApi, usersFindAllApi, userUpdateDataApi } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { ILoginResponse } from "../../types/IUsers";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

interface IResponse {
    success: boolean,
    message: string
}

export const useUser = () => {
    const { setLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const clientQuery = useQueryClient();

    const createUser = useMutation({
        mutationFn: userCreateApi,
        onSuccess: (data: IResponse) => {
            clientQuery.invalidateQueries(['users']);
            toast.success(data.message);
            if(data.success) {
                navigate('/login')
            }

            console.log(data)
            
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
            console.log(error)
        }
    })

    const loginUser = useMutation({
        mutationFn: userLoginApi,
        onSuccess: (data: ILoginResponse) => {
            clientQuery.invalidateQueries(['users']);
            
            
            if(data.firstAccess === true) {
                toast.success(data.message);
                return;
            } 
            
            toast.success(data.message);

            setLogin({
                name: data.name,
                rule: data.rule,
                token: data.token,
            });
            
            navigate('/');
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    const loginActiveAccount = useMutation({
        mutationFn: userActiveAccountApi,
        onSuccess: (data: IResponse) => {
            clientQuery.invalidateQueries(['users']);
            toast.success(data.message);
            navigate('/login');
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    const forgetPasswordLogin = useMutation({
        mutationFn: userForgetPasswordApi,
        onSuccess: (data: IResponse) => {
            clientQuery.invalidateQueries(['users']);
            toast.success(data.message);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)

        
        }
    })

    const resetPasswordLogin = useMutation({
        mutationFn: userResetPasswordApi,
        onSuccess: (data: IResponse) => {
            clientQuery.invalidateQueries(['users']);
            toast.success(data.message);

            navigate('/login');
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    const findAllUser = useQuery({
        queryKey: ['users'],
        queryFn: usersFindAllApi
    })

    const updateUserData = useMutation({
        mutationFn: userUpdateDataApi,
        onSuccess: (data: IResponse) => {
            clientQuery.invalidateQueries(['users']);
            toast.success(data?.message);
            console.log(data)
        },
        onError: (error: any) => {
            toast.error(error.response.data.message);
            console.log(error)
        }
    })


    return { createUser, loginUser, loginActiveAccount, forgetPasswordLogin, resetPasswordLogin, findAllUser, updateUserData };
}