import { useMutation, useQueryClient } from "@tanstack/react-query"
import { storeSociaisCreatedApi, storeSociaisUpdateApi, storeSocialDeletedApi } from "../../services/store";
import { toast } from "react-toastify";

export const useSocialAdmin = () => {

    const clientQuery = useQueryClient();

    const createdSocial = useMutation({
        mutationFn: storeSociaisCreatedApi,
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['storeAll'])
            toast.success(data.message)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })

    const storeSociaisUpdate = useMutation({
        mutationFn: ({ type, data }) => storeSociaisUpdateApi(type, data),
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['storeAll'])
            toast.success(data.message)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })

    const storeSociaisDeleted = useMutation({
        mutationFn: storeSocialDeletedApi,
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['storeAll'])
            toast.success(data.message)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    
    return { createdSocial, storeSociaisUpdate, storeSociaisDeleted }
}