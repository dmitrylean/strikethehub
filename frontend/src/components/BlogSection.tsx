import React, { useRef } from "react";
import postImage1 from "https://static.tildacdn.one/tild3431-3934-4537-b335-646462656633/__2023-04-11__132537.png";
import postImage2 from "https://cdn.oneesports.gg/cdn-data/2024/07/top_7_shooter_cs_HD2_cover.jpg";
import postImage3 from "https://i0.wp.com/www.gamesbap.com/wp-content/uploads/2017/05/Best-FPS-Games-for-PC.jpg?fit=1024%2C576&ssl=1";

export default function NewsPage() {
  return (
    <>
      {/* Main section with search and posts */}
      <section className="bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Nav */}
          <nav className="text-sm text-gray-400 mb-4">
            <span>Home</span> &gt; <span className="text-orange-500">News</span>
          </nav>

          {/* Заголовок */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-center mb-10">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1e1e1e] px-4 py-2 rounded-md w-full max-w-md text-white outline-none"
            />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Main posts */}
            <div className="md:col-span-2 space-y-10">
              {[{ img: postImage1 }, { img: postImage3 }].map((post, idx) => (
                <div key={idx} className="flex flex-col space-y-4">
                  <img src={post.img} alt="Post" className="rounded-lg" />
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

            {/* Side news feed */}
            <div className="space-y-6">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <img
                    src={postImage2}
                    alt="Post preview"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
