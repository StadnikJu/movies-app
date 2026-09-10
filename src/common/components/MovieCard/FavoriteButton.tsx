import type { Movie } from "@/common/types";
import type { FavoriteMovie } from "@/common/types/favoriteMovie.types";
import { addFavorite, getFavorites, removeFavorite } from "@/common/utils";
import { IconButton } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {
  movie: Movie | FavoriteMovie;
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const FavoriteButton = ({ movie }: Props) => {
  const favoriteMovies = getFavorites();
  const [isFavorite, setIsFavorite] = useState(favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id));
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
      setIsFavorite(false);
    } else {
      addFavorite({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,
        vote_average: movie.vote_average,
      });

      setIsFavorite(true);
    }
  };

  return (
    <IconButton
      className="favorite-button"
      onClick={handleFavoriteClick}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        opacity: isFavorite ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
        color: isFavorite ? "#f9d312" : "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        "&:hover": {
          backgroundColor: "rgba(8, 58, 225, 0.946)",
        },
      }}
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};
