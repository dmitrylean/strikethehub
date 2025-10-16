// src/components/LanguageSwitcher.tsx
import React, { FC } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import i18n from "../i18n";

const LanguageSwitcher: FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();
  const location = useLocation();

  const switchLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);

    const withoutLang = location.pathname.replace(/^\/[a-z]{2}/, "");
    navigate(`/${newLang}${withoutLang}`);
  };

  const languages = ["en", "ru"];
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
