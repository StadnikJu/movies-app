import { Box } from "@mui/material";

type Props = {
  rating: number;
  variant?: "details" | "card";
};

export const RatingBadge = ({ rating, variant }: Props) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 8) {
      return "#0ed32ff0";
    }

    if (rating >= 5) {
      return "#f4d50eef";
    }

    return "red";
  };

  if (variant === "card") {
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: {xs: 8,sm: 10,md: 12},
          right: {xs: 8, sm: 10,md: 12},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: {xs: 32,sm: 36, md: 40},
          height: {xs: 32,sm: 36,md: 40},
          borderRadius: "50%",
          backgroundColor: getRatingColor(rating),
          color: "#fff",
          fontSize: {xs: "0.8rem",sm: "0.9rem",md: "1rem"},
          fontWeight: 700,
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        {rating.toFixed(1)}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: getRatingColor(rating),
        color: "#fff",
        fontSize: "1rem",
        fontWeight: 700,
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      {rating.toFixed(1)}
    </Box>
  );
};
