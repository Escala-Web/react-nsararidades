export interface IOrderArray {
    id_product_variant: number,
    quantity: number
}

export interface IOrderCreate {
    id_address: number,
    shipping_signature: string,
    order_items: IOrderArray[]
}






export interface IOrderResponse {
    data: {
        success: boolean;
        message: string;
        content: IOrder[];
        page: {
          qtdPage: number;
          total: number;
        };
    }
  }
  
  export interface IOrder {
    id_order: number;
    order_created_at: string;
    status: string;
    status_created_at: string;
    address_shipped: IAddress;
    products: IProduct[];
  }
  
  export interface IAddress {
    public_area: string;
    number: string;
    complement: string | null;
    district: string;
    city: string;
    state: string;
    zip_code: string;
  }
  
  export interface IProduct {
    id_product_variant: number;
    name: string;
    sku: string;
    price: string; // pode mudar para number se você converter ao receber
    qtd_stock: number;
    discount: string; // pode mudar para number também
    id_media: number;
    file_type: string;
    brand_name: string;
  }
  

  export interface IOrderStatus {
    status: string,
    attachment?: [] | object
  }




  export interface IOrderGraphAll {
    success: boolean,
    message: string,
    content: {
      PENDING: number,
      PROCESSING: number,
      SHIPPED: number,
      DELIVERED: number,
      CANCELLED: number,
      REFUNDED: number,
      RETURNED: number,
    }
  }