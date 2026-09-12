import { baseApi } from "@/app/api/baseApi";
import type { MovieCreditsResponse, MovieDetails, MoviesResponse } from "@/common/types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchMovies: build.query<MoviesResponse, void>({
      query: () => "/movie/popular",
    }),
    fetchMovieById: build.query<MovieDetails, number>({
      query: (movieId) => `/movie/${movieId}`
    }),
    fetchMovieCredits: build.query<MovieCreditsResponse, number>({
      query: (movieId) => `/movie/${movieId}/credits`,
    }),
    fetchSimilarMovies: build.query<MoviesResponse, number>({
      query: (movieId) => `/movie/${movieId}/similar`,
    }),
  }),
});

export const { useFetchMoviesQuery, useFetchMovieByIdQuery, useFetchMovieCreditsQuery, useFetchSimilarMoviesQuery } = moviesApi;
