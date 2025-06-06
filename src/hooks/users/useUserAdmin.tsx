import { useQuery } from "@tanstack/react-query"
import { IUserResponse } from "../../types/IUsers"
import { userFindAllApi } from "../../services/users"

export const useUserAdmin = (id:any) => {

    return useQuery<IUserResponse>({
        queryKey: ['users', id],
        queryFn: () => userFindAllApi(id)
    })
}