import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Home from "./pages/Home";
import Works from './pages/Works';
// import Service from './pages/Service';
import Contact from './pages/Contact';

// Layouts
// import DefaultLayout from "./layouts/DefaultLayout";
import HomeLayout from "./layouts/HomeLayout";

import './App.css';

function App() {
  useEffect(() => {
      document.title = "Dmitry Lean | Home";
  }, []);
  
  return (
    <Router>
      <NavBar />
      <Routes>
         <Route path="/" element={<HomeLayout><Home /></HomeLayout>} />
        <Route path="/works" element={<Works />} />
        {/* <Route path="/service" element={<Service />} /> */}
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;