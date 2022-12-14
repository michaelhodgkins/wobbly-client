import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/auth.context";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const theme = createTheme({
  palette: {
    info: {
      main: "#3F72AF",
    },
    secondary: {
      main: "#DBE2EF",
    },
    primary: {
      main: "#FFFFFF",
    },
    success: {
      main: "#F9F7F7",
    },
  },
});

const ResponsiveAppBar = () => {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {isLoggedIn && (
              <div className="navbar-container">
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <a href="/">
                    <img
                      src="../../image/logo.png"
                      alt="logo"
                      className="logo"
                    />
                  </a>
                  {/* <Button
                    sx={{ my: 2, color: "black", display: "block", margin: 1 }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      <strong>HOME</strong>
                    </Link>
                  </Button> */}
                  <Button
                    sx={{ my: 2, color: "black", display: "block", margin: 1 }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/festival"
                    >
                      <strong>FESTIVALS</strong>
                    </Link>
                  </Button>
                  <Button
                    sx={{ my: 2, color: "black", display: "block", margin: 1 }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to={`/profile/${user._id}`}
                    >
                      <strong>PROFILE</strong>
                    </Link>
                  </Button>
                </Box>
                <Button
                  onClick={logOutUser}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "flex",
                    background: "#DBE2EF",
                    margin: 1,
                    "&:hover": { backgroundColor: "#DCCCBC", color: "white" },
                  }}
                >
                  <strong>LOGOUT</strong>
                </Button>
              </div>
            )}
            {!isLoggedIn && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <a href="/">
                  <img src="../../image/logo.png" alt="logo" className="logo" />
                </a>
                <Button
                  sx={{ my: 2, color: "black", display: "block", margin: 1 }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/signup"
                    sx={rightLink}
                  >
                    <strong>SIGNUP</strong>
                  </Link>
                </Button>
                <Button
                  sx={{ my: 2, color: "black", display: "block", margin: 1 }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/login"
                    sx={rightLink}
                  >
                    <strong>LOGIN</strong>
                  </Link>
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>
    </ThemeProvider>
  );
};
//navbar 1
export default ResponsiveAppBar;
