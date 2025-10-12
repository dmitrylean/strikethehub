// src/page/About.jsx
"use client";

import Hero from "../../components/Hero";
import TrendingGames from "../../components/TrendingGames";
import InfoSection from "../../components/InfoSection";
import ServicesSection from "../../components/ServicesSection";
import ProjectsSection from "../../components/ProjectsSection";
import SubscribeSection from "../../components/SubscribeSection";

const Home: React.FC = () => (
  <>
    <Hero />
    <TrendingGames />
    <InfoSection />
    <ServicesSection />
    <ProjectsSection />
    <SubscribeSection />
  </>
);

export default Home;
