import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

// Public pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Admin pages
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminContacts from "./admin/pages/AdminContacts";
import AdminNewsletters from "./admin/pages/AdminNewsletters";

// Admin protection
import AdminProtectedRoute from "./admin/components/AdminProtectedRoute";

// Service pages
import LeadGeneration from "./components/services/details/LeadGeneration";
import DemandGeneration from "./components/services/details/DemandGeneration";
import ContentSyndication from "./components/services/details/ContentSyndication";
import AccountMarketing from "./components/services/details/AccountMarketing";
import EmailMarketing from "./components/services/details/EmailMarketing";

const App = () => {
  return (
    <Routes>
      {/* ==================================================
          PUBLIC WEBSITE
      ================================================== */}

      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />

        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/contact"
          element={<Navigate to="/contact-us" replace />}
        />

        <Route path="/services" element={<Services />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<Terms />} />

        {/* Service Pages */}
        <Route path="/services/lead-generation" element={<LeadGeneration />} />

        <Route
          path="/services/demand-generation"
          element={<DemandGeneration />}
        />

        <Route
          path="/services/content-syndication"
          element={<ContentSyndication />}
        />

        <Route
          path="/services/account-based-marketing"
          element={<AccountMarketing />}
        />

        <Route path="/services/email-marketing" element={<EmailMarketing />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* ==================================================
          ADMIN LOGIN
      ================================================== */}

      <Route path="/admin" element={<AdminLogin />} />

      {/* ==================================================
          PROTECTED ADMIN ROUTES
      ================================================== */}

      <Route element={<AdminProtectedRoute />}>
        {/* Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Contacts */}
        <Route path="/admin/dashboard/contacts" element={<AdminContacts />} />

        {/* Newsletters */}
        <Route
          path="/admin/dashboard/newsletters"
          element={<AdminNewsletters />}
        />
      </Route>
    </Routes>
  );
};

export default App;
