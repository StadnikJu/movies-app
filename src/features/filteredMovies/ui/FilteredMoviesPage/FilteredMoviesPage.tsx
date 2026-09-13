import { Box } from "@mui/material";
import { FormSide } from "./FormControl/FormSide";
import { useState } from "react";
import { FilteredMovies } from "./FilteredMovies/FilteredMovies";

export const FilteredMoviesPage = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(10);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleReset = () => {
    setSortBy("popularity.desc");
    setMinRating(0);
    setMaxRating(10);
    setSelectedGenres([]);
    setPage(1);
  };

  return (
    <Box sx={{display: "grid", gridTemplateColumns: { xs: "1fr", md: "280px 1fr" }, gap: 4, maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 }}}>
      <FormSide
        sortBy={sortBy}
        setSortBy={setSortBy}
        setPage={setPage}
        minRating={minRating}
        maxRating={maxRating}
        setMinRating={setMinRating}
        setMaxRating={setMaxRating}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        handleReset={handleReset}
      />
      <FilteredMovies sortBy={sortBy} setPage={setPage} page={page}  minRating={minRating} maxRating={maxRating} selectedGenres={selectedGenres}/>
    </Box>
  );
};
