import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="bg-[#060816] min-h-screen pt-24"
      >
        <Outlet />
      </motion.main>

      <Footer />
    </>
  );
};

export default MainLayout;
