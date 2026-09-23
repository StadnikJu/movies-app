import { baseApi } from "@/app/api/baseApi";
import { movieCreditsResponseSchema, movieDetailsSchema, moviesResponseSchema } from "@/common/schemas/movieSchemas";
import type { MovieCreditsResponse, MovieDetails, MoviesResponse } from "@/common/types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchMovies: build.query<MoviesResponse, void>({
      query: () => "/movie/popular",
      transformResponse: (response) => {
        return moviesResponseSchema.parse(response);
      },
    }),
    fetchMovieById: build.query<MovieDetails, number>({
      query: (movieId) => `/movie/${movieId}`,
      transformResponse: (response) => {
        return movieDetailsSchema.parse(response);
      },
    }),
    fetchMovieCredits: build.query<MovieCreditsResponse, number>({
      query: (movieId) => `/movie/${movieId}/credits`,
      transformResponse: (response) => {
        return movieCreditsResponseSchema.parse(response);
      },
    }),
    fetchSimilarMovies: build.query<MoviesResponse, number>({
      query: (movieId) => `/movie/${movieId}/similar`,
      transformResponse: (response) => {
        return moviesResponseSchema.parse(response);
      },
    }),
  }),
});

export const { useFetchMoviesQuery, useFetchMovieByIdQuery, useFetchMovieCreditsQuery, useFetchSimilarMoviesQuery } = moviesApi;
