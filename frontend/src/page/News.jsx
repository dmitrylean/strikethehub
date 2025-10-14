import React, { useEffect } from "react";
import NewsSection from "../components/NewsSection";
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
