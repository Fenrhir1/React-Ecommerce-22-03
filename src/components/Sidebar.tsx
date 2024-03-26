import { Box, Button, Typography } from "@mui/joy";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../context/Provider";
import FormForProduct from "./FormForProduct";

export default function SideBar() {
  const { handleLogout, userLogged } = useContext(ContextApp);
  const navigate = useNavigate();
  debugger;

  return (
    <>
      {!!userLogged && !!userLogged.isAdmin && (
        <Box display="flex" gap={1} flexDirection="column">
          <Typography fontSize="md" level="title-md" textAlign="center">
            Benvenuto {userLogged.name}!
          </Typography>
          <Button
            size="sm"
            color="danger"
            onClick={() => {
              handleLogout(), navigate("/");
            }}
          >
            Logout
          </Button>
          <FormForProduct />
        </Box>
      )}
    </>
  );
}
