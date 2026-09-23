import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useFetchMoviesByCategoryQuery } from "../api/categoryMoviesApi";
import { MovieCard } from "@/common/components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { MainPagination } from "@/common/components";
import { CategoryButtons } from "./CategoryButtons";
import type { MovieCategory } from "../api/categoryMoviesApi.types";
import { categoryButtons } from "../model/categoryMovies.constants";
import { CategoryMoviesSkeleton } from "./CategoryMoviesSkeleton/CategoryMoviesSkeleton";

export const CategoryMovies = () => {
  const [page, setPage] = useState(1);
  const { category } = useParams();
  const { data: moviesData, isLoading } = useFetchMoviesByCategoryQuery({category: category as MovieCategory, page});

  const currentTitle = categoryButtons.find(b => b.id === category)?.title ?? "Movies";

  useEffect(() => {
    setPage(1);
    window.scrollTo(0, 0);
  }, [category])

  return (
    <Container maxWidth="lg" disableGutters sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
      <CategoryButtons />
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600, color: "text.primary", mb: 4, fontSize: { xs: "2rem", sm: "2.5rem" } }}>
        {currentTitle}
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, minmax(0, 1fr))", xl: "repeat(5, minmax(0, 1fr))" }, gap: { xs: "16px", md: "24px" }, width: "100%", mb: 6 }}>

        {isLoading ? <CategoryMoviesSkeleton/> : moviesData?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <MainPagination page={page} totalPages={moviesData?.total_pages ?? 0} onPageChange={setPage} />
      </Box>
    </Container>
  );
};
