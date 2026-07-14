import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/react";
import { apiFetch } from "../lib/api.js";
import type { OrderDetailResponse, Order, OrderItem } from "../types/order.js";

export interface OrderDetailContext {
  order: Order;
  items: OrderItem[];
  paid: boolean;
}

export function useOrderDetailPage() {
  const { id } = useParams();
  const { getToken } = useAuth();

  const { data, isLoading, error } = useQuery<OrderDetailResponse>({
    queryKey: ["order", id],
    queryFn: () => apiFetch(`/api/orders/${id}`, { getToken }),
    enabled: Boolean(id),
  });

  const order = data?.order ?? null;
  const items = data?.items ?? [];
  const paid = order?.status === "paid";

  return {
    id,
    order,
    items,
    paid,
    isLoading,
    error,
  };
}