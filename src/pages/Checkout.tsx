import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function PageCheckout() {
  const Navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        style={{ color: "#F14444", fontFamily: "Wallpoet" }}
      >
        CHECKOUT
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "40vh" }}
        mb={5}
      >
        <Grid item xs={12} mb={8}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name="address"
              label="address"
              type="text"
              placeholder="address"
              required
              sx={{
                "& *": {
                  borderColor: "#F14444 !important",
                },
              }}
            />

            <TextField
              name="city"
              label="city"
              type="text"
              placeholder="city"
              required
              sx={{
                "& *": {
                  borderColor: "#F14444 !important",
                },
              }}
            />
            <TextField
              name="postCode"
              label="postCode"
              type="text"
              placeholder="postCode"
              required
              sx={{
                "& *": {
                  borderColor: "#F14444 !important",
                },
              }}
            />
            <TextField
              className="text-field"
              name="cardNumber"
              label="Insert Card Number"
              type="text"
              placeholder="Card Number"
              sx={{
                "& *": {
                  borderColor: "#F14444 !important",
                },
              }}
              required
            />
          </Box>
        </Grid>
        <Button
          style={{
            color: "white",
            fontFamily: "Libre Baskerville",
            backgroundColor: "#F14444",
          }}
          type="submit"
          variant="contained"
          onClick={() => Navigate("/checkout/success")}
        >
          Paga!
        </Button>
      </Grid>
    </>
  );
}
