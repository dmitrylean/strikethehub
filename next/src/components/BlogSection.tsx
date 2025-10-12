"use client";

import Image from "next/image";
import React from "react";
import postImage1 from "@/assets/img/post-image-1.png";
import postImage2 from "@/assets/img/post-image-2.png";
import postImage3 from "@/assets/img/post-image-3.png";

export default function NewsPage() {
  return (
    <main className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <nav className="text-sm text-gray-400 mb-4">
          <span>Home</span> &gt; <span className="text-orange-500">News</span>
        </nav>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Lorem Ipsum is simply dummy text of the printing and.
          </h1>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1e1e1e] px-4 py-2 rounded-md w-full max-w-md text-white outline-none"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            {[{ img: postImage1 }, { img: postImage3 }].map((post, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <Image
                  src={post.img}
                  alt={`Post ${idx}`}
                  className="rounded-lg"
                  placeholder="blur"
                />
                <div className="flex gap-4 text-sm text-gray-400">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-white">
                    John smash
                  </span>
                  <span>20min</span>
                </div>
                <h2 className="text-xl font-bold">
                  Lorem Ipsum is simply dummy text dummy text
                </h2>
                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </p>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Image
                  src={postImage2}
                  alt={`Post preview ${idx}`}
                  width={100}
                  height={80}
                  className="w-24 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <div className="flex gap-2 text-xs mb-1">
                    <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full">
                      John smash
                    </span>
                    <span className="text-gray-400">3min</span>
                  </div>
                  <p className="text-sm font-semibold">
                    Lorem ipsum is simply dummy text dummy text ?
                  </p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </main>
  );
}
