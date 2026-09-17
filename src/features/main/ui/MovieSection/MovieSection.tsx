import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useFetchMoviesByCategoryQuery } from "@/features/categoryMovies/api/categoryMoviesApi";
import { MovieCard } from "@/common/components/MovieCard/MovieCard";
import type { MovieCategory } from "@/features/categoryMovies/api/categoryMoviesApi.types";
import { MovieSectionSkeleton } from "./MovieSectionSkeleton/MovieSectionSkeleton";

type MoviesSectionProps = {
  title: string;
  category: MovieCategory;
};

export const MovieSection = ({ title, category }: MoviesSectionProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetchMoviesByCategoryQuery({ category, page: 1 });
  const movies = data?.results.slice(0, 6) ?? [];

  return (
    <Box sx={{ width: "100%", mb: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 1.5,
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, color: "text.primary", fontSize: { xs: "1.6rem", sm: "2rem" } }}
        >
          {title}
        </Typography>
        <Button
          onClick={() => navigate(`/category/${category}`)}
          sx={{
            textTransform: "none",
            color: "#ffffff",
            fontSize: "0.875rem",
            fontWeight: 400,
            padding: "6px 20px",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backgroundColor: "transparent",
            transition: "all 0.2s ease-in-out",
            alignSelf: { xs: "flex-start", sm: "center" },
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&.MuiButton-root": {
              border: "1px solid rgba(255, 255, 255, 0.15)",
            },
          }}
        >
          View More
        </Button>
      </Box>
      <Box
        sx={{display: "grid",
          gridTemplateColumns: {xs: "repeat(2, minmax(0, 1fr))",sm: "repeat(3, minmax(0, 1fr))",lg: "repeat(6, minmax(0, 1fr))"},
          gap: { xs: "16px", md: "24px" },
          width: "100%",
        }}
      >
        {isLoading ? <MovieSectionSkeleton /> : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Box>
    </Box>
  );
};
