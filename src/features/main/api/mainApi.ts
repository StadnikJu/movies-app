import { baseApi } from "@/app/api/baseApi";
import type { MoviesResponse } from "./mainApi.types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchMovies: build.query<MoviesResponse, void>({
      query: () => "/movie/popular",
    }),
  }),
});

export const { useFetchMoviesQuery } = moviesApi;
