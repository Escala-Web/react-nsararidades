interface IProductVariation {
    id_product_variant: number;
    sku: string;
    price: string;
    qtd_stock: number;
    discount: string;
    image_path: string;
    is_default: number;
  }
  
  interface IProduct {
    id_product: number;
    brand: string;
    name: string;
    variations: IProductVariation[];
  }
  
  export interface IProductsResponse {
    content: IProduct[];
  }
  
  export interface IProductResponse {
    success: boolean;
    message: string;
    content: {
      brand: string;
      name: string;
      description: string;
      variations: {
        id_product_variant: number;
        sku: string;
        price: string;
        qtd_stock: number;
        is_default: number;
        discount: string;
        pictures: {
          is_main: number;
          position: number;
          image_path: string;
        }[];
        value_variant: any[];
      }[];
    };
  }
  


  export interface IProductFilter {
    name: string,
    id: string,
    page?: string
  }


  export interface ISearchAll {
    success: boolean,
    message: string,
    content: ISearch[]
  }

  export interface ISearch {
    id_product: number,
    name: string,
    brand: string,
    category: string,
    store: number
  }