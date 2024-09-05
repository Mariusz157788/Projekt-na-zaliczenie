import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h4" component="div">
            Przepisy Świata
          </Typography>
          <Typography variant="body1" component="div">
            Recipe finder
          </Typography>
        </Box>
        <Button
          color="inherit"
          sx={{ marginLeft: "auto", fontSize: "0.875rem" }}
        >
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
