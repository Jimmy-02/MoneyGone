export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  priceCents: number;
  currency: string;
  imageUrl: string | null;
  imageKitFileId: string | null;
  active: boolean;
  createdAt: string; //json trhough api ưill be string not date
};

export type ProductForm = {
  name: string;
  slug: string;
  category: string;
  description: string;
  priceCents: number;
  currency: string;
  imageUrl?: string | null;
  imageKitFileId?: string | null;
  active: boolean;
};

export type SaveProductInput = {
  id?: string;
  body: ProductForm | Partial<ProductForm>;
};

export type AdminProductsResponse = {
  products: Product[];
};

export type AdminProductFormProps = {
  initial?: Product;
  saving: boolean;
  error: boolean;
  getToken: () => Promise<string | null>;
  onCancel: () => void;
  onSubmit: (body: ProductForm | Partial<ProductForm>) => void;
};