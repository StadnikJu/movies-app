import { getFavorites } from "@/common/utils";
import { MovieCard } from "@/common/components/MovieCard/MovieCard";
import { Box, Container, Typography } from "@mui/material";

export const Favorites = () => {
  const movies = getFavorites();

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 }, mb: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
      <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 700, mb: 4, fontSize: { xs: '2rem', sm: '2.5rem' } }}>
        Favorites
      </Typography>

      <Typography variant="h6" component="h2" sx={{ color: '#cdcdcd', fontWeight: 600, mb: 3, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
        Favorite Movies
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, minmax(0, 1fr))", lg: "repeat(6, minmax(0, 1fr))" }, gap: { xs: 2, md: 3 } }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Container>
  );
};
