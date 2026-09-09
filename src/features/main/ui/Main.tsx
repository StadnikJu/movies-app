import { Box, Container } from "@mui/material";
import { useFetchMoviesQuery } from "../api/mainApi";
import { useEffect, useState } from "react";
import { MovieSearch } from "./WelcomeSection/MovieSearch/MovieSearch";
import { WelcomeSection } from "./WelcomeSection/WelcomeTitle/WelcomeSection";
import type { Movie } from "@/common/types";

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
      <Container maxWidth="lg" disableGutters>
        <WelcomeSection />
        <MovieSearch />
      </Container>
    </Box>
  );
};
