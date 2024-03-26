import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JARSBlack from "../assets/logo/JARSBlack.png";
export default function CheckoutSuccess() {
  const Navigate = useNavigate();
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <img
          src={JARSBlack}
          alt="Logo"
          style={{ height: "300px", width: "300px" }}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            backgroundColor: "#F14444",
            padding: "10px",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          <h2
            style={{
              fontFamily: "Libre Baskerville",
              fontWeight: "bold",
              color: "white",
            }}
          >
            GRAZIE PER IL TUO ACQUISTO!
          </h2>
        </div>
        <h3 style={{ fontFamily: "Libre Baskerville" }}>
          A breve riceverai una mail di conferma con i dettagli del tuo
          ordine...
        </h3>
        <Button
          sx={{
            color: "white",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#F14444",
            },
          }}
          onClick={() => {
            Navigate("/");
          }}
        >
          Torna alla home
        </Button>
      </div>
    </>
  );
}
