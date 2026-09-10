import type { Movie } from "./movie.types";

export type FavoriteMovie = Pick<Movie, "id" | "title" | "poster_path" | "vote_average">;

