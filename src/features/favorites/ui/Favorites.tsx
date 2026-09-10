import { getFavorites } from "@/common/utils";
import { MovieCard } from "@/common/components/MovieCard/MovieCard";
import { Box, Container, Typography } from "@mui/material";

export const Favorites = () => {
  const movies = getFavorites();

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>

      <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700, mb: 4 }}>
        Favorites
      </Typography>

      <Typography variant="h6" component="h2" sx={{ color: '#cdcdcd', fontWeight: 600, mb: 3 }}>
        Favorite Movies
      </Typography>

      <Box  sx={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 2 }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Box>
    </Container>
  )
};
