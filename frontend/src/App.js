import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import News from "./page/News";
import Services from "./page/Services";
import Contact from "./page/Contact";
import PostPage from "./page/PostPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubscribeSection from "./components/SubscribeSection";

function TitleManager() {
  useEffect(() => {
    const titles = {
      "/": "Home - StrikeTheHub",
      "/about": "About - StrikeTheHub",
      "/services": "Services - StrikeTheHub",
      "/news": "News - StrikeTheHub",
      "/contact": "Contact - StrikeTheHub",
    };
    const path = window.location.pathname || "/";
    document.title = titles[path] || "StrikeTheHub";
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <TitleManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<PostPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SubscribeSection />
      <Footer />
    </Router>
  );
}

export default App;
