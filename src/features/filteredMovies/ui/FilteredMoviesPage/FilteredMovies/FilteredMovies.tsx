import { MainPagination, MovieCard } from "@/common/components";
import { useDebounce } from "@/common/hooks";
import { useFetchFilteredMoviesQuery } from "@/features/filteredMovies/api/filteredMoviesApi";
import { Box } from "@mui/material";
import { FilteredMoviesSkeleton } from "./FilteredMoviesSkeleton/FilteredMoviesSkeleton";

type Props = {
  sortBy: string;
  setPage: (page: number) => void;
  page: number;
  minRating: number;
  maxRating: number;
  selectedGenres: number[];
};

export const FilteredMovies = ({ sortBy, setPage, page, minRating, maxRating, selectedGenres }: Props) => {
    const debouncedMinRating = useDebounce(minRating, 200);
    const debouncedMaxRating = useDebounce(maxRating, 200);
    const { data, isLoading, isFetching } = useFetchFilteredMoviesQuery({
      page,
      sort_by: sortBy,
      "vote_average.gte": debouncedMinRating,
      "vote_average.lte": debouncedMaxRating,
      with_genres: selectedGenres.join(","),
    });

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
          gap: 3,
        }}
      >
        {isLoading || isFetching ? (
          <FilteredMoviesSkeleton />
        ) : (
          data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
          ))
        )}
        
      </Box>
      <MainPagination page={page} totalPages={data?.total_pages ?? 1} onPageChange={setPage} />
    </Box>
  );
};
