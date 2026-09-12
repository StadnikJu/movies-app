import type { MovieCastMember } from "@/common/types";
import { Box, Typography } from "@mui/material";

type Props = {
  cast: MovieCastMember[];
};

export const MovieCast = ({ cast }: Props) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        Cast
      </Typography>

      <Box sx={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 2}}>
        {cast.slice(0, 6).map((actor) => (
          <Box key={actor.id} sx={{textAlign: "center"}}>
            <Box
              component="img"
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://placehold.co/120x120?text=No+Photo"}
              alt={actor.name}
              sx={{
                width: 200,
                height: 200,
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />

            <Typography sx={{ fontWeight: 900, mt: 1, color: "white" }}>{actor.name}</Typography>
            <Typography sx={{ fontWeight: 300, mt: 1, color: "text.secondary" }}>{actor.character}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
