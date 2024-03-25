import { Typography, Grid } from "@mui/material";
import ResponsiveAppBar from "./navbar";
import JARS from "../assets/logo/JARS.png";
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
          <img
            src={JARS}
            alt="Logo"
            style={{ height: "300px", width: "300px", marginTop: "50px" }}
          ></img>

          <Typography
            variant="h2"
            gutterBottom
            fontFamily={"Librebaskeville"}
            color="#F14444"
            fontWeight="bold"
          >
            ONLINE IS BETTER
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
