import { selectThemeMode } from "@/app/model/app-slice";
import { useAppSelector } from "@/common/hooks";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const MovieSearch = () => {
    const themeMode = useAppSelector(selectThemeMode);
    const [query, setQuery] = useState("");

    return (
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", maxWidth: "600px" }}>
        <TextField
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie"
            variant="outlined"
            sx={{
            backgroundColor: themeMode === "dark" ? "background.paper" : "#ffffff",
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": {
                padding: "14px 24px",
                fontSize: "1rem",
                color: "text.primary",
            },
            "& .MuiInputBase-input::placeholder": {
                color: "text.primary",
                opacity: 0.6,
            },
            }}
        />
        <Button
            variant="contained"
            disabled={!query.trim()}
            color="primary"
            sx={{
                borderRadius: "30px",
                padding: "14px 32px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 800,
                boxShadow: "none",
                whiteSpace: "nowrap",
                "&:hover": { boxShadow: "none" },
                "&.Mui-disabled": {
                    backgroundColor: "primary.main",
                    color: "#fff",
                    opacity: 0.5
                },
            }}
        >
            Search
        </Button>
        </Box>
  );
};
