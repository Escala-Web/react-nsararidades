import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storePhoneCreatedApi, storePhoneDeletedApi, storePhoneUpdatedApi } from "../../services/store";
import { toast } from "react-toastify";

export const usePhoneAdmin = () => {
    
    const clientQuery = useQueryClient();

    const phoneCreated = useMutation({
        mutationFn: storePhoneCreatedApi,
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['storeAll']);
            toast.success(data?.message)
            console.log(data)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })

    const phoneUpdated = useMutation({
        mutationFn: ({ data, id }: { data: any; id: string }) => storePhoneUpdatedApi(id, data),
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['storeAll']);
            toast.success(data?.message)

        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })

    const phoneDeleted = useMutation({
        mutationFn: storePhoneDeletedApi,
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['storeAll']);
            toast.success(data?.message)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    
    return { phoneCreated, phoneUpdated, phoneDeleted };
}