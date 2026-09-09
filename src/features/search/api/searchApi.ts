import { baseApi } from "@/app/api/baseApi";
import type { MoviesResponse } from "@/common/types";
import type { SearchMoviesParams } from "./searchApi.types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    searchMovies: build.query<MoviesResponse, SearchMoviesParams>({
      query: ({query, page}) => ({
        url: "/search/movie",
        params: {
          query,
          page
        },
      }),
    }),
  }),
});

export const { useSearchMoviesQuery } = moviesApi;
