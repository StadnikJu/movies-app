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
    const newTheme = themeMode === "light" ? "dark" : "light";
    dispatch(changeThemeModeAC({themeMode: newTheme}));
    localStorage.setItem("themeMode", newTheme);
  };

  return (
    <AppBar position="static" color="default" sx={{ boxShadow: "none" }}>
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 1.5, sm: 2 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "88px", sm: "90px", md: "100px" },
            gap: { xs: 1, sm: 2 },
            flexWrap: { xs: "wrap", md: "nowrap" },
            py: { xs: 1, md: 0 },
            justifyContent: { xs: "space-between", md: "flex-start" },
          }}
        >
          <Box
            component={Link}
            to={Path.Main}
            sx={{
              height: { xs: 22, sm: 26 },
              width: "auto",
              cursor: "pointer",
              display: "block",
              flexShrink: 0,
            }}
          >
            <Box component="img" src={tmdbLogo} alt="TMDB Logo" sx={{ height: "100%", width: "auto" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexWrap: "wrap",
              flex: 1,
              gap: { xs: 0.25, sm: 0.5 },
              minWidth: 0,
            }}
          >
            {navItems.map((item, index) => (
              <React.Fragment key={item.path}>
                <Button
                  component={NavLink}
                  to={item.path}
                  sx={{
                    color: "text.primary",
                    textTransform: "none",
                    fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
                    padding: { xs: "4px 6px", sm: "5px 10px", md: "6px 16px" },
                    minWidth: "auto",
                    borderRadius: "20px",
                    lineHeight: 1.2,
                    "&.active": { backgroundColor: "action.selected" },
                    "&:hover": { color: "primary.main", backgroundColor: "transparent" },
                  }}
                >
                  {item.title}
                </Button>
                {index < navItems.length - 1 && (
                  <Typography sx={{ color: "divider", mx: { xs: 0, sm: 0.5 }, fontSize: { xs: "0.7rem", sm: "0.9rem" } }}>
                    |
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>

          <IconButton
            sx={{
              color: "secondary.main",
              backgroundColor: "action.hover",
              flexShrink: 0,
              "&:hover": { backgroundColor: "action.selected" },
              "& .MuiSvgIcon-root": { fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" } },
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
