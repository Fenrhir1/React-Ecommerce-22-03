import { useParams } from "react-router";
import { useContext } from "react";
import { Typography, Button } from "@mui/joy";
import { ContextApp } from "../context/Provider";
import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "../components/navbar";

function PageProduct() {
  const { productId } = useParams();
  const { products, handleAddToCart } = useContext(ContextApp);
  const productFound = products.find((product) => product.id === productId);

  if (!productFound) {
    return <div>Loading</div>;
  }

  const { description, price, image, title } = productFound;

  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "100px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "100px", height: "150px" }}
              src={image}
              alt={title}
            />{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography>{title}</Typography>{" "}
            <Typography>{description}</Typography>
            <Typography>{price}€</Typography>
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label="Buy product"
              sx={{
                ml: "auto",
                alignSelf: "center",
                fontWeight: 600,
                width: "50%",
                marginLeft: "50%",
                marginRight: "50%",
              }}
              onClick={() => handleAddToCart(productFound)}
            >
              Aggiungi al carrello!
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default PageProduct;
