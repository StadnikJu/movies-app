import { Box, Container } from "@mui/material";
import { useFetchMoviesQuery } from "../api/mainApi";
import { useEffect, useState } from "react";
import { MovieSearch } from "./WelcomeSection/MovieSearch/MovieSearch";
import { WelcomeSection } from "./WelcomeSection/WelcomeTitle/WelcomeSection";
import type { Movie } from "@/common/types";
import { MovieSection } from "./MovieSection/MovieSection";

export const Main = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  const { data } = useFetchMoviesQuery();

  useEffect(() => {
    if (data?.results.length) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setRandomMovie(data.results[randomIndex]);
    }
  }, [data]);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          minHeight: "700px",
          position: "relative",
          backgroundImage: randomMovie?.backdrop_path ? `url(${IMAGE_BASE_URL}${randomMovie?.backdrop_path})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          mb: 6,
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <WelcomeSection />
          <MovieSearch />
        </Container>
      </Box>
      <Container maxWidth="lg">
        <MovieSection title="Popular Movies" category="popular" />
        <MovieSection title="Top Rated Movies" category="top-rated" />
        <MovieSection title="Upcoming Movies" category="upcoming" />
        <MovieSection title="Now Playing Movies" category="now-playing" />
      </Container>
    </Box>
  );
};
