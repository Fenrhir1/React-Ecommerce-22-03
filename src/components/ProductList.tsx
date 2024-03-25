import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  inventory_quantity: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error: Error) => console.error(error));
  }, []);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginTop: "90px",
          marginBottom: "100px",
          fontFamily: "Libre Baskerville",
        }}
      >
        I NOSTRI PRODOTTI
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
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
    </>
  );
}
