import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ContextApp } from "../context/Provider";
import { Product } from "../declarations/general";

export default function ProductList() {
  const { products } = useContext(ContextApp);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
