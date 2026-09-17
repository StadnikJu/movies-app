import { MovieSearch } from "../../main/ui/WelcomeSection/MovieSearch/MovieSearch";
import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import { SearchResults } from "./SearchResults";
import { MainPagination } from "@/common/components";
import { useSearchMoviesQuery } from "../api/searchApi";
import { useLocation } from "react-router";
import { SearchMoviesSkeleton } from "./SearchMoviesSkeleton/SearchMoviesSkeleton";

export const Search = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const query =  (location.state as { query?: string } | null)?.query ?? "";
  const { data, isLoading } = useSearchMoviesQuery({ query, page });

  return (
    <Container maxWidth="lg" disableGutters sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 4 }}>
        <Typography variant="h4" component="h3" sx={{ fontWeight: 600, color: "text.primary", fontSize: { xs: "2rem", sm: "2.5rem" } }}>
          Search Results
        </Typography>
        <MovieSearch initialQuery={query} />
        {query.trim() && (
          <Typography variant="h5" component="h4" sx={{ fontWeight: 600, color: "text.primary", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
            Results for "{query}"
          </Typography>
        )}

        {!query.trim() ? (
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Enter a movie title to start searching
          </Typography>
        ) : data?.results?.length === 0 ? (
          <Typography variant="h6" sx={{ color: "white" }}>
            No matches found for "{query}"
          </Typography>
        ) : (
          <>
            {isLoading ? <SearchMoviesSkeleton/> : <SearchResults movies={data?.results ?? []}/>}
            <MainPagination page={page} totalPages={data?.total_pages ?? 0} onPageChange={setPage} />
          </>
        )}
      </Box>
    </Container>
  );
};
