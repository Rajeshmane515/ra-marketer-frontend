import React from "react";

import { Box, Button, Typography } from "@mui/material";

const AdminPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  activeColor = "#2563FF",
  activeHoverColor = "#1D4ED8",
  startIndex = 0,
  pageSize = 20,
  totalItems = 0,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const startItem = startIndex + 1;

  const endItem = Math.min(startIndex + pageSize, totalItems);

  return (
    <>
      {/* Pagination Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          mt: 3,
          flexWrap: "wrap",
        }}
      >
        {/* Previous */}
        <Button
          disabled={currentPage === 1}
          onClick={() => onPageChange((page) => page - 1)}
          sx={{
            color: "#9CA3AF",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            textTransform: "none",

            "&:hover": {
              background: "rgba(255,255,255,0.05)",
            },

            "&.Mui-disabled": {
              color: "#374151",
              borderColor: "rgba(255,255,255,0.05)",
            },
          }}
        >
          Previous
        </Button>

        {/* Page Numbers */}
        {Array.from(
          {
            length: totalPages,
          },
          (_, index) => index + 1,
        ).map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            sx={{
              minWidth: "40px",

              color: currentPage === page ? "#FFFFFF" : "#9CA3AF",

              background: currentPage === page ? activeColor : "transparent",

              borderRadius: "8px",

              "&:hover": {
                background:
                  currentPage === page
                    ? activeHoverColor
                    : "rgba(255,255,255,0.05)",
              },
            }}
          >
            {page}
          </Button>
        ))}

        {/* Next */}
        <Button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange((page) => page + 1)}
          sx={{
            color: "#9CA3AF",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            textTransform: "none",

            "&:hover": {
              background: "rgba(255,255,255,0.05)",
            },

            "&.Mui-disabled": {
              color: "#374151",
              borderColor: "rgba(255,255,255,0.05)",
            },
          }}
        >
          Next
        </Button>
      </Box>

      {/* Result Information */}
      {totalItems > 0 && (
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            color: "#6B7280",
            fontSize: "13px",
          }}
        >
          Showing {startItem}–{endItem} of {totalItems}
        </Typography>
      )}
    </>
  );
};

export default AdminPagination;
