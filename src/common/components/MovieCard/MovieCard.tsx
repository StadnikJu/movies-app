import type { Movie } from "@/common/types";
import { Box, Typography } from "@mui/material";
import type { FavoriteMovie } from "@/common/types/favoriteMovie.types";
import { MoviePoster } from "./MoviePoster";

type MovieCardProps = {
  movie: Movie | FavoriteMovie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <MoviePoster movie={movie}/>
      <Typography variant="h6" sx={{mt: 1, fontSize: "1rem", lineHeight: 1.3 }}>{movie.title}</Typography>
    </Box>
  );
};
