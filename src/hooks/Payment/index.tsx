import { useMutation, useQuery } from "@tanstack/react-query"
import { paymentCreateApi, paymentsFaturesGraphApi } from "../../services/payment"
import { toast } from "react-toastify"
import { IPayments } from "../../types/IPayments"

export const usePayment = (id:any = null) => {


    const createPayment = useQuery({
        queryKey: ['payment', id],
        queryFn: () => paymentCreateApi(id),
        
    })

    const paymentsFaturesGraph = useQuery<IPayments>({
        queryKey: ['payment'],
        queryFn: paymentsFaturesGraphApi
    })

    return { createPayment,paymentsFaturesGraph }
}