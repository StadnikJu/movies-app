import type { FavoriteMovie } from "../types/favoriteMovie.types";

const FAVORITES_KEY = "favorites";

export const getFavorites = (): FavoriteMovie[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (movie: FavoriteMovie): void => {
  const favorites = getFavorites();

  const updatedFavorites = [...favorites, movie];

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );
};

export const removeFavorite = (movieId: number): void => {
  const favorites = getFavorites();

  const updatedFavorites = favorites.filter(
    (movie) => movie.id !== movieId
  );

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );
};