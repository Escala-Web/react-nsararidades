import { useQuery } from "@tanstack/react-query"
import { productsRecentsApi } from "../../services/products"

export const useProductsRecents = () => {

    return useQuery({
        queryKey: ['product'],
        queryFn: productsRecentsApi
    })
}