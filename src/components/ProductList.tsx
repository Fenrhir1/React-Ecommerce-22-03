import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  inventory_quantity: number;
}

export default function ProductList({
  showProducts,
}: {
  showProducts: boolean;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (showProducts) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((error: Error) => console.error(error));
    }
  }, [showProducts]);

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
          stock={product.inventory_quantity}
        />
      ))}
    </div>
  );
}
