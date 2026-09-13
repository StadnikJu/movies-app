import { Box, Slider, Typography } from "@mui/material";

type Props = {
    minRating: number;
    maxRating: number;
    setMinRating: (value: number) => void;
    setMaxRating: (value: number) => void;
    setPage: (page: number) => void;
}

export const RatingSide = ({minRating, maxRating, setMinRating, setMaxRating, setPage}: Props) => {
    return (
        <Box>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1}}>
            <Typography sx={{color: "#c0c0c0", fontSize: "1rem", fontWeight: 600}}>
                Rating
            </Typography>
            <Typography sx={{ color: "#c0c0c0", fontSize: "1rem", fontWeight: 600}}>
                {minRating.toFixed(1)} - {maxRating.toFixed(1)}
            </Typography>
            </Box>


            <Slider value={[minRating, maxRating]} 
                onChange={(_, newValue) => {
                const value = newValue as number[];
                setMinRating(value[0]);
                setMaxRating(value[1]);
                setPage(1);
                }}
            min={0}
            max={10}
            step={0.1}
            valueLabelDisplay="auto"
            sx={{ color: "primary.main", "& .MuiSlider-thumb": {width: 14, height: 14}}}
            />
        </Box>
    )
}