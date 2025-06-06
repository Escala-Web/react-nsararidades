import { useMutation } from "@tanstack/react-query"
import { sendEmailContactApi } from "../../services/email"
import { toast } from "react-toastify"

interface IEmailResponse {
    success: boolean,
    message: string
}
export const useEmail = () => {

    const sendEmailContact = useMutation({
        mutationFn: sendEmailContactApi,
        onSuccess: (data: IEmailResponse) => {
            if(data.success) {
                toast.success(data?.message)
            }else {
                toast.warning(data?.message)
            }
        },
        onError: (error: any) => {
            console.log(error)
        }
    })

    return { sendEmailContact }

}