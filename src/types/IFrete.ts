export interface IProduct {
    id_product: number,
    quantity: number
};

export interface IFrete {
    zip_code: string,
    products: IProduct[]
}


export interface IFreteContent {
    message: string,
    success: boolean,
    content: IFreteData[]
}

export interface IFreteData {
    id: number,
    name: string,
    price: string,
    error?: string,
    custom_delivery_time: number,
    company: {
        name: string,
        picture: string
    }
}