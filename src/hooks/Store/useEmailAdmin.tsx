import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeEmailCreatedApi, storeEmailDeletedApi } from "../../services/store";
import { toast } from "react-toastify";

export const useEmailAdmin = () => {

    const clientQuery = useQueryClient();

    const createdEmail = useMutation({
        mutationFn: storeEmailCreatedApi,
        onSuccess: (data) => {
            toast.success(data.message);
            clientQuery.invalidateQueries(['storeAll'])
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const deletedEmail = useMutation({
            mutationFn: storeEmailDeletedApi,
            onSuccess: (data) => {
                toast.success(data.message)
                clientQuery.invalidateQueries(['storeAll'])
            },
            onError: (error) => {
                
            }
        })

    return { createdEmail, deletedEmail };
}