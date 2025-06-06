import { useQuery } from "@tanstack/react-query";
import { orderStatusGetApi } from "../../services/orders";


export const useOrderStatus = (status: string, page: string) => {
  return useQuery({
    queryKey: ['order', status, page],
    queryFn: () => orderStatusGetApi( status, page ),
    // staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });
};
