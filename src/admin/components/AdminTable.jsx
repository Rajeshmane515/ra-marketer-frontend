import React from "react";

import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AdminEmptyState from "./AdminEmptyState";

const AdminTable = ({
  loading = false,
  columns = [],
  data = [],
  renderRow,
  emptyIcon,
  emptyMessage = "No data found",
  minWidth = 700,
  loadingMinHeight = 300,
  emptyMinHeight = 250,
}) => {
  return (
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
      {/* Loading */}
      {loading ? (
        <Box
          sx={{
            minHeight: loadingMinHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            sx={{
              color: "#2563FF",
            }}
          />
        </Box>
      ) : data.length === 0 ? (
        /* Empty State */
        <AdminEmptyState
          icon={emptyIcon}
          message={emptyMessage}
          minHeight={emptyMinHeight}
        />
      ) : (
        /* Table */
        <Table
          sx={{
            minWidth,
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.key || column.label}
                  sx={{
                    ...headerCellStyle,
                    textAlign: column.align || "left",
                    width: column.width,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item, index) =>
              renderRow ? (
                renderRow(item, index)
              ) : (
                <TableRow
                  key={item._id || index}
                  sx={{
                    "&:hover": {
                      background: "rgba(255,255,255,0.025)",
                    },
                  }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.key || column.label}
                      sx={{
                        ...bodyCellStyle,
                        textAlign: column.align || "left",
                        verticalAlign: column.verticalAlign || "top",
                      }}
                    >
                      {column.render
                        ? column.render(item, index)
                        : item[column.key] || "-"}
                    </TableCell>
                  ))}
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
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
};

export default AdminTable;
