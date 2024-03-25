import { Typography, Grid } from "@mui/material";
import ResponsiveAppBar from "./navbar";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url('src/assets/hero-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        marginTop: "65px",
        height: "calc(60vh + 69px)",

     
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        margin: "0",
      }}
    >
      <Grid
        container
        style={{
          maxWidth: "100%",
          height: "100%",
          borderRadius: "8px",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "100vw" }}>
          <ResponsiveAppBar />
        </div>

        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom fontFamily={"LibreBaskerville"}>
            ONLINE IS BETTER
          </Typography>
          <Typography variant="h5" gutterBottom fontFamily={"Librebaskerville"}>
            Scopri una vasta selezione di prodotti
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
