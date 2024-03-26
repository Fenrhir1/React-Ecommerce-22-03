import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CheckoutSuccess() {
  const Navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h2 style={{ fontFamily: "Libre Baskerville" }}>
        Grazie per il tuo acquisto!
      </h2>
      <p style={{ fontFamily: "Libre Baskerville" }}>
        Riceverai una mail di conferma con i dettagli del tuo ordine!.
      </p>
      <Button
        style={{ color: "white", backgroundColor: "#F14444" }}
        onClick={() => {
          Navigate("/");
        }}
      >
        Torna alla home!
      </Button>
    </div>
  );
}
