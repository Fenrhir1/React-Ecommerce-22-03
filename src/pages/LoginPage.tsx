import { Button, Container, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ContextApp } from "../context/Provider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { handleLogin, userLogged } = useContext(ContextApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Typography>Login</Typography>
      <form style={{}}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10%",
            width: "100%",
          }}
        >
          <label htmlFor="email">Email</label>
          <TextField
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Container>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10%",
            width: "100%",
          }}
        >
          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Container>
        <Button
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
  );
}
