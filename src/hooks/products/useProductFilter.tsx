import { useQuery } from "@tanstack/react-query";
import { productFindAllFilterApi } from "../../services/products";
import { IProductsResponse } from "../../types/IProducts";

export const useProductFilter = (name: string, id: string, page: string) => {
  return useQuery<IProductsResponse>({
    queryKey: ['products', name, id, page],
    queryFn: () => productFindAllFilterApi({ name, id, page }),
  });
};
