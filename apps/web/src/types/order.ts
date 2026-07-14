import type { Product } from "./product";

export type OrderStatus = "pending" | "paid" | "failed";

export const SIZES = {
  md: "h-[5.5rem] w-[5.5rem]",
  lg: "h-32 w-32 sm:h-36 sm:w-36",
} as const;

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPriceCents: number;
  product?: Product;
}

export interface Order {
  previewItems: never[];
  id: string;
  userId: string;
  status: OrderStatus;
  polarCheckoutId: string | null;
  polarOrderId: string | null;
  totalCents: number;
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
}

export interface OrdersResponse {
  orders: Order[];
}

export type OrderPreviewSize = keyof typeof SIZES;

export interface OrderPreviewItem {
  slug: string;
  imageUrl?: string | null;
}

export interface OrderPreviewProps {
  items: OrderPreviewItem[];
  size?: OrderPreviewSize;
}

export interface OrderDetailResponse {
  order: Order;
  items: OrderItem[];
}

