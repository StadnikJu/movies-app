import { Box, Typography, Chip, Button, Grid } from "@mui/material";
import { RatingBadge } from "@/common/components/MovieCard/RatingBadge";
import { useNavigate } from "react-router";
import type { MovieDetails } from "@/common/types";

type Props = {
    data: MovieDetails | undefined;
}

export const MovieInfo = ({data}: Props) => {
    const navigate = useNavigate();

    return (
        <Grid size={{ xs: 12, md: 8 }} sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, mb: 2, gap: 2 }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: 900, fontSize: { xs: "20px", md: "32px" }, mb: { xs: 0, sm: 2 } }}>
            {data?.title}
            </Typography>
            <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{
                borderRadius: "20px",
                textTransform: "none",
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.875rem",
                px: 2.5,
                py: 0.5,
                minWidth: "auto",
                "&:hover": {
                borderColor: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#fff",
                },
            }}
            >
            Back
            </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, gap: 2, mb: 4 }}>
            <RatingBadge rating={data?.vote_average ?? 0} variant="details" />
            <Typography variant="body1" color="text.secondary" sx={{ display: "flex", flexWrap: "wrap", gap: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            <span>
                Release year: <strong>{data?.release_date?.split("-")[0] || "N/A"}</strong>
            </span>
            <span>
                Runtime: <strong>{data?.runtime ? `${data.runtime} min` : "N/A"}</strong>
            </span>
            </Typography>
        </Box>

        <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, lineHeight: 1.6, color: "text.secondary", mb: 4, maxWidth: 700 }}
        >
            {data?.overview || "No description available."}
        </Typography>

        {data?.genres && data.genres.length > 0 && (
            <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.2rem" }}>
                Genres
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {data.genres.map((genre) => (
                <Chip
                    key={genre.id}
                    label={genre.name}
                    variant="filled"
                    sx={{
                    borderRadius: "16px",
                    fontWeight: 500,
                    backgroundColor: "action.selected",
                    }}
                />
                ))}
            </Box>
            </Box>
        )}
        </Grid>
    );
};
