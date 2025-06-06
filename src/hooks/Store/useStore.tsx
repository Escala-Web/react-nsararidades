import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { storeAddressUpdateApi, storeEmailUpdateApi, storeFindAllApi, storeFindOneApi, storeGoogleApi, storeLayoutApi, storeLoginStripeApi, storeUpdateApi } from "../../services/store";
import { IStoreLoginResponse, IStoreResponse, IStoreStatus } from "../../types/IStore";
import { toast } from "react-toastify";
import { IOnboardingEmail } from "../../types/IOnboarding";

export const useStore = () => {

    const clientQuery = useQueryClient();

    const findAllStore = useQuery<IStoreStatus>({
        queryKey: ['store'],
        queryFn: storeFindAllApi
    })

    const loginStripeStore = useQuery<IStoreLoginResponse>({
        queryKey: ['stores'],
        queryFn: storeLoginStripeApi
    })

    const googleStore = useMutation({
        mutationFn: storeGoogleApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        } 
    });

    const findOneStore = useQuery<IStoreResponse>({
        queryKey: ['storeAll'],
        queryFn: storeFindOneApi,        
    })

    const updateStore = useMutation({
        mutationFn: storeUpdateApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    });

    const emailUpdate = useMutation({
         mutationFn: ({ data, id }: { data: any; id: string }) => storeEmailUpdateApi(data, id),
        onSuccess: (data) => {
            toast.success(data.message);
            clientQuery.invalidateQueries(['storeAll'])
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        } 
    })

    const addressUpdate = useMutation({
         mutationFn: ({ data, id }: { data: any; id: string }) => storeAddressUpdateApi(data, id),
        onSuccess: (data) => {
            toast.success(data.message);
            clientQuery.invalidateQueries(['storeAll'])
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        } 
    })

    const storeLayout = useMutation({
        mutationFn: storeLayoutApi,
        onSuccess: (data) => {
            toast.success(data.message);
            clientQuery.invalidateQueries(['storeAll'])
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })



    return { findAllStore, findOneStore, updateStore, googleStore, emailUpdate, addressUpdate, storeLayout, loginStripeStore };
}