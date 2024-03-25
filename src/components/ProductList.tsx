import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ContextApp } from "../context/Provider";
import { Product } from "../declarations/general";

export default function ProductList() {
  const { products } = useContext(ContextApp);

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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
