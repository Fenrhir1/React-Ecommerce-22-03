import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function PageCheckout() {
  const Navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url('src/assets/hero-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          marginTop: "65px",
          height: "calc(48vh + 40px)",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          margin: "0",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          style={{
            color: "#F14444",
            fontFamily: "Wallpoet",
            fontWeight: "bold",
            marginTop: "60px",
          }}
        >
          CHECKOUT
        </Typography>
      </div>
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
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#F14444",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#F14444",
                  },
                  "&:hover fieldset": {
                    borderColor: "#F14444",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#F14444",
                  },
                },
              }}
            />

            <TextField
              name="city"
              label="city"
              type="text"
              placeholder="city"
              required
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#F14444",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#F14444",
                  },
                  "&:hover fieldset": {
                    borderColor: "#F14444",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#F14444",
                  },
                },
              }}
            />
            <TextField
              name="postCode"
              label="postCode"
              type="text"
              placeholder="postCode"
              required
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#F14444",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#F14444",
                  },
                  "&:hover fieldset": {
                    borderColor: "#F14444",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#F14444",
                  },
                },
              }}
            />
            <TextField
              className="text-field"
              name="cardNumber"
              label="Insert Card Number"
              type="text"
              placeholder="Card Number"
              required
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#F14444",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#F14444",
                  },
                  "&:hover fieldset": {
                    borderColor: "#F14444",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#F14444",
                  },
                },
              }}
            />
          </Box>
        </Grid>
        <Button
          sx={{
            color: "white",
            fontFamily: "Libre Baskerville",

            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#F14444",
            },
          }}
          type="submit"
          variant="contained"
          onClick={() => Navigate("/checkout/success")}
        >
          PAGA ORA
        </Button>
      </Grid>
    </>
  );
}
