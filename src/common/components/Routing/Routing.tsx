import { Main } from "@/features/main/ui/Main";
import { Navigate, Route, Routes } from "react-router";
import { FilteredMovies } from "@/features/filteredMovies/FilteredMovies";
import { Search } from "@/features/search/ui/Search";
import { Favorites } from "@/features/favorites/ui/Favorites";
import { CategoryMovies } from "@/features/categoryMovies/ui/CategoryMovies";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { MovieDetailsPage } from "@/features/main/ui/MovieDetailsPage/MovieDetailsPage";

export const Path = {
  Main: "/",
  CategoryMovies: "/category-movies",
  Category: "/category/:category",
  Movie: "/movie/:movieId",
  FilteredMovies: "/filtered-movies",
  Search: "/search",
  Favorites: "/favorites",
  NotFound: "*",
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<Main />} />
    <Route path="/category-movies" element={<Navigate to="/category/popular" replace/>}/>
    <Route path="/category/:category" element={<CategoryMovies />}/>
    <Route path="/movie/:movieId" element={<MovieDetailsPage />}/>
    <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
    <Route path={Path.Search} element={<Search />} />
    <Route path={Path.Favorites} element={<Favorites />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
);
