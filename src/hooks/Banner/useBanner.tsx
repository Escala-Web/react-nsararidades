import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createBannerApi, deleteBannerApi, findAllBannersApi, updateBannerApi } from "../../services/banner";
import { toast } from "react-toastify";
import { IBanner, IBannerData } from "../../types/IBanner";

interface Response {
    success: boolean,
    message: string
}
export const useBanner = () => {

    const clientQuery = useQueryClient();

    const findAllBanner = useQuery<IBannerData>({
        queryKey: ['banner'],
        queryFn: findAllBannersApi
    });

    const createBanner = useMutation({
        mutationFn: createBannerApi,
        onSuccess: (data: Response) => {
            clientQuery.invalidateQueries(['banner']);
            toast.success(data.message)
        },
        onError: (error: any) => {
            console.log(error.response)
        }
    })

    const deleteBanner = useMutation({
        mutationFn: (id: number) => deleteBannerApi(id),
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['banner'])
            toast.success('Banner deletado com sucesso!')
        },
        onError: ( error: any ) => {
            console.log(error)
        }
    })

    const updateBanner = useMutation({
        mutationFn: ({ id, data }: { id: number; data: IBanner }) => updateBannerApi(id, data),
        onSuccess: (data: Response) => {
            clientQuery.invalidateQueries(['banner'])
            toast.success("Banner atualizado com sucesso!")
        },
        onError: (error) => {
            console.log(error.response)
        }
    })

    return { createBanner, findAllBanner, deleteBanner, updateBanner };

}