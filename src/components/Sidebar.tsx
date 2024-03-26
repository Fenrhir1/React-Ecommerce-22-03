import { Box, Button, Input, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../context/Provider";
import CheckIcon from "@mui/icons-material/Check";
import { InputLabel } from "@mui/material";

export default function SideBar() {
  const { handleLogout, userLogged, products, setProducts } =
    useContext(ContextApp);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:1234/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'aggiunta del prodotto");
      }

      const addedProduct = await response.json();
      console.log("Nuovo prodotto aggiunto:", addedProduct);
      setProducts([addedProduct, ...products]);
    } catch (error: unknown) {
      console.error("Si è verificato un errore:", (error as Error).message);
    }
  };

  debugger;

  return (
    <>
      {!!userLogged && !!userLogged.isAdmin && (
        <Box display="flex" gap={1} flexDirection="column">
          <Typography
            fontWeight="bold"
            fontSize="large"
            level="title-md"
            textAlign="center"
            sx={{ color: "#F14444", marginBottom: "16px" }}
          >
            Benvenuto{userLogged.name}!
          </Typography>
          <Button
            sx={{
              width: "100%",
              marginTop: "8px",
              marginBottom: "16px",
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#F14444" },
            }}
            onClick={() => {
              handleLogout(), navigate("/");
            }}
          >
            LOGOUT
          </Button>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <p
              style={{
                color: "#323436",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              MODIFICA IL TUO PRODOTTO
            </p>
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
                width: "100%",
                marginTop: "8px",
                color: "white",
                backgroundColor: "black",
                "&:hover": { backgroundColor: "#F14444" },
              }}
              onClick={handleAddProduct}
            >
              <CheckIcon />
              AGGIUNGI
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
