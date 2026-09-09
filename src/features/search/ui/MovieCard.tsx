import type { Movie } from "@/common/types";
import { Box, Typography } from "@mui/material";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {movie.poster_path ? (
        <Box component="img" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title}
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
            sx={{
              color: "text.secondary",
              fontWeight: 600,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            No Poster
          </Typography>
        </Box>
      )}

      <Typography
        variant="h6"
        sx={{
          mt: 1,
          fontSize: "1rem",
          lineHeight: 1.3,
        }}
      >
        {movie.title}
      </Typography>
    </Box>
  );
};