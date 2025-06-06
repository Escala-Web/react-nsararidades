import { useMutation } from "@tanstack/react-query";
import { calcularFreteApi } from "../../services/frete";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";

export const useFrete = () => {
    
    const calcularFrete = useMutation({
        mutationFn: calcularFreteApi,
        onSuccess: (data) => {
        
               
        },  
        onError: (error) => {
            console.log(error)
        }
    })
    
    return { calcularFrete };
}