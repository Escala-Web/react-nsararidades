import { useContext } from "react";
import { api } from "../../lib"
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { ICategoryCreate } from "../../types/ICategory";
import { AuthContext } from "../../context/Auth";


export const categoryFindAllApi = async () => {

  const { data: category } = await api.get('/categories/get-categories', {requiresAuth: true} as CustomAxiosRequestConfig);
  return category;
  
}


export const categoryCreateApi = async (data: ICategoryCreate) => {

    const { data: category } = await api.post('/categories/create', data, {requiresAuth: true} as CustomAxiosRequestConfig);
    return category;

};