// src/page/About.jsx
import React, { useEffect } from "react";
import ReviewsSection from "../components/ReviewsSection";

const Services = () => {
  useEffect(() => {
    document.title = "Portfolio — Strike The Hub";
  }, []);

  return (
    <>
      <ReviewsSection />
    </>
  );
};

export default Services;