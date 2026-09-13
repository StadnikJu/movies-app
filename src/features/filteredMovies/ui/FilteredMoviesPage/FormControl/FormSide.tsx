import { Box, Typography } from "@mui/material";
import { GenresSide } from "./GenresSide/GenresSide";
import { RatingSide } from "./RatingSide/RatingSide";
import { SortSide } from "./SortSide/SortSide";
import { ResetBtn } from "./Reset/ResetBtn";

type Props = {
  sortBy: string;
  setSortBy: (value: string) => void;
  setPage: (page: number) => void;
  minRating: number;
  maxRating: number;
  setMinRating: (value: number) => void;
  setMaxRating: (value: number) => void;
  selectedGenres: number[];
  setSelectedGenres: (genres: number[]) => void;
  handleReset: () => void;
};

export const FormSide = ({ sortBy, setSortBy, setPage, minRating, maxRating, setMinRating, setMaxRating, selectedGenres, setSelectedGenres, handleReset}: Props) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 900, fontSize: "1.8rem", color: "#fff" }}>
        Filters / Sort
      </Typography>
      <SortSide sortBy={sortBy} setSortBy={setSortBy} setPage={setPage} />
      <RatingSide minRating={minRating} maxRating={maxRating} setMinRating={setMinRating} setMaxRating={setMaxRating} setPage={setPage}/>
      <GenresSide selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setPage={setPage}/>
      <ResetBtn handleReset={handleReset}/>
    </Box>
  );
};
