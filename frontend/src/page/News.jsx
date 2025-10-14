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
      <NewsSection news={newsData} />
    </>
  );
};

export default News;
