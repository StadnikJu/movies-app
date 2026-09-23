import { baseApi } from "@/app/api/baseApi";
import type { GenresResponse, MoviesResponse } from "@/common/types";
import type { FilteredMoviesParams } from "../model/types";
import { genresResponseSchema, moviesResponseSchema } from "@/common/schemas/movieSchemas";

export const filteredMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchFilteredMovies: build.query<MoviesResponse, FilteredMoviesParams>({
      query: (params) => ({
        url: "/discover/movie",
        params
      }),
      transformResponse: (response) => {
        return moviesResponseSchema.parse(response);
      },
    }),
    fetchGenres: build.query<GenresResponse, void>({
      query: () => "/genre/movie/list",
      transformResponse: (response) => {
        return genresResponseSchema.parse(response);
      },
    }),
  }),
});

export const { useFetchFilteredMoviesQuery, useFetchGenresQuery } = filteredMoviesApi;
