import { Box, Pagination } from "@mui/material";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const MainPagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
        mb: 2,
        width: "100%",
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        color="primary"
        shape="rounded"
        onChange={(_, value) => onPageChange(value)}
        siblingCount={0}
        boundaryCount={1}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "text.primary",
            fontWeight: 500,
          },
          "& .Mui-selected": {
            backgroundColor: "primary.main",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          },
        }}
      />
    </Box>
  );
};
