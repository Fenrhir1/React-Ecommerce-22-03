import React, { useContext, useEffect } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
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
  const [cartItemCount, setCartItemCount] = React.useState(0);

  useEffect(() => {
    // Aggiorna il contatore ogni volta che cambia il carrello
    setCartItemCount(cartItems.length);
  }, [cartItems]);

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
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "25%" }}>
      <ListItemButton
        onClick={toggleDrawer(true)}
        sx={{
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        }}
      >
        <Badge badgeContent={cartItemCount} 
          sx={{
            color: "white",
            '& span': {background:'#f14444 !important',
            }}}
>
          <ShoppingCartIcon
            sx={{
              color: "white",
              '& .MuiBadge-standard .MuiBadge-anchorOriginTopRight .MuiBadge-anchorOriginTopRightRectangular .MuiBadge-overlapRectangular .css-dlwkee-MuiBadge-badge': {
                backgroundColor:'yellow !important',
              }}}
          />
        </Badge>
      </ListItemButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box role="presentation">
          <List>
            {cartItems.map((cartProduct) => (
              <ListItem key={cartProduct.id} sx={{ alignItems: "center" }}>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
                  <img
                    style={{
                      width: "20%",

                      aspectRatio: 1,
                    }}
                    src={cartProduct.image}
                    alt={cartProduct.title}
                  />

                  <ListItemText sx={{ flexGrow: 1, marginLeft: "8px" }}>
                    <Typography>{cartProduct.title}</Typography>
                    <Typography>{cartProduct.price}€</Typography>
                    <Typography> Quantity:{cartProduct.stock}</Typography>
                    <Button
                      sx={{
                        marginTop: "8px",
                        color: "white",
                        backgroundColor: "black",
                        "&:hover": {
                          backgroundColor: "#F14444",
                        },
                      }}
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
              marginTop: "auto",
            }}
          >
            <Divider />
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <Typography>
                Total:{" "}
                {cartItems.reduce(
                  (acc, cartProduct) => acc + cartProduct.price,
                  0
                )}{" "}
                €
              </Typography>
              <Button
                sx={{
                  width: "100%",
                  marginTop: "8px",
                  color: "white",
                  backgroundColor: "black",
                  "&:hover": { backgroundColor: "#F14444" },
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
