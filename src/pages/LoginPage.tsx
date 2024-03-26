import { Button, Container, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { ContextApp } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import JARSBlack from "../assets/logo/JARSBlack.png";

export default function Login() {
  const { handleLogin, userLogged } = useContext(ContextApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          minHeight: "calc(100vh - 350px)",
        }}
      >
        <form style={{ width: "300px", marginTop: "20px" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10%",
              width: "100%",
            }}
          >
            <TextField
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10%",
              width: "100%",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <TextField
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Container>
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10%",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "#F14444",
              },
              marginBottom: "50px",
              margin: "auto",
            }}
            type="submit"
            onClick={() => {
              handleLogin({ email, password });
              if (!!userLogged) {
                navigate("/");
              } else {
                alert("Credenziali errate!");
              }
            }}
          >
            Login
          </Button>
        </form>
      </Container>
    </>
  );
}
