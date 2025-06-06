import { useMutation, useQueryClient } from "@tanstack/react-query"
import { storeCreatedApi, storeOnboardingApi } from "../../services/store"
import { toast } from "react-toastify"

interface OnboardingResponse {
    success: boolean,
    message: string
    redirect_url?: string
}

export const useOnboarding = () => {

    const clientClient = useQueryClient();

    const createOnboarding = useMutation({
        mutationFn: storeCreatedApi,
        onSuccess: (data: OnboardingResponse) => {
            toast.success(data.message);
            clientClient.invalidateQueries(['store'])
        },
        onError: (error: any) => {
            console.log(error)
        }
    })

    const onBoarding = useMutation({
        mutationFn: storeOnboardingApi,
        onSuccess: (data: OnboardingResponse) => {
            if(data.success) {
                toast.success(data.message);
            }
        },
        onError: (error: any) => {
            console.log(error)
        }
    })

    return { createOnboarding, onBoarding }

}