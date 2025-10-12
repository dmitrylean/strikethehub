import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import i18n from "../i18n";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  const switchLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    const withoutLang = location.pathname.replace(/^\/[a-z]{2}/, "");
    navigate(`/${newLang}${withoutLang}`);
  };

  // Languages
  const languages = ["en", "ru"];

  // We leave only those that do not match the current one.
  const availableLangs = languages.filter((l) => l !== lang);

  return (
    <div style={{ display: "flex", gap: "8px", color: "white" }}>
      {availableLangs.map((l) => (
        <button key={l} onClick={() => switchLanguage(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
