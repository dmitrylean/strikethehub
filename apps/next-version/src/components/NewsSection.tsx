"use client";

import React from "react";
import newsData from "@/data/news.json";
import Image from "next/image";

export default function NewsSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {newsData.map((post) => (
          <div key={post.id} className="bg-[#1e1e1e] p-4 rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
