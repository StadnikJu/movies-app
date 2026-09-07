import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";
import { Path } from "../Routing/Routing";
import notFoundImg from "@/assets/error-blue.svg"

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh", 
        textAlign: "center",
        px: 2,
      }}
    >
      <Box component="img" src={notFoundImg} alt="Page not found" sx={{ width: "100%", maxWidth: "300px", height: "auto", mb: 4}}/>

      <Typography variant="h2" component="h1" sx={{fontWeight: 700, mb: 1, color: "text.primary"}}>
        404
      </Typography>

      <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
        Page not found. We can't find what you're looking for.
      </Typography>

      <Button component={Link} to={Path.Main} variant="contained" color="primary"
        sx={{
          textTransform: "none",
          borderRadius: "20px",  
          padding: "10px 24px",
          fontSize: "1rem",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        To main page
      </Button>
    </Box>
  );
};
