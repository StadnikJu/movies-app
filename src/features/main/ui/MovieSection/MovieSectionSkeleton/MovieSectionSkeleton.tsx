import { Box, Skeleton } from "@mui/material"

export const MovieSectionSkeleton = () => {
    return (
        Array.from({ length: 6 }).map((_, index) => (
            <Box key={index}>
                <Skeleton variant="rectangular" animation="wave" sx={{width: "100%",  height: 300, borderRadius: 2, backgroundColor: "rgba(87, 86, 86, 0.972)"}}/>
                <Skeleton variant="text" animation="wave" sx={{width: "80%",height: 28, mt: 1}}/>
                <Skeleton variant="text" animation="wave" sx={{width: "50%",height: 24}}/>
            </Box>
        ))
    )
}