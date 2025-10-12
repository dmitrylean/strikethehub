// src/page/About.jsx
"use client";

import React, { useEffect } from "react";
import StatsSection from "../../components/StatsSection";
import VideoWithText from "../../components/VideoWithText";
import ReviewsSection from "../../components/ReviewsSection";
import AlternatingBlocks from "../../components/AlternatingBlocks";
import SubscribeSection from "../../components/SubscribeSection";

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Portfolio — Strike The Hub";
  }, []);

  return (
    <>
      <StatsSection />
      <VideoWithText />
      <ReviewsSection />
      <AlternatingBlocks />
      <SubscribeSection />
    </>
  );
};

export default Services;
