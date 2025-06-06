import { useMutation, useQueryClient } from "@tanstack/react-query"
import { storeAddressCreatedApi, storeAddressDeletedApi } from "../../services/store";
import { toast } from "react-toastify";

export const useAddressAdmin = () => {
    
    const clientQuery = useQueryClient();

    const updatedAddress = '';

    const createdAddress = useMutation({
        mutationFn: storeAddressCreatedApi,
        onSuccess: (data) => {
            toast.success(data.message)
            clientQuery.invalidateQueries(['storeAll'])
        },
        onError: (error) => {
        
        }
    })

    const deletedAddress = useMutation({
        mutationFn: storeAddressDeletedApi,
        onSuccess: (data) => {
            toast.success(data.message)
            clientQuery.invalidateQueries(['storeAll'])
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return { createdAddress, deletedAddress }
}