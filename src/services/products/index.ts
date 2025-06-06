import { api } from "../../lib";
import { CustomAxiosRequestConfig } from "../../lib/AxiosConfig";
import { IProductFilter, IProductsResponse } from "../../types/IProducts";

export const productCreateApi = async (data: any) => {

    const { data: variation } = await api.post('/products/create', data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return variation;

}

export const productUpdateApi = async (data: any, id: number | string) => {

    const { data: variation } = await api.put('/products/'+id, data, { requiresAuth: true } as CustomAxiosRequestConfig);
    return variation;

}

export const productFindAllApi = async (data: number) => {

    const { data: products } = await api.get('/products/' + data);
    return products;

}

export const productsRecentsApi = async () => {
    const { data: products } = await api.get('/products/recents');
    return products;
}

export const productsPopularApi = async () => {
    const { data: products } = await api.get('/products/popular');
    return products;
}

export const productFindOneApi = async (id: number) => {

    const { data: products } = await api.get('/products/get-by-id/' + id);
    return products;

}

export const productFindAllFilterApi = async ({ name, id, page }: IProductFilter) => {

    const { data } = await api.get(`/products/get-all-by/${name}/${id}/${page}`);
    return data;

}


export const productSearchAllApi = async (search: string) => {

      const sanitizedSearch = search.replace(/[^a-zA-Z0-9 ]/g, '');

    const searchParams = sanitizedSearch.replace(/\s+/g, '_');

    const { data } = await api.get('/products/search/'+searchParams, { requiresAuth: true } as CustomAxiosRequestConfig);
    return data;

}


export const productDeleteApi = async (id) => {

    const { data } = await api.delete('/products/'+id, { requiresAuth: true } as CustomAxiosRequestConfig);
    return data;

}
