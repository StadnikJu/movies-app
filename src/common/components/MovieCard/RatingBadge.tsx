import { Box } from "@mui/material";

type Props = {
   rating: number;
};

export const RatingBadge = ({ rating }: Props) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 8) {
      return "#0ed32ff0";
    }

    if (rating >= 5) {
      return "#f4d50eef";
    }

    return "red";
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 12,
        right: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
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
