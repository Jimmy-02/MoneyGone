import type { Product } from "./product";

export interface ProductsResponse {
  products: Product[];
}

export interface CategoriesResponse {
  categories: string[];
}