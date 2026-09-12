export type Movie = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type MovieDetails = {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  overview: string;
  runtime: number | null;
  genres: {
    id: number;
    name: string;
  }[];
};

export type MovieCastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type MovieCreditsResponse = {
  id: number;
  cast: MovieCastMember[];
};

export type MoviesResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
