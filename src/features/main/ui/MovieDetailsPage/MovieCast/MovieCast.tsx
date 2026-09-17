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

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, minmax(0, 1fr))", md: "repeat(6, minmax(0, 1fr))" }, gap: { xs: 2, md: 3 } }}>
        {cast.slice(0, 6).map((actor) => (
          <Box key={actor.id} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://placehold.co/120x120?text=No+Photo"}
              alt={actor.name}
              sx={{
                width: "100%",
                maxWidth: 200,
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "50%",
                mx: "auto",
              }}
            />

            <Typography sx={{ fontWeight: 900, mt: 1, color: "white", fontSize: { xs: "0.9rem", sm: "1rem" } }}>{actor.name}</Typography>
            <Typography sx={{ fontWeight: 300, mt: 1, color: "text.secondary", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>{actor.character}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
