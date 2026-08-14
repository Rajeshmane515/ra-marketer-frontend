import React from "react";

import { Box, Button, CircularProgress, Typography } from "@mui/material";

import { Download, Eye } from "lucide-react";

const AdminStatCard = ({
  icon: Icon,
  title,
  description,
  count,
  loading = false,
  color = "#2563FF",
  hoverColor = "#1D4ED8",
  buttonText = "View",
  onView,
  onDownload,
}) => {
  return (
    <Box
      sx={{
        background: "#111827",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        p: {
          xs: 3,
          sm: 4,
        },
      }}
    >
      {/* Card Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "10px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background: `${color}1F`,
            color,
          }}
        >
          {Icon && <Icon size={22} />}
        </Box>

        {/* Title + Description */}
        <Box>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: "#9CA3AF",
              fontSize: "13px",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>

      {/* Count */}
      <Typography
        sx={{
          fontSize: "42px",
          fontWeight: 700,
          color: "#FFFFFF",
          mb: 3,
        }}
      >
        {loading ? (
          <CircularProgress
            size={28}
            sx={{
              color,
            }}
          />
        ) : (
          count
        )}
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        {/* View Button */}
        <Button
          onClick={onView}
          startIcon={<Eye size={17} />}
          variant="contained"
          sx={{
            background: color,

            color: color === "#F472B6" ? "#111827" : "#FFFFFF",

            borderRadius: "9px",
            textTransform: "none",

            fontWeight: color === "#F472B6" ? 600 : 500,

            "&:hover": {
              background: hoverColor,
            },
          }}
        >
          {buttonText}
        </Button>

        {/* Download Button */}
        <Button
          onClick={onDownload}
          startIcon={<Download size={17} />}
          sx={{
            color: "#D1D5DB",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "9px",
            textTransform: "none",

            "&:hover": {
              background: "rgba(255,255,255,0.05)",
            },
          }}
        >
          Download CSV
        </Button>
      </Box>
    </Box>
  );
};

export default AdminStatCard;
