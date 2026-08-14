import React, { useEffect, useMemo, useState } from "react";

import { IconButton, TableCell, TableRow } from "@mui/material";

import { Mail, Trash2 } from "lucide-react";

import AdminPageHeader from "../components/AdminPageHeader";
import AdminTable from "../components/AdminTable";
import AdminPagination from "../components/AdminPagination";

import useAdminAuth from "../hooks/useAdminAuth";

import { adminDelete, adminGet } from "../services/adminApi";

const NEWSLETTERS_PER_PAGE = 20;

const AdminNewsletters = () => {
  const { handleUnauthorized } = useAdminAuth();

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Fetch newsletter subscribers
   */
  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        setLoading(true);

        const response = await adminGet("/api/admin/newsletters");

        const data = await response.json();

        if (data.success) {
          setNewsletters(data.data);
        }
      } catch (error) {
        if (error.message === "ADMIN_UNAUTHORIZED") {
          handleUnauthorized();
          return;
        }

        console.error("Fetch Newsletter Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, [handleUnauthorized]);

  /*
   * Delete newsletter subscriber
   */
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this newsletter subscriber?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await adminDelete(`/api/admin/newsletters/${id}`);

      const data = await response.json();

      if (data.success) {
        setNewsletters((prevNewsletters) =>
          prevNewsletters.filter((newsletter) => newsletter._id !== id),
        );
      } else {
        alert(data.message || "Failed to delete subscriber");
      }
    } catch (error) {
      if (error.message === "ADMIN_UNAUTHORIZED") {
        handleUnauthorized();
        return;
      }

      console.error("Delete Newsletter Error:", error);

      alert("Something went wrong while deleting the subscriber");
    }
  };

  /*
   * Search subscribers
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
   * Pagination
   */
  const totalPages = Math.ceil(
    filteredNewsletters.length / NEWSLETTERS_PER_PAGE,
  );

  const startIndex = (currentPage - 1) * NEWSLETTERS_PER_PAGE;

  const currentNewsletters = filteredNewsletters.slice(
    startIndex,
    startIndex + NEWSLETTERS_PER_PAGE,
  );

  /*
   * Reset page when searching
   */
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  /*
   * Format date
   */
  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  /*
   * Table columns
   */
  const columns = [
    {
      key: "email",
      label: "Email",
    },

    {
      key: "createdAt",
      label: "Date",
    },

    {
      key: "action",
      label: "Action",
      align: "center",
    },
  ];

  /*
   * Render newsletter rows
   */
  const renderRow = (newsletter) => {
    return (
      <TableRow
        key={newsletter._id}
        sx={{
          "&:hover": {
            background: "rgba(255,255,255,0.025)",
          },
        }}
      >
        {/* Email */}
        <TableCell sx={bodyCellStyle}>{newsletter.email || "-"}</TableCell>

        {/* Date */}
        <TableCell sx={bodyCellStyle}>
          {formatDate(newsletter.createdAt)}
        </TableCell>

        {/* Action */}
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
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B0F19",
        color: "#FFFFFF",
        padding: "32px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <AdminPageHeader
          title="Newsletter Subscribers"
          count={newsletters.length}
          countLabel="subscribers"
          icon={Mail}
          iconColor="#F472B6"
          search={search}
          setSearch={setSearch}
          searchPlaceholder="Search subscribers..."
        />

        {/* Table */}
        <AdminTable
          loading={loading}
          data={currentNewsletters}
          columns={columns}
          renderRow={renderRow}
          emptyIcon={Mail}
          emptyMessage={
            search ? "No subscribers found" : "No newsletter subscribers yet"
          }
          minWidth={700}
        />

        {/* Pagination */}
        <AdminPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          activeColor="#F472B6"
          activeHoverColor="#EC4899"
          startIndex={startIndex}
          pageSize={NEWSLETTERS_PER_PAGE}
          totalItems={filteredNewsletters.length}
        />
      </div>
    </div>
  );
};

const bodyCellStyle = {
  color: "#D1D5DB",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  fontSize: "14px",
  verticalAlign: "middle",
};

export default AdminNewsletters;
