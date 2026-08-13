import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { ArrowLeft, Mail, Search, Trash2 } from "lucide-react";

import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const AdminNewsletters = () => {
  const navigate = useNavigate();

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const newslettersPerPage = 20;

  const token = localStorage.getItem("adminToken");

  /*
    Fetch newsletter subscribers
  */
  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }

    fetchNewsletters();
  }, [navigate, token]);

  const fetchNewsletters = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/admin/newsletters`, {
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

      const data = await response.json();

      if (data.success) {
        setNewsletters(data.data);
      }
    } catch (error) {
      console.error("Fetch Newsletter Error:", error);
    } finally {
      setLoading(false);
    }
  };

  /*
    Delete newsletter subscriber
  */
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this newsletter subscriber?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/admin/newsletters/${id}`, {
        method: "DELETE",
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

      const data = await response.json();

      if (data.success) {
        setNewsletters((prevNewsletters) =>
          prevNewsletters.filter((newsletter) => newsletter._id !== id),
        );
      } else {
        alert(data.message || "Failed to delete subscriber");
      }
    } catch (error) {
      console.error("Delete Newsletter Error:", error);

      alert("Something went wrong while deleting the subscriber");
    }
  };

  /*
    Search subscribers
  */
  const filteredNewsletters = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) {
      return newsletters;
    }

    return newsletters.filter((newsletter) =>
      newsletter.email?.toLowerCase().includes(searchValue),
    );
  }, [newsletters, search]);

  /*
    Pagination
  */
  const totalPages = Math.ceil(filteredNewsletters.length / newslettersPerPage);

  const startIndex = (currentPage - 1) * newslettersPerPage;

  const currentNewsletters = filteredNewsletters.slice(
    startIndex,
    startIndex + newslettersPerPage,
  );

  /*
    Reset page when searching
  */
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0B0F19",
        color: "#FFFFFF",
        px: {
          xs: 2,
          sm: 3,
          md: 5,
        },
        py: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Header */}
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
              <Mail size={26} color="#F472B6" />

              <Typography
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "30px",
                  },
                  fontWeight: 700,
                }}
              >
                Newsletter Subscribers
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 0.5,
                color: "#9CA3AF",
                fontSize: "14px",
              }}
            >
              {newsletters.length} total subscribers
            </Typography>
          </Box>

          {/* Search */}
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subscribers..."
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <Search
                    size={18}
                    color="#9CA3AF"
                    style={{
                      marginRight: "8px",
                    }}
                  />
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
                  borderColor: "#F472B6",
                },
              },

              "& input::placeholder": {
                color: "#6B7280",
                opacity: 1,
              },
            }}
          />
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
            boxShadow: "none",
            overflowX: "auto",
          }}
        >
          {loading ? (
            <Box
              sx={{
                minHeight: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                sx={{
                  color: "#F472B6",
                }}
              />
            </Box>
          ) : currentNewsletters.length === 0 ? (
            <Box
              sx={{
                minHeight: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Mail size={35} color="#4B5563" />

              <Typography
                sx={{
                  color: "#9CA3AF",
                }}
              >
                {search
                  ? "No subscribers found"
                  : "No newsletter subscribers yet"}
              </Typography>
            </Box>
          ) : (
            <Table
              sx={{
                minWidth: 700,
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={headerCellStyle}>Email</TableCell>

                  <TableCell sx={headerCellStyle}>Date</TableCell>

                  <TableCell
                    sx={{
                      ...headerCellStyle,
                      textAlign: "center",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {currentNewsletters.map((newsletter) => (
                  <TableRow
                    key={newsletter._id}
                    sx={{
                      "&:hover": {
                        background: "rgba(255,255,255,0.025)",
                      },
                    }}
                  >
                    <TableCell sx={bodyCellStyle}>
                      {newsletter.email || "-"}
                    </TableCell>

                    <TableCell sx={bodyCellStyle}>
                      {formatDate(newsletter.createdAt)}
                    </TableCell>

                    <TableCell
                      sx={{
                        ...bodyCellStyle,
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        onClick={() => handleDelete(newsletter._id)}
                        sx={{
                          color: "#EF4444",

                          "&:hover": {
                            background: "rgba(239,68,68,0.1)",
                          },
                        }}
                      >
                        <Trash2 size={18} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
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
            <Button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              sx={paginationButtonStyle}
            >
              Previous
            </Button>

            {Array.from(
              {
                length: totalPages,
              },
              (_, index) => index + 1,
            ).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                sx={{
                  minWidth: "40px",
                  color: currentPage === page ? "#FFFFFF" : "#9CA3AF",
                  background: currentPage === page ? "#F472B6" : "transparent",
                  borderRadius: "8px",
                  "&:hover": {
                    background:
                      currentPage === page
                        ? "#EC4899"
                        : "rgba(255,255,255,0.05)",
                  },
                }}
              >
                {page}
              </Button>
            ))}

            <Button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
              sx={paginationButtonStyle}
            >
              Next
            </Button>
          </Box>
        )}

        {/* Result Information */}
        {!loading && filteredNewsletters.length > 0 && (
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              color: "#6B7280",
              fontSize: "13px",
            }}
          >
            Showing {startIndex + 1}–
            {Math.min(
              startIndex + newslettersPerPage,
              filteredNewsletters.length,
            )}{" "}
            of {filteredNewsletters.length}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const headerCellStyle = {
  color: "#D1D5DB",
  fontWeight: 600,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  background: "#0F172A",
  whiteSpace: "nowrap",
};

const bodyCellStyle = {
  color: "#D1D5DB",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  fontSize: "14px",
  verticalAlign: "middle",
};

const paginationButtonStyle = {
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
};

export default AdminNewsletters;
