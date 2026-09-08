import { Box } from "@mui/material";
import { MovieCard } from "./ MovieCard";
import type { Movie } from "../../main/api/mainApi.types";

type SearchResultsProps = {
  movies: Movie[];
};

export const SearchResults = ({ movies }: SearchResultsProps) => {
  return (
    <Box sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 3, width: "100%"}}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Box>
  );
};