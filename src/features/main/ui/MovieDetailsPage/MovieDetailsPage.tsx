import { useParams } from "react-router";
import { useFetchMovieByIdQuery, useFetchMovieCreditsQuery, useFetchSimilarMoviesQuery } from "../../api/mainApi";
import { Box, Grid } from "@mui/material";
import { MovieInfo } from "./MovieInfo/MovieInfo";
import { MovieCast } from "./MovieCast/MovieCast";
import { SimilarMovies } from "./SimilarMovies/SimilarMovies";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useFetchMovieByIdQuery(Number(movieId));
  const { data: creditsData } = useFetchMovieCreditsQuery(Number(movieId));
  const { data: similarMoviesData } = useFetchSimilarMoviesQuery(Number(movieId));

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 }, position: "relative" }}>
      <Grid container spacing={5} sx={{ mt: { xs: 4, md: 2 } }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src={data?.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "/placeholder.jpg"}
            alt={data?.title}
            sx={{ width: "100%", borderRadius: "28px", boxShadow: 8, display: "block" }}
          />
        </Grid>
        <MovieInfo data={data} />
      </Grid>
      {creditsData?.cast && <MovieCast cast={creditsData.cast} />}
      {similarMoviesData?.results && <SimilarMovies movies={similarMoviesData.results} />}
    </Box>
  );
};
