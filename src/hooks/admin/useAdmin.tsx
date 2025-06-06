import { useMutation, useQueryClient } from '@tanstack/react-query';
import { activeAccountApi, findLogin, forgetPasswordApi, ResetPasswordApi } from '../../services/admin';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { AdminResponseType, LoginResponseAdmin } from '../../types/iAdmin';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const useAdmin = () => {

    const { setLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const login = useMutation({
        mutationFn: findLogin,
        onSuccess: (data: LoginResponseAdmin) => {
            setLogin({
                name: data.user,
                token: data.token,
                rule: data.rule
            });

            if(data.firstAccess) {
                toast.warning(data.message);
                queryClient.invalidateQueries(['auth']);
                return;
            }

            toast.success(data.message);
            queryClient.invalidateQueries(['auth']);
            navigate('/administrativo');

            console.log(data)

        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
            console.log(error)
        }
    });

    const forgetPassword = useMutation({
        mutationFn: forgetPasswordApi,
        onSuccess: (data: AdminResponseType) => {
            queryClient.invalidateQueries(['auth']);
            toast.success(data.message);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    const resetPassword = useMutation({
        mutationFn: ResetPasswordApi,
        onSuccess: (data: AdminResponseType) => {
            queryClient.invalidateQueries(['auth']);
            toast.success(data.message);
            navigate('/login');
        },
        onError: (error) => {
            // console.log(error)
        }
    })

    const accountActive = useMutation({
        mutationFn: activeAccountApi,
        onSuccess: (data: AdminResponseType) => {
            queryClient.invalidateQueries(['auth']);
            toast.success(data.message);
            // console.log(data)
        },
        onError: (error: any) => {
            // console.log(error)
            toast.error(error.response.data.message)
        }
    })

    return { login, forgetPassword, resetPassword, accountActive };

}