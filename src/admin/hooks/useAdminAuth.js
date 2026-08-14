import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useAdminAuth = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");

  const getAdmin = () => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      return null;
    }

    try {
      return JSON.parse(admin);
    } catch (error) {
      console.error("Failed to parse admin data:", error);
      return null;
    }
  };

  const logout = useCallback(() => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin", { replace: true });
  }, [navigate]);

  const handleUnauthorized = useCallback(() => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin", { replace: true });
  }, [navigate]);

  return {
    token,
    admin: getAdmin(),
    logout,
    handleUnauthorized,
  };
};

export default useAdminAuth;