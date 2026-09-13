import { baseApi } from "@/app/api/baseApi";
import type { GenresResponse, MoviesResponse } from "@/common/types";
import type { FilteredMoviesParams } from "../model/types";

export const filteredMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchFilteredMovies: build.query<MoviesResponse, FilteredMoviesParams>({
      query: (params) => ({
        url: "/discover/movie",
        params
      })
    }),
    fetchGenres: build.query<GenresResponse, void>({
      query: () => "/genre/movie/list",
    }),
  }),
});

export const { useFetchFilteredMoviesQuery, useFetchGenresQuery } = filteredMoviesApi;
