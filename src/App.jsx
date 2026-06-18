import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";

import LeadGeneration from "./components/services/details/LeadGeneration";
import DemandGeneration from "./components/services/details/DemandGeneration";
import ContentSyndication from "./components/services/details/ContentSyndication";
import AccountMarketing from "./components/services/details/AccountMarketing";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

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

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
