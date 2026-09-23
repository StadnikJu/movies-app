import { z } from "zod";

export const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const moviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(movieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const genresResponseSchema = z.object({
  genres: z.array(genreSchema),
});

export const movieDetailsSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  release_date: z.string(),
  vote_average: z.number(),
  overview: z.string(),
  runtime: z.number().nullable(),
  genres: z.array(genreSchema),
});

export const movieCastMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
});

export const movieCreditsResponseSchema = z.object({
  id: z.number(),
  cast: z.array(movieCastMemberSchema),
});