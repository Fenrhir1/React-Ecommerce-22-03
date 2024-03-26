import { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { ContextApp } from "../context/Provider";
import { Product } from "../declarations/general";
import ProductSearchBar from "./ProductSearchBar";

export default function ProductList() {
  const { products } = useContext(ContextApp);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product: Product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);


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
      <ProductSearchBar setSearchTerm={setSearchTerm} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}


        
      </div>
    </>
  );
}
