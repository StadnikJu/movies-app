import { Main } from "@/features/main/ui/Main";
import { Route, Routes } from "react-router";
import { PageNotFound } from "../PageNotFound /PageNotFound";
import { CategoryMovies } from "@/features/categoryMovies/categoryMovies";
import { FilteredMovies } from "@/features/filteredMovies/FilteredMovies";
import { Search } from "@mui/icons-material";
import { Favorites } from "@/features/favorites/Favorites";

export const Path = {
  Main: "/",
  CategoryMovies: "/category-movies",
  FilteredMovies: "/filtered-movies",
  Search: "/search",
  Favorites: "/favorites",
  NotFound: "*",
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<Main />} />
    <Route path={Path.CategoryMovies} element={<CategoryMovies />} />
    <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
    <Route path={Path.Search} element={<Search />} />
    <Route path={Path.Favorites} element={<Favorites />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
);
