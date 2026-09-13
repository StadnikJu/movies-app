import { Button } from "@mui/material";

type Props = {
    handleReset: () => void;
}

export const ResetBtn = ({handleReset}: Props) => {
    return (
        <Button
            onClick={() => handleReset()}
            sx={{
            width: "150px",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "1rem",
            backgroundColor: "rgba(16, 77, 233, 0.939)",
            color: "#fff",
            fontWeight: 700,

            "&:hover": {
                backgroundColor: "rgb(0, 57, 171)",
            },
            }}
        >
            Reset filters
        </Button>
        )
}