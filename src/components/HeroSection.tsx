import { Button, Typography, Grid } from "@mui/material";
import ResponsiveAppBar from "./navbar";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url('src/assets/hero-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "white",
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
          <Typography variant="h2" gutterBottom>
            ONLINE IS BETTER
          </Typography>
          <Typography variant="h5" gutterBottom>
            Scopri una vasta selezione di prodotti
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Inizia lo shopping ora!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
