import React from "react";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { ArrowLeft, Search } from "lucide-react";

import { useNavigate } from "react-router-dom";

const AdminPageHeader = ({
  title,
  count,
  countLabel = "submissions",
  icon: Icon,
  iconColor = "#60A5FA",
  search,
  setSearch,
  searchPlaceholder = "Search...",
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: {
          xs: "flex-start",
          sm: "center",
        },
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        gap: 2,
        mb: 4,
      }}
    >
      <Box>
        <Button
          onClick={() => navigate("/admin/dashboard")}
          startIcon={<ArrowLeft size={17} />}
          sx={{
            color: "#9CA3AF",
            textTransform: "none",
            mb: 1,
            px: 0,

            "&:hover": {
              background: "transparent",
              color: "#FFFFFF",
            },
          }}
        >
          Back to Dashboard
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {Icon && <Icon size={26} color={iconColor} />}

          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "30px",
              },
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 0.5,
            color: "#9CA3AF",
            fontSize: "14px",
          }}
        >
          {count} total {countLabel}
        </Typography>
      </Box>

      {setSearch && (
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={searchPlaceholder}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={18} color="#9CA3AF" />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
            },

            "& .MuiOutlinedInput-root": {
              color: "#FFFFFF",

              "& fieldset": {
                borderColor: "rgba(255,255,255,0.12)",
              },

              "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.25)",
              },

              "&.Mui-focused fieldset": {
                borderColor: iconColor,
              },
            },

            "& input::placeholder": {
              color: "#6B7280",
              opacity: 1,
            },
          }}
        />
      )}
    </Box>
  );
};

export default AdminPageHeader;
