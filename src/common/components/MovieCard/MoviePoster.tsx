import { Box, Typography } from "@mui/material";
import { FavoriteButton } from "./FavoriteButton";
import { RatingBadge } from "./RatingBadge";
import type { FavoriteMovie } from "@/common/types/favoriteMovie.types";
import type { Movie } from "@/common/types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

type MovieCardProps = {
  movie: Movie | FavoriteMovie;
};

export const MoviePoster = ({ movie }: MovieCardProps) => {
  const getPosterUrl = (posterPath: string | null) => {
    if (!posterPath) {
      return null;
    }

    if (posterPath.startsWith("http")) {
      return posterPath;
    }

    return `${IMAGE_BASE_URL}${posterPath}`;
  };

  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <Box sx={{ position: "relative", width: "100%", "&:hover .favorite-button": { opacity: 1 } }}>
      {posterUrl ? (
        <Box
          component="img"
          src={posterUrl}
          alt={movie.title}
          sx={{
            width: "100%",
            aspectRatio: "2 / 3",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            aspectRatio: "2 / 3",
            borderRadius: 2,
            border: "2px dashed",
            borderColor: "divider",
            backgroundColor: "action.hover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", fontWeight: 600, textAlign: "center", textTransform: "uppercase" }}
          >
            No Poster
          </Typography>
        </Box>
      )}
      <FavoriteButton movie={movie} />
      <RatingBadge rating={movie.vote_average} />
    </Box>
  );
};
