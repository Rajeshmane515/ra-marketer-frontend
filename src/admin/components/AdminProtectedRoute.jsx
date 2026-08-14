import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // No admin token → go to login
  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  // If children are provided, render them
  if (children) {
    return children;
  }

  // Otherwise render nested routes
  return <Outlet />;
};

export default AdminProtectedRoute;
