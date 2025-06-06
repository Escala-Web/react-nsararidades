// types/ICart.ts
export interface CartItem {
  id_product_variant: number;
  sku: string;
  price: string;
  quantity: number;
  is_default: number
}

// types/ICart.ts
export interface CartContextType {
  cart: CartItem[];
  setCart: () => void;
  qtd: number;
}
