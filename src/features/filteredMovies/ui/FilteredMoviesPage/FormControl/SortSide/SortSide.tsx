import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";

type Props = {
  sortBy: string;
  setSortBy: (value: string) => void;
  setPage: (page: number) => void;
};

const sortOptions = [
  { label: "Popularity ↓", value: "popularity.desc" },
  { label: "Popularity ↑", value: "popularity.asc" },
  { label: "Rating ↓", value: "vote_average.desc" },
  { label: "Rating ↑", value: "vote_average.asc" },
  { label: "Release date ↓", value: "primary_release_date.desc" },
  { label: "Release date ↑", value: "primary_release_date.asc" },
  { label: "Title A-Z", value: "title.asc" },
  { label: "Title Z-A", value: "title.desc" },
];

export const SortSide = ({sortBy, setSortBy, setPage}: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography sx={{ color: "#fff", fontSize: "1rem", fontWeight: 600 }}>Sort by</Typography>

      <FormControl sx={{ width: "220px" }}>
        <Select value={sortBy} onChange={(event) => {setSortBy(String(event.target.value)); setPage(1)}}
          sx={{
            borderRadius: "6px",
            height: "40px",
            color: "#fff",
            backgroundColor: "#202b41",

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },

            "& .MuiSvgIcon-root": {
              color: "rgba(255, 255, 255, 0.7)",
            },
          }}
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          v
        </Select>
      </FormControl>
    </Box>
  );
};
