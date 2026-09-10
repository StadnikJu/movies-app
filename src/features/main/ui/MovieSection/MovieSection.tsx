import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useFetchMoviesByCategoryQuery } from "@/features/categoryMovies/api/categoryMoviesApi";
import { MovieCard } from "@/common/components/MovieCard/MovieCard";
import type { MovieCategory } from "@/features/categoryMovies/api/categoryMoviesApi.types";

type MoviesSectionProps = {
  title: string;
  category: MovieCategory;
};

export const MovieSection = ({title, category}: MoviesSectionProps) => {
  const navigate = useNavigate();
  const { data } = useFetchMoviesByCategoryQuery({ category, page: 1});
  const movies = data?.results.slice(0, 6) ?? [];

  return (
    <Box sx={{ width: "100%", mb: 6 }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3}}>
        <Typography variant="h4" component="h2"sx={{fontWeight: 600, color: "text.primary"}}>
          {title}
        </Typography>
        <Button onClick={() => navigate(`/category/${category}`)} 
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
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)", 
              borderColor: "rgba(255, 255, 255, 0.3)", 
            },
            "&.MuiButton-root": {
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }
          }}>
          View More
        </Button>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "24px", width: "100%"}}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};