import { Box, Skeleton } from "@mui/material";

export const SearchMoviesSkeleton = () => {
  return (
    <Box 
        sx={{ display: "grid", gridTemplateColumns: {xs: "repeat(2, minmax(0, 1fr))",sm: "repeat(3, minmax(0, 1fr))",md: "repeat(4, minmax(0, 1fr))"},
            gap: 3,
            width: "100%",
        }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Box key={index} sx={{ width: "100%" }}>
          <Skeleton variant="rectangular" animation="wave" sx={{width: "100%",height: 300,borderRadius: 2, backgroundColor: "rgba(87, 86, 86, 0.972)"}}/>
          <Skeleton variant="text" animation="wave" sx={{width: "80%",height: 24,mt: 1}}/>
          <Skeleton variant="text" animation="wave" sx={{width: "50%", height: 20}}/>
        </Box>
      ))}
    </Box>
  );
};