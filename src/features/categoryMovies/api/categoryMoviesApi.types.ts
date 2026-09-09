export type MoviesParams = {
  page: number;
};

export type MovieCategory = "popular" | "top-rated" | "upcoming" | "now-playing";

export type MoviesByCategoryParams = MoviesParams & {
  category: MovieCategory;
};