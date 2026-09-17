import { Box, Skeleton } from "@mui/material";

export const SimilarMoviesSkeleton = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Skeleton variant="text" animation="wave" sx={{width: 220, height: 50, mb: 3}}/>
      <Box sx={{ display: "grid", gridTemplateColumns: {xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, minmax(0, 1fr))", md: "repeat(6, minmax(0, 1fr))"}, gap: { xs: "16px", md: "24px" }}}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Box key={index}>
            <Skeleton variant="rectangular" animation="wave" sx={{width: "100%", height: 200, borderRadius: 2, backgroundColor: "rgba(87, 86, 86, 0.972)"}}/>
            <Skeleton variant="text"  animation="wave" sx={{width: "80%", height: 24, mt: 1}}/>
            <Skeleton variant="text" animation="wave" sx={{width: "50%", height: 20}}/>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
