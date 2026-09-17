import { Box, Skeleton } from "@mui/material";

export const CategoryMoviesSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <Box key={index} sx={{ width: "100%" }}>
          <Skeleton variant="rectangular" animation="wave" sx={{width: "100%",height: 400, borderRadius: 2,backgroundColor: "rgba(87, 86, 86, 0.972)"}}/>
          <Skeleton variant="text" animation="wave" sx={{width: "80%",height: 24, mt: 1}}/>
          <Skeleton variant="text"animation="wave" sx={{width: "50%", height: 20}}/>
        </Box>
      ))}
    </>
  );
};
