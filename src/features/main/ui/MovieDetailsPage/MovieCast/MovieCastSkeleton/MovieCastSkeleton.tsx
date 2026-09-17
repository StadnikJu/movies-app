import { Box, Skeleton } from "@mui/material";

export const MovieCastSkeleton = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: {xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(6, 1fr)"},gap: { xs: 2, md: 3 },mt: 6}}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Box key={index}>
          <Skeleton variant="circular" animation="wave" sx={{width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "rgba(87, 86, 86, 0.972)"}}/>
          <Skeleton variant="text" animation="wave" sx={{width: "80%",height: 24,mx: "auto", mt: 1}}/>
          <Skeleton variant="text" animation="wave" sx={{width: "60%", height: 20,mx: "auto"}}
          />
        </Box>
      ))}
    </Box>
  );
};