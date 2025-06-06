import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IAddress } from "../../types/IAddress";
import { addressCreateApi, addressFindAllApi, addressUpdateApi } from "../../services/address";
import { toast } from "react-toastify";

interface IResponse {
    success: boolean,
    message: string
}
export const useAddress = () => {

    const queryClient = useQueryClient();

    const findAllAddress = useQuery<IAddress>({
        queryKey: ['address'],
        queryFn: addressFindAllApi
    });

    const updateAddress = useMutation({
        mutationFn: addressUpdateApi,
        onSuccess: (data: IResponse) => {
            queryClient.invalidateQueries(['address']);
            toast.success(data.message);
        },
        onError: (error: any) => {
            console.log(error)
        }
    })

    const createAddress = useMutation({
        mutationFn: addressCreateApi,
        onSuccess: (data: IResponse) => {
            queryClient.invalidateQueries(['address']);
            toast.success(data.message);
        },
        onError: (error: any) => {
            console.log(error)
        }
    })



    return { findAllAddress, updateAddress, createAddress };

}