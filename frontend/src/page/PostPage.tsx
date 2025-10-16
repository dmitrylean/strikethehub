import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import newsData from "../data/news.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PostPage = () => {
  const { id } = useParams();

  const post = newsData.find((item) => item.id.toString() === id);

  if (!post) {
    return (
      <>
        <Header />
        <div className="text-center text-white py-20">
          <h1 className="text-2xl font-bold">Post not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="w-full bg-black text-white">
        <div className="max-w-[1440px] mx-auto py-16 px-4 text-center">
          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg mb-6 mx-auto"
          />
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-400 mb-8">{post.date}</div>
          <div
            className="prose prose-invert mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;
