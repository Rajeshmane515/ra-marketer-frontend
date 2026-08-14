import React, { useEffect, useMemo, useState } from "react";

import { IconButton, TableCell, TableRow } from "@mui/material";

import { Trash2, Users } from "lucide-react";

import AdminPageHeader from "../components/AdminPageHeader";

import AdminTable from "../components/AdminTable";

import AdminPagination from "../components/AdminPagination";

import useAdminAuth from "../hooks/useAdminAuth";

import { adminDelete, adminGet } from "../services/adminApi";

const CONTACTS_PER_PAGE = 20;

const AdminContacts = () => {
  const { handleUnauthorized } = useAdminAuth();

  const [contacts, setContacts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Fetch contacts
   */
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);

        const response = await adminGet("/api/admin/contacts");

        const data = await response.json();

        if (data.success) {
          setContacts(data.data);
        }
      } catch (error) {
        if (error.message === "ADMIN_UNAUTHORIZED") {
          handleUnauthorized();
          return;
        }

        console.error("Fetch Contacts Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [handleUnauthorized]);

  /*
   * Delete contact
   */
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact submission?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await adminDelete(`/api/admin/contacts/${id}`);

      const data = await response.json();

      if (data.success) {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact._id !== id),
        );
      } else {
        alert(data.message || "Failed to delete contact");
      }
    } catch (error) {
      if (error.message === "ADMIN_UNAUTHORIZED") {
        handleUnauthorized();
        return;
      }

      console.error("Delete Contact Error:", error);

      alert("Something went wrong while deleting the contact");
    }
  };

  /*
   * Search contacts
   */
  const filteredContacts = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) {
      return contacts;
    }

    return contacts.filter(
      (contact) =>
        contact.fullName?.toLowerCase().includes(searchValue) ||
        contact.email?.toLowerCase().includes(searchValue) ||
        contact.company?.toLowerCase().includes(searchValue) ||
        contact.message?.toLowerCase().includes(searchValue),
    );
  }, [contacts, search]);

  /*
   * Pagination
   */
  const totalPages = Math.ceil(filteredContacts.length / CONTACTS_PER_PAGE);

  const startIndex = (currentPage - 1) * CONTACTS_PER_PAGE;

  const currentContacts = filteredContacts.slice(
    startIndex,
    startIndex + CONTACTS_PER_PAGE,
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
      key: "fullName",
      label: "Name",
    },

    {
      key: "email",
      label: "Email",
    },

    {
      key: "company",
      label: "Company",
    },

    {
      key: "message",
      label: "Message",
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
   * Render contact rows
   */
  const renderRow = (contact) => {
    return (
      <TableRow
        key={contact._id}
        sx={{
          "&:hover": {
            background: "rgba(255,255,255,0.025)",
          },
        }}
      >
        {/* Name */}
        <TableCell sx={bodyCellStyle}>{contact.fullName || "-"}</TableCell>

        {/* Email */}
        <TableCell sx={bodyCellStyle}>{contact.email || "-"}</TableCell>

        {/* Company */}
        <TableCell sx={bodyCellStyle}>{contact.company || "-"}</TableCell>

        {/* Message */}
        <TableCell
          sx={{
            ...bodyCellStyle,
            maxWidth: "350px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {contact.message || "-"}
        </TableCell>

        {/* Date */}
        <TableCell sx={bodyCellStyle}>
          {formatDate(contact.createdAt)}
        </TableCell>

        {/* Action */}
        <TableCell
          sx={{
            ...bodyCellStyle,
            textAlign: "center",
          }}
        >
          <IconButton
            onClick={() => handleDelete(contact._id)}
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
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <AdminPageHeader
          title="Contact Submissions"
          count={contacts.length}
          countLabel="submissions"
          icon={Users}
          iconColor="#60A5FA"
          search={search}
          setSearch={setSearch}
          searchPlaceholder="Search contacts..."
        />

        {/* Table */}
        <AdminTable
          loading={loading}
          data={currentContacts}
          columns={columns}
          renderRow={renderRow}
          emptyIcon={Users}
          emptyMessage={
            search ? "No contacts found" : "No contact submissions yet"
          }
          minWidth={1000}
        />

        {/* Pagination */}
        <AdminPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          activeColor="#2563FF"
          activeHoverColor="#1D4ED8"
          startIndex={startIndex}
          pageSize={CONTACTS_PER_PAGE}
          totalItems={filteredContacts.length}
        />
      </div>
    </div>
  );
};

const bodyCellStyle = {
  color: "#D1D5DB",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  fontSize: "14px",
  verticalAlign: "top",
};

export default AdminContacts;
