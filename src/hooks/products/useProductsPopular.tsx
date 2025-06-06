import { useQuery } from "@tanstack/react-query"
import { productsPopularApi } from "../../services/products"

export const useProductsPopular = () => {

    return useQuery({
        queryKey: ['product'],
        queryFn: productsPopularApi
    })
}