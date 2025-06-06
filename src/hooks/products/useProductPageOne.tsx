import { useQuery } from "@tanstack/react-query"
import { IProductResponse } from "../../types/IProducts"
import { productFindOneApi } from "../../services/products"

export const useProductPageOne = (id?: number) => {

    const findOneProduct = useQuery<IProductResponse>({
        queryKey: ['product', id],
        queryFn: () => productFindOneApi(id)
    })

    return { findOneProduct }

}