// App.js

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Contact from "./pages/Contact";

// --- Auto redirect by language ---
function LanguageRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const browserLang = (navigator.language || "en").split("-")[0];
    const supported = ["en", "ru"];
    const lang = supported.includes(browserLang) ? browserLang : "en";
    navigate(`/${lang}`, { replace: true });
  }, [navigate]);
  return null;
}

// --- Control title ---
function TitleManager() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    const titles = {
      "/": t("homeTitle"),
      "/about": t("aboutTitle"),
      "/services": t("servicesTitle"),
      "/news": t("newsTitle"),
      "/contact": t("contactTitle"),
    };
    const pathWithoutLang = window.location.pathname.replace(/^\/[a-z]{2}/, "") || "/";
    document.title = titles[pathWithoutLang] || "GamePlatform";
  }, [lang, t, i18n]);

  return null;
}

// --- Routes for the selected language ---
function LangRoutes() {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!["en", "ru"].includes(lang)) {
      navigate("/en", { replace: true });
    }
  }, [lang, navigate]);

  return (
    <>
      <TitleManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguageRedirect />} />
        <Route path="/:lang/*" element={<LangRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
