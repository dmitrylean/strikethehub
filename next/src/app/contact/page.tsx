// src/page/About.jsx
"use client";

import React, { useEffect } from "react";
import SubscribeSection from "../../components/SubscribeSection";
import ContactSection from "../../components/ContactSection";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact — Strike The Hub";
  }, []);

  return (
    <>
      <ContactSection />
      <SubscribeSection />
    </>
  );
};

export default Contact;
