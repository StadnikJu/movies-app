import { Grid, Skeleton } from "@mui/material"

export const MovieInfoSkeleton = () => {
    return (
        <Grid size={{ xs: 12, md: 8 }}>
            <Skeleton variant="text" animation="wave" sx={{width: "80%", height: 60}}/>
            <Skeleton variant="text" animation="wave" sx={{width: "40%", height: 35,mb: 2}}/>
            <Skeleton variant="rectangular" animation="wave" sx={{width: "100%", height: 120,mb: 2, borderRadius: 2}}/>
            <Skeleton variant="text" animation="wave" sx={{width: "90%", height: 25}}/>
            <Skeleton variant="text" animation="wave" sx={{width: "70%", height: 25}}/>
            <Skeleton variant="text" animation="wave" sx={{width: "80%", height: 25}}/>
        </Grid>
    )
}
