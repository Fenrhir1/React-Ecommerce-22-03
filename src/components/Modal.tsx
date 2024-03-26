import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { useContext, useState } from "react";
import { InputLabel, Input } from "@mui/material";
import { Product } from "../declarations/general";
import { ContextApp } from "../context/Provider";

export default function BasicModal({ product }: { product: Product }) {
  const { adminEditProduct } = useContext(ContextApp);
  const [open, setOpen] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  return (
    <>
      <Button
        sx={{
          marginBottom: "20px",
          color: "white",
          backgroundColor: "black",
          "&:hover": { backgroundColor: "#F14444" },
        }}
        variant="solid"
        size="lg"
        onClick={() => setOpen(true)}
      >
        Modifica
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <InputLabel htmlFor="component-simple" sx={{ color: "#323436" }}>
            IMMAGINE
          </InputLabel>
          <Input
            id="immagine"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
          />

          <InputLabel htmlFor="component-helper" sx={{ color: "#323436" }}>
            TITOLO
          </InputLabel>
          <Input
            id="titolo"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
          />
          <InputLabel htmlFor="component-error" sx={{ color: "#323436" }}>
            PREZZO
          </InputLabel>
          <Input
            id="prezzo"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <Button
            sx={{
              marginTop: "8px",
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#F14444" },
            }}
            onClick={() => {
              //@ts-ignore
              adminEditProduct(newProduct!);
              setOpen(false);
            }}
          >
            Modifica
          </Button>
        </Sheet>
      </Modal>
    </>
  );
}
