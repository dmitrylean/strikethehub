// src/page/About.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrendingGames from "../components/TrendingGames";
import InfoSection from "../components/InfoSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

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

export default Home;