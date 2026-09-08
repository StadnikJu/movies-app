import { selectThemeMode } from "@/app/model/app-slice";
import { useAppSelector } from "@/common/hooks";
import { Box, Button, TextField } from "@mui/material";

export const MovieSearch = () => {
    const themeMode = useAppSelector(selectThemeMode);
    return (
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", maxWidth: "600px" }}>
        <TextField
            fullWidth
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
            color="primary"
            sx={{
            borderRadius: "30px",
            padding: "14px 32px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 500,
            boxShadow: "none",
            whiteSpace: "nowrap",
            "&:hover": { boxShadow: "none" },
            }}
        >
            Search
        </Button>
        </Box>
  );
};
