import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import News from "./page/News";
import Services from "./page/Services";
import Contact from "./page/Contact";
import PostPage from "./page/PostPage";

function TitleManager() {
  useEffect(() => {
    const titles = {
      "/": "Home - GamePlatform",
      "/about": "About - GamePlatform",
      "/services": "Services - GamePlatform",
      "/news": "News - GamePlatform",
      "/contact": "Contact - GamePlatform",
    };
    const path = window.location.pathname || "/";
    document.title = titles[path] || "GamePlatform";
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <TitleManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<PostPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
