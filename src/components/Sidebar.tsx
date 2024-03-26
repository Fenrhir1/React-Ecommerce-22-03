import { Box, Button, Input, Typography } from "@mui/joy";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../context/Provider";
import CheckIcon from "@mui/icons-material/Check";
import { InputLabel } from "@mui/material";

export default function SideBar() {
  const { handleLogout, userLogged } = useContext(ContextApp);
  const navigate = useNavigate();
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
            BENVENUTO! {userLogged.name}
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
            <Input id="immagine" />

            <InputLabel htmlFor="component-helper" sx={{ color: "#323436" }}>
              TITOLO
            </InputLabel>
            <Input id="titolo" />

            <InputLabel htmlFor="component-disabled" sx={{ color: "#323436" }}>
              DESCRIZIONE
            </InputLabel>
            <Input id="descrizione" />

            <InputLabel htmlFor="component-error" sx={{ color: "#323436" }}>
              PREZZO
            </InputLabel>
            <Input id="prezzo" />
            <Button
              sx={{
                width: "100%",
                marginTop: "8px",
                color: "white",
                backgroundColor: "black",
                "&:hover": { backgroundColor: "#F14444" },
              }}
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
