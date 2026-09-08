import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box component="footer"
      sx={{
        width: "100%",
        minHeight: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider", 
        py: 2,
        mt: "auto", 
      }}
    >
      <Typography variant="body2"  sx={{ color: "text.secondary", fontSize: "0.875rem", textAlign: "center"}}>
        © 2025 Kinopoisk Demo · Data courtesy of TMDB.
      </Typography>
    </Box>
  );
};
