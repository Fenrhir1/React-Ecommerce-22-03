import React, { useContext } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { ContextApp } from "../context/Provider";
import { ListItemText, Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

function Cart() {
  const Navigate = useNavigate();
  const { cartItems, handleRemoveFromCart } = useContext(ContextApp);
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
    <Box sx={{ display: "flex" }}>
      <ListItemButton color="neutral" onClick={toggleDrawer(true)}>
        <ShoppingCartIcon></ShoppingCartIcon>
      </ListItemButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box role="presentation">
          <List>
            {cartItems.map((cartProduct) => (
              <ListItem
                key={cartProduct.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
                  <img
                    style={{
                      width: "20%",
                      flexBasis: "20%",
                      aspectRatio: 1,
                    }}
                    src={cartProduct.image}
                    alt={cartProduct.title}
                  />

                  <ListItemText sx={{ flexGrow: 1 }}>
                    <Typography>{cartProduct.title}</Typography>
                    <Typography>{cartProduct.price}€</Typography>
                    <Typography> Quantity:{cartProduct.stock}</Typography>
                    <Button
                      onClick={() => {
                        handleRemoveFromCart(cartProduct.id);
                      }}
                    >
                      Rimuovi
                    </Button>
                  </ListItemText>
                </div>
                <Divider />
              </ListItem>
            ))}
          </List>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              position: "sticky",
              bottom: "0",
              width: "100%",
            }}
          >
            <ListItem sx={{}}>
              <span style={{ width: "100%" }}>
                Total:
                {cartItems.reduce(
                  (acc, cartProduct) => acc + cartProduct.price,
                  0
                )}{" "}
                €
              </span>
              <Button
                sx={{
                  width: "100%",
                  hover: "none",
                  border: "none",
                  backgroundColor: "primary",
                }}
                onClick={() => {
                  Navigate("/checkout");
                }}
              >
                Checkout
              </Button>
            </ListItem>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Cart;
