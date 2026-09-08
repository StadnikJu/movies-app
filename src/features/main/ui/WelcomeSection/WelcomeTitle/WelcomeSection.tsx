import { Typography } from "@mui/material";

export const WelcomeSection = () => {
  return (
    <>
      <Typography variant="h2" component="h2" sx={{ fontWeight: 800, color: "#ffffff", mb: 2 }}>
        WELCOME
      </Typography>

      <Typography variant="h5" component="p" sx={{ color: "rgba(255, 255, 255, 0.978)", fontWeight: 600, mb: 2 }}>
        Browse highlighted titles from TMDB
      </Typography>
    </>
  );
};
