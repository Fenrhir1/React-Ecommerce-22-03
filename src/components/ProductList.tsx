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
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          stock={product.stock}
          id={0}
        />
      ))}
    </div>
  );
}
