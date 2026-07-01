import { Product } from "../types/homeCatalog";

export function CatalogProductCard({ product }: { product: Product }) {
  return (
    <div className="card bg-base-100 shadow">
      <h3>{product.name}</h3>
    </div>
  );
}