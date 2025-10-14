// src/page/About.jsx
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import AboutSections from "../components/AboutSections";

const About = () => {
  useEffect(() => {
    document.title = "About — Strike The Hub";
  }, []);

  return (
    <>
      <Hero />
      <AboutSections />
    </>
  );
};

export default About;
