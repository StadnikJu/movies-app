import { Typography } from "@mui/material";

export const WelcomeSection = () => {
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 800,
          color: "#ffffff",
          mb: 2,
          fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
          lineHeight: 1.1,
        }}
      >
        WELCOME
      </Typography>

      <Typography
        variant="h5"
        component="p"
        sx={{
          color: "rgba(255, 255, 255, 0.978)",
          fontWeight: 600,
          mb: 2,
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          lineHeight: 1.4,
        }}
      >
        Browse highlighted titles from TMDB
      </Typography>
    </>
  );
};
