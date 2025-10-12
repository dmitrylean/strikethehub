// src/page/About.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSections from "../components/AboutSections";
import OurTeam from "../components/OurTeam";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About — Strike The Hub";
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <AboutSections />
      <OurTeam />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default About;
