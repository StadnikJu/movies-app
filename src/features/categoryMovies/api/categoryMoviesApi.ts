import { baseApi } from "@/app/api/baseApi";
import type { MoviesResponse } from "@/common/types";

type MoviesParams = {
  page: number;
};

export type MovieCategory = "popular" | "top-rated" | "upcoming" | "now-playing";

type MoviesByCategoryParams = MoviesParams & {
  category: MovieCategory;
};

const categoryEndpoints: Record<MovieCategory, string> = {
  popular: "/movie/popular",
  "top-rated": "/movie/top_rated",
  upcoming: "/movie/upcoming",
  "now-playing": "/movie/now_playing",
};

export const categoryMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchMoviesByCategory: build.query<MoviesResponse, MoviesByCategoryParams>({
        query: ({ category, page }) => ({
            url: categoryEndpoints[category],
            params: {
                page,
            },
        }),
    }),
  }),
});

export const { useFetchMoviesByCategoryQuery } = categoryMoviesApi;
