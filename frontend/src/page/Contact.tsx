// src/page/About.jsx
import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — Strike The Hub";
  }, []);

  return (
    <>
      <ContactSection />
    </>
  );
};

export default Contact;
