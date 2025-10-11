import React from "react";
import { Link, useParams } from "react-router-dom";

const NewsSection = ({ news }) => {
  const { lang } = useParams();

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {news.map((post) => (
          <div key={post.id} className="bg-[#1e1e1e] p-4 rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">
              <Link to={`/${lang}/news/${post.id}`} className="hover:text-orange-500">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
