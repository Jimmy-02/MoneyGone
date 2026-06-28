export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (productId: string, qty?: number) => void;
  removeItem: (productId: string) => void;
  setQty: (productId: string, quantity: number) => void;
  clear: () => void;
}