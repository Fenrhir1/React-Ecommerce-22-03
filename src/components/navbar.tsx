import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { ContextApp } from "../context/Provider";
import Cart from "./Cart";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { userLogged } = useContext(ContextApp);
  const settings = ["Logout", userLogged.isAdmin && "Dashboard"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#343236",
        boxShadow: "none",
        top: 0,
        width: "100%",
        zIndex: 1000,
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h5"
            gutterBottom
            fontFamily={"Librebaskeville"}
            color="white"
          >
            JARS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, backgroundColor: "white" }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton
              type="button"
              sx={{
                p: "10px",
                color: "white",
                "&:hover": { backgroundColor: "#F14444" },
              }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <div className="cart-button">
              <Cart />
            </div>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    color: "white",
                    "&:hover": { backgroundColor: "#F14444" },
                  },
                }}
              >
                <Avatar
                  sx={{
                    color: "white",
                    "&:hover": { backgroundColor: "#F14444" },
                  }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "50px",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings
                .filter((setting) => setting) // Filter out falsy values
                .map((setting, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseUserMenu();
                      if (setting === "Dashboard") {
                        navigate("/dashboard"); // Navigates to the dashboard route
                      } else {
                        if (setting === "Logout") {
                          navigate("/login");
                        }
                      }
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
