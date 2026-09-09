import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useFetchMoviesByCategoryQuery, type MovieCategory } from "../api/categoryMoviesApi";
import { MovieCard } from "@/features/search/ui/MovieCard";
import { useState } from "react";
import { MainPagination } from "@/common/components";

export const CategoryMovies = () => {
  const [page, setPage] = useState(1);
  const { category } = useParams();
  const { data: moviesData } = useFetchMoviesByCategoryQuery({category: category as MovieCategory, page});
  const navigate = useNavigate();

  const buttons = [
    { id: "popular", title: "Popular Movies" },
    { id: "top-rated", title: "Top Rated Movies" },
    { id: "upcoming", title: "Upcoming Movies" },
    { id: "now-playing", title: "Now Playing Movies" },
  ]

  const currentTitle = buttons.find(b => b.id === category)?.title ?? "Movies";

  return (
    <Container maxWidth="lg" disableGutters sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 5, flexWrap: "wrap", width: "100%" }}>
        {buttons.map((btn) => {
          const isActive = category === btn.id;
          return (
            <Button key={btn.id} onClick={() => navigate(`/category/${btn.id}`)}
              sx={{
                borderRadius: "30px", 
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                padding: "8px 20px",
                border: "none",
                backgroundColor: isActive ? "#2563eb" : "rgba(255, 255, 255, 0.05)", 
                color: isActive ? "#ffffff" : "text.secondary",
                "&:hover": {
                  backgroundColor: isActive ? "#1d4ed8" : "rgba(255, 255, 255, 0.1)",
                  border: "none",
                },
                "&.MuiButton-root": {
                  border: "none"
                }
              }}
            >
              {btn.title}
            </Button>
          )
        })}
      </Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, color: "text.primary", mb: 4 }}>
        {currentTitle}
      </Typography>
      <Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)",gap: "24px", width: "100%", mb: 6}}>
        {moviesData?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <MainPagination page={page} totalPages={moviesData?.total_pages ?? 0} onPageChange={setPage}/>
      </Box>
    </Container>
  );
};
