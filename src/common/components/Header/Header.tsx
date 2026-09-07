import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import tmdbLogo from "@/assets/tmdb-logo.svg";
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container } from "@mui/material";
import { Link, NavLink } from "react-router";
import { Path } from "../Routing/Routing";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { changeThemeModeAC, selectThemeMode } from "@/app/model/app-slice";

export const Header = () => {
  const navItems = [
    { title: "Main", path: Path.Main },
    { title: "Category Movies", path: Path.CategoryMovies },
    { title: "Filtered Movies", path: Path.FilteredMovies },
    { title: "Search", path: Path.Search },
    { title: "Favorites", path: Path.Favorites },
  ];

  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectThemeMode);

  const changeTheme = () => {
    dispatch(
      changeThemeModeAC({
        themeMode: themeMode === "light" ? "dark" : "light",
      }),
    );
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{  boxShadow: "none" }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: "100px" }}>
          <Box component={Link} to={Path.Main} sx={{ height: 26, width: "auto", cursor: "pointer", display: "block" }}>
            <Box component="img" src={tmdbLogo} alt="TMDB Logo" sx={{ height: "100%", width: "auto" }} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            {navItems.map((item, index) => (
              <React.Fragment key={item.path}>
                <Button
                  component={NavLink}
                  to={item.path}
                  sx={{
                    color: "text.primary",
                    textTransform: "none",
                    fontSize: "1rem",
                    padding: "6px 16px",
                    borderRadius: "20px",

                    "&.active": {
                      backgroundColor: "action.selected",
                    },

                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.title}
                </Button>
                {index < navItems.length - 1 && <Typography sx={{ color: "divider", mx: 0.5 }}>|</Typography>}
              </React.Fragment>
            ))}
          </Box>

          <IconButton
            sx={{
              color: "secondary.main",
              backgroundColor: "action.hover",
              "&:hover": { backgroundColor: "action.selected" },
            }}
            onClick={changeTheme}
          >
            {themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


// disableGutters