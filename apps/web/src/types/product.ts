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