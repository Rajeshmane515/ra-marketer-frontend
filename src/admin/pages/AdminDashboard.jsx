import React, { useEffect, useState } from "react";

import { Box, Button, Typography } from "@mui/material";

import { LogOut, Mail, Users } from "lucide-react";

import { useNavigate } from "react-router-dom";

import AdminStatCard from "../components/AdminStatCard";

import useAdminAuth from "../hooks/useAdminAuth";

import { adminDownload, adminGet } from "../services/adminApi";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const { logout, handleUnauthorized } = useAdminAuth();

  const [contactCount, setContactCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [loading, setLoading] = useState(true);

  /*
   * Fetch dashboard counts
   */
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);

        const [contactsResponse, newslettersResponse] = await Promise.all([
          adminGet("/api/admin/contacts/count"),
          adminGet("/api/admin/newsletters/count"),
        ]);

        const contactsData = await contactsResponse.json();

        const newslettersData = await newslettersResponse.json();

        if (contactsData.success) {
          setContactCount(contactsData.count);
        }

        if (newslettersData.success) {
          setNewsletterCount(newslettersData.count);
        }
      } catch (error) {
        if (error.message === "ADMIN_UNAUTHORIZED") {
          handleUnauthorized();
          return;
        }

        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, [handleUnauthorized]);

  /*
   * View contacts
   */
  const handleViewContacts = () => {
    navigate("/admin/dashboard/contacts");
  };

  /*
   * View newsletters
   */
  const handleViewNewsletters = () => {
    navigate("/admin/dashboard/newsletters");
  };

  /*
   * Download CSV
   */
  const handleDownloadCSV = async (type) => {
    try {
      const endpoint =
        type === "contacts"
          ? "/api/admin/contacts/export"
          : "/api/admin/newsletters/export";

      const filename =
        type === "contacts" ? "contacts.csv" : "newsletter-subscribers.csv";

      const blob = await adminDownload(endpoint);

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = filename;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      if (error.message === "ADMIN_UNAUTHORIZED") {
        handleUnauthorized();
        return;
      }

      console.error("CSV Download Error:", error);

      alert("Failed to download CSV");
    }
  };

  /*
   * Logout
   */
  const handleLogout = () => {
    logout();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0B0F19",
        color: "#FFFFFF",

        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },

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
        {/* Title */}
        <Box>
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

        {/* Logout */}
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

      {/* Dashboard Cards */}
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
        <AdminStatCard
          icon={Users}
          title="Contact Submissions"
          description="People who contacted you"
          count={contactCount}
          loading={loading}
          color="#2563FF"
          hoverColor="#1D4ED8"
          buttonText="View Contacts"
          onView={handleViewContacts}
          onDownload={() => handleDownloadCSV("contacts")}
        />

        {/* Newsletter Card */}
        <AdminStatCard
          icon={Mail}
          title="Newsletter Subscribers"
          description="People subscribed to your newsletter"
          count={newsletterCount}
          loading={loading}
          color="#F472B6"
          hoverColor="#EC4899"
          buttonText="View Subscribers"
          onView={handleViewNewsletters}
          onDownload={() => handleDownloadCSV("newsletters")}
        />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
