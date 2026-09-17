import { useParams } from "react-router";
import { useFetchMovieByIdQuery, useFetchMovieCreditsQuery, useFetchSimilarMoviesQuery } from "../../api/mainApi";
import { Box, Grid, Skeleton } from "@mui/material";
import { MovieInfo } from "./MovieInfo/MovieInfo";
import { MovieCast } from "./MovieCast/MovieCast";
import { SimilarMovies } from "./SimilarMovies/SimilarMovies";
import { MovieInfoSkeleton } from "./MovieInfo/MovieInfoSkeleton/MovieInfoSkeleton";
import { MovieCastSkeleton } from "./MovieCast/MovieCastSkeleton/MovieCastSkeleton";
import { SimilarMoviesSkeleton } from "./SimilarMovies/SimilarMoviesSkeleton/SimilarMoviesSkeleton";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useFetchMovieByIdQuery(Number(movieId));
  const { data: creditsData, isLoading: isCreditsLoading } = useFetchMovieCreditsQuery(Number(movieId));
  const { data: similarMoviesData, isLoading: isSimilarMovies } = useFetchSimilarMoviesQuery(Number(movieId));

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 }, position: "relative" }}>
      <Grid container spacing={5} sx={{ mt: { xs: 4, md: 2 } }}>
        <Grid size={{ xs: 12, md: 4 }}>
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{ width: "100%", height: 400, borderRadius: "28px", backgroundColor: "rgba(87, 86, 86, 0.972)" }}
            />
          ) : (
            <Box
              component="img"
              src={data?.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "/placeholder.jpg"}
              alt={data?.title}
              sx={{ width: "100%", borderRadius: "28px", boxShadow: 8, display: "block" }}
            />
          )}
        </Grid>
        {isLoading ? (<MovieInfoSkeleton />) : (<MovieInfo data={data} />)}
      </Grid>
      {isCreditsLoading ? (<MovieCastSkeleton />) : (creditsData?.cast && <MovieCast cast={creditsData.cast} />)}
      {isSimilarMovies ?   <SimilarMoviesSkeleton /> : similarMoviesData?.results && <SimilarMovies movies={similarMoviesData.results} />}
    </Box>
  );
};
