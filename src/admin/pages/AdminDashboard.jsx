import React, { useEffect, useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { Users, Mail, LogOut, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [contactCount, setContactCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }

    fetchCounts();
  }, [navigate, token]);

  const fetchCounts = async () => {
    try {
      setLoading(true);

      const [contactsResponse, newslettersResponse] = await Promise.all([
        fetch(`${API_URL}/api/admin/contacts/count`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),

        fetch(`${API_URL}/api/admin/newsletters/count`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      if (
        contactsResponse.status === 401 ||
        newslettersResponse.status === 401
      ) {
        handleLogout();
        return;
      }

      const contactsData = await contactsResponse.json();
      const newslettersData = await newslettersResponse.json();

      if (contactsData.success) {
        setContactCount(contactsData.count);
      }

      if (newslettersData.success) {
        setNewsletterCount(newslettersData.count);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin");
  };

  const handleViewContacts = () => {
    navigate("/admin/dashboard/contacts");
  };

  const handleViewNewsletters = () => {
    navigate("/admin/dashboard/newsletters");
  };

  const handleDownloadCSV = async (type) => {
    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin");
        return;
      }

      const endpoint =
        type === "contacts"
          ? `${API_URL}/api/admin/contacts/export`
          : `${API_URL}/api/admin/newsletters/export`;

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");

        navigate("/admin");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to download CSV");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download =
        type === "contacts" ? "contacts.csv" : "newsletter-subscribers.csv";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CSV Download Error:", error);

      alert("Failed to download CSV");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0B0F19",
        color: "#FFFFFF",
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 5,
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "30px" },
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Admin Dashboard
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              color: "#9CA3AF",
              fontSize: "14px",
            }}
          >
            Manage your website submissions
          </Typography>
        </Box>

        <Button
          onClick={handleLogout}
          startIcon={<LogOut size={17} />}
          sx={{
            color: "#D1D5DB",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "9px",
            px: 2,
            textTransform: "none",
            "&:hover": {
              background: "rgba(255,255,255,0.05)",
            },
          }}
        >
          Logout
        </Button>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        {/* Contacts Card */}
        <Box
          sx={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            p: { xs: 3, sm: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(37,99,255,0.12)",
                color: "#60A5FA",
              }}
            >
              <Users size={22} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                Contact Submissions
              </Typography>

              <Typography
                sx={{
                  color: "#9CA3AF",
                  fontSize: "13px",
                }}
              >
                People who contacted you
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#FFFFFF",
              mb: 3,
            }}
          >
            {loading ? (
              <CircularProgress size={28} sx={{ color: "#2563FF" }} />
            ) : (
              contactCount
            )}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            <Button
              onClick={handleViewContacts}
              startIcon={<Eye size={17} />}
              variant="contained"
              sx={{
                background: "#2563FF",
                borderRadius: "9px",
                textTransform: "none",
                "&:hover": {
                  background: "#1D4ED8",
                },
              }}
            >
              View Contacts
            </Button>

            <Button
              onClick={() => handleDownloadCSV("contacts")}
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

        {/* Newsletter Card */}
        <Box
          sx={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            p: { xs: 3, sm: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(244,114,182,0.12)",
                color: "#F472B6",
              }}
            >
              <Mail size={22} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                Newsletter Subscribers
              </Typography>

              <Typography
                sx={{
                  color: "#9CA3AF",
                  fontSize: "13px",
                }}
              >
                People subscribed to your newsletter
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#FFFFFF",
              mb: 3,
            }}
          >
            {loading ? (
              <CircularProgress size={28} sx={{ color: "#F472B6" }} />
            ) : (
              newsletterCount
            )}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            <Button
              onClick={handleViewNewsletters}
              startIcon={<Eye size={17} />}
              variant="contained"
              sx={{
                background: "#F472B6",
                color: "#111827",
                borderRadius: "9px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  background: "#EC4899",
                },
              }}
            >
              View Subscribers
            </Button>

            <Button
              onClick={() => handleDownloadCSV("newsletters")}
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
      </Box>
    </Box>
  );
};

export default AdminDashboard;
