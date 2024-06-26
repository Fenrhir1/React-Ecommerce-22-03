import { Box, Grid, useTheme } from "@mui/joy";
import { useContext } from "react";
import { ContextApp } from "../context/Provider";
import SideBar from "../components/Sidebar";
import EditableProduct from "../components/EditableProduct";

export default function PageDashboard() {
  const { products } = useContext(ContextApp);
  const theme = useTheme();
  debugger;

  return (
    <>
      <Box
        display="flex"
        width={"100%"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box
          width={"30%"}
          display="flex"
          height={"100vh"}
          justifyContent="center"
          alignItems="center"
          p={2}
          flexDirection={"column"}
          gap={2}
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <SideBar />
        </Box>
        <Grid
          padding={"30px"}
          width={"70%"}
          height={"100vh"}
          container
          spacing={2}
          justifyContent={"space-around"}
          sx={{
            gap: "50px",
            overflowY: "scroll",
            [theme.breakpoints.down("sm")]: {
              overflowY: "unset",
              width: "100%",
            },
          }}
        >
          {products.map((product) => (
            <EditableProduct key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
