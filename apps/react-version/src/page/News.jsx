import React, { useEffect } from "react";
import Header from "../components/Header";
import NewsSection from "../components/NewsSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import newsData from "../data/news.json";

const News = () => {
  useEffect(() => {
    document.title = "News — Strike The Hub";
  }, []);

  return (
    <>
      <Header />
      <NewsSection news={newsData} />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default News;
