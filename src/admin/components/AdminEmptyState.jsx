import React from "react";

import { Box, Typography } from "@mui/material";

const AdminEmptyState = ({ icon: Icon, message, minHeight = 250 }) => {
  return (
    <Box
      sx={{
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {Icon && <Icon size={35} color="#4B5563" />}

      <Typography
        sx={{
          color: "#9CA3AF",
          textAlign: "center",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default AdminEmptyState;
