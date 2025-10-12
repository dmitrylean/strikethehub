import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";

import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import InfoSection from "./components/InfoSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

import About from "./page/About";
import News from "./page/News";
import Services from "./page/Services";
import Contact from "./page/Contact";

// Home
const Home = () => (
  <>
    <Header />
    <Hero />
    <TrendingGames />
    <InfoSection />
    <ServicesSection />
    <ProjectsSection />
    <SubscribeSection />
    <Footer />
  </>
);

// Header Control Component
function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home — GamePlatform";
        break;
      case "/about":
        document.title = "About — GamePlatform";
        break;
      case "/services":
        document.title = "Portfolio — GamePlatform";
        break;
      case "/news":
        document.title = "News — GamePlatform";
        break;
      case "/contact":
        document.title = "Contact — GamePlatform";
        break;
      default:
        document.title = "GamePlatform";
    }
  }, [location]);

  return null; // No render!
}

function App() {
  return (
    <Router>
      <TitleManager /> {/* Connecting the header control */}
      <div className="bg-black min-h-screen">
        <div className="container mx-auto py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;