import React, { useContext } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { ContextApp } from "../context/Provider";
import { Container } from "@mui/material";

function Cart() {
  const { cartItems } = useContext(ContextApp);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ display: "flex", maxWidth: "25%" }}>
      <ListItemButton
        onClick={toggleDrawer(true)}
        sx={{
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        }}
      >
        <ShoppingCartIcon
          sx={{
            color: "white",
          }}
        ></ShoppingCartIcon>
      </ListItemButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List
            sx={{
              maxWidth: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {cartItems.map((cartProduct) => (
              <ListItem key={cartProduct.id}>
                <ListItem>
                  <img
                    style={{ width: "100px" }}
                    src={cartProduct.image}
                    alt={cartProduct.title}
                  />
                  <Container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      textAlign: "center",
                      alignItems: "left",
                    }}
                  >
                    <ListItem>{cartProduct.title}</ListItem>

                    <ListItem>{cartProduct.price}£</ListItem>
                    <ListItem>Quantity:{cartProduct.stock}</ListItem>

                    <ListItemButton>Rimuovi</ListItemButton>
                  </Container>
                </ListItem>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <ListItem>
              Total:
              {cartItems.reduce(
                (acc, cartProduct) => acc + cartProduct.price,
                0
              )}{" "}
              £
              <ListItemButton
                sx={{
                  width: "50px",
                  border: "none",
                  backgroundColor: "primary",
                }}
              >
                Checkout
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Cart;
