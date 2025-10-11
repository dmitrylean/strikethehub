import React, { useEffect } from "react";
import Hero from "../components/Hero";

function Home() {
  useEffect(() => {
    document.title = "Dmitry Lean | Home";
  }, []);

  return (
    <Hero />
  );
}

export default Home;