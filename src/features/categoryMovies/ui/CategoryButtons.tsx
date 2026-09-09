import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { categoryButtons } from "../model/categoryMovies.constants";

export const CategoryButtons = () => {
    const navigate = useNavigate();
    const { category } = useParams();

    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 5, flexWrap: "wrap", width: "100%" }}>
            {categoryButtons.map((btn) => {
                const isActive = category === btn.id;
                return (
                <Button
                    key={btn.id}
                    onClick={() => navigate(`/category/${btn.id}`)}
                    sx={{
                    borderRadius: "30px",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    padding: "8px 20px",
                    border: "none",
                    backgroundColor: isActive ? "#2563eb" : "rgba(255, 255, 255, 0.05)",
                    color: isActive ? "#ffffff" : "text.secondary",
                    "&:hover": {
                        backgroundColor: isActive ? "#1d4ed8" : "rgba(255, 255, 255, 0.1)",
                        border: "none",
                    },
                    "&.MuiButton-root": {
                        border: "none",
                    },
                    }}
                >   
                    {btn.title}
                </Button>
                );
            })}
        </Box>
    );
};
