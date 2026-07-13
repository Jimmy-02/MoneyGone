import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { apiFetch } from "../lib/api";
import { Product } from "../types/product";

export function useProductPage() {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery<{ product: Product }>({
    queryKey: ["product", slug],
    queryFn: () => apiFetch(`/api/products/${slug}`),
    enabled: Boolean(slug),
  });

  return { slug, product: data?.product ?? null, isLoading, error };
}
