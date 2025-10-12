"use client";

import React from "react";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Breaking News: Something Cool Happened",
    date: "October 9, 2025",
    image: "/img/post-image-1.png",
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Pellentesque vitae sapien non eros laoreet pharetra.</p>`,
  },
  {
    id: 2,
    title: "Next.js 15 Released — What’s New?",
    date: "October 1, 2025",
    image: "/img/post-image-2.png",
    content: `<p>Next.js 15 introduces powerful new features for developers...</p>`,
  },
];

export default function PostPage({ params }: { params: { id: string } }) {
  const post = newsData.find((item) => item.id.toString() === params.id);

  if (!post) {
    return (
      <>
        <div className="text-center text-white py-20">
          <h1 className="text-2xl font-bold">Post not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="w-full bg-black text-white">
        <div className="max-w-[1440px] mx-auto py-16 px-4 text-center">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg mb-6 mx-auto object-cover"
          />
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-400 mb-8">{post.date}</div>
          <article
            className="prose prose-invert mx-auto max-w-3xl text-left"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
    </>
  );
}
