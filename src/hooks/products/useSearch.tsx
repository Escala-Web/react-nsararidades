import { useQuery } from "@tanstack/react-query"
import { productSearchAllApi } from "../../services/products"
import { ISearchAll } from "../../types/IProducts"

export const useSearch = (search: string) => {
    return useQuery<ISearchAll>({
        queryKey: ['products', search],
        queryFn: () => productSearchAllApi(search),
        enabled: !!search
    })
}