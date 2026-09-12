import { MovieCard } from "@/common/components";
import type { Movie } from "@/common/types";
import { Box, Typography } from "@mui/material";

type Props = {
  movies: Movie[];
};

export const SimilarMovies = ({ movies }: Props) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        Similar Movies
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
          },
          gap: 2,
        }}
      >
        {movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};
