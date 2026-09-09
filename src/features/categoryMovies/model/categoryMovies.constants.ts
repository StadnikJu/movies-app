import type { MovieCategory } from "../api/categoryMoviesApi.types";

export const categoryButtons: {id: MovieCategory; title: string}[] = [
  { id: "popular", title: "Popular Movies" },
  { id: "top-rated", title: "Top Rated Movies" },
  { id: "upcoming", title: "Upcoming Movies" },
  { id: "now-playing", title: "Now Playing Movies" },
];