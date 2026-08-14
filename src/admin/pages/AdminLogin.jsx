import React, { useState } from "react";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /*
   * Handle input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * Handle login
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      /*
       * Login failed
       */
      if (!response.ok) {
        alert(data.message || "Login failed");

        return;
      }

      /*
       * Save JWT token
       */
      localStorage.setItem("adminToken", data.token);

      /*
       * Save admin information
       */
      localStorage.setItem("admin", JSON.stringify(data.admin));

      /*
       * Redirect to dashboard
       */
      navigate("/admin/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Login error:", error);

      alert("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        background: "#0B0F19",

        px: 2,
      }}
    >
      {/* Login Card */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "420px",

          background: "#111827",

          border: "1px solid rgba(255,255,255,0.08)",

          borderRadius: "16px",

          padding: {
            xs: 3,
            sm: 4,
          },

          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,

              color: "#FFFFFF",

              mb: 1,
            }}
          >
            Admin Login
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#9CA3AF",
            }}
          >
            Sign in to access the RA Marketer dashboard
          </Typography>
        </Box>

        {/* Login Form */}
        <Box component="form" onSubmit={handleSubmit}>
          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
            autoComplete="email"
            disabled={loading}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={18} color="#9CA3AF" />
                  </InputAdornment>
                ),
              },
            }}
            sx={textFieldStyles}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            required
            margin="normal"
            autoComplete="current-password"
            disabled={loading}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock size={18} color="#9CA3AF" />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      disabled={loading}
                      sx={{
                        color: "#9CA3AF",

                        "&:hover": {
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={textFieldStyles}
          />

          {/* Login Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,

              py: 1.4,

              borderRadius: "10px",

              background: "#2563FF",

              textTransform: "none",

              fontSize: "15px",

              fontWeight: 600,

              "&:hover": {
                background: "#1D4ED8",
              },

              "&.Mui-disabled": {
                background: "rgba(37,99,255,0.5)",

                color: "rgba(255,255,255,0.7)",
              },
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

/*
 * Shared TextField styling
 *
 * Kept inside this component because
 * it is only needed by the login page.
 */
const textFieldStyles = {
  "& .MuiInputLabel-root": {
    color: "#9CA3AF",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#2563FF",
  },

  "& .MuiOutlinedInput-root": {
    color: "#FFFFFF",
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #111827 inset",
      WebkitTextFillColor: "#FFFFFF",
    },

    "& fieldset": {
      borderColor: "rgba(255,255,255,0.12)",
    },

    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.25)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#2563FF",
    },

    "&.Mui-disabled": {
      color: "rgba(255,255,255,0.5)",
    },
  },
};

export default AdminLogin;
