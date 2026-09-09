import { baseApi } from "@/app/api/baseApi";
import type { MoviesResponse } from "@/common/types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchMovies: build.query<MoviesResponse, void>({
      query: () => "/movie/popular",
    }),
  }),
});

export const { useFetchMoviesQuery } = moviesApi;
