export interface Product {
  id: string;
  name: string;
  category: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface CategoriesResponse {
  categories: string[];
}