import { useFetchGenresQuery } from "@/features/filteredMovies/api/filteredMoviesApi";
import { Box, Typography } from "@mui/material";

type Props = {
    selectedGenres: number[];
    setSelectedGenres: (genres: number[]) => void;
    setPage: (page: number) => void;
}

export const GenresSide = ({selectedGenres, setSelectedGenres, setPage}: Props) => {
    const { data: genres } = useFetchGenresQuery();

    const handleGenreClick = (genreId: number) => {
        if (selectedGenres.includes(genreId)) {
            setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
        } else {
            setSelectedGenres([...selectedGenres, genreId]);
        }
        setPage(1);
    };

    return (
        <Box>
            <Box sx={{display: "flex", flexWrap: "wrap", gap: 1.2}}>
                {genres?.genres.map((genre) => (
                    <Typography key={genre.id}
                        onClick={() => handleGenreClick(genre.id)}
                        sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        padding: "6px 14px", 
                        borderRadius: "20px", 
                        border: "1px solid rgba(255, 255, 255, 0.15)",  
                        cursor: "pointer",
                        userSelect: "none",
                        transition: "all 0.2s ease-in-out",
                        backgroundColor: selectedGenres.includes(genre.id)
                            ? "primary.main"
                            : "#202b41",
                        "&:hover": {
                            backgroundColor: "rgba(62, 60, 60, 0.08)",
                            borderColor: "primary.main",
                            color: "#fff",
                        },
                        }}
                    >
                        {genre.name}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};
