import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Save JWT token
      localStorage.setItem("adminToken", data.token);

      // Save admin information
      localStorage.setItem("admin", JSON.stringify(data.admin));

      // Go to dashboard
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to server");
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
      <Box
        sx={{
          width: "100%",
          maxWidth: "420px",
          background: "#111827",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: { xs: 3, sm: 4 },
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
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
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={18} color="#9CA3AF" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#9CA3AF",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#2563FF",
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
                  borderColor: "#2563FF",
                },
              },
            }}
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
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      sx={{ color: "#9CA3AF" }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#9CA3AF",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#2563FF",
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
                  borderColor: "#2563FF",
                },
              },
            }}
          />

          {/* Login Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
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
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
