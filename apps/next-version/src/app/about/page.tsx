// src/page/About.jsx
"use client";

import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import AboutSections from "../../components/AboutSections";
import OurTeam from "../../components/OurTeam";
import SubscribeSection from "../../components/SubscribeSection";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About — Strike The Hub";
  }, []);

  return (
    <>
      <Hero />
      <AboutSections />
      <OurTeam />
      <SubscribeSection />
    </>
  );
};

export default About;
