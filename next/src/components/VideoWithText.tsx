"use client";

import React from "react";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function VideoWithText() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Video */}
          <div className="relative w-full lg:w-1/2 max-w-lg">
            <Image
              src="../assets/img/Hero Video.png"
              alt="Video"
              className="rounded-lg w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center text-white text-5xl">
              <FaPlayCircle />
            </button>
          </div>

          {/* Text */}
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-xl font-bold">
              Lorem Ipsum is simply dummy text.
            </h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy.
            </p>
            <ul className="space-y-2">
              {[
                "Lorem Ipsum is simply",
                "Lorem Ipsum is simply",
                "Lorem Ipsum is simply",
                "Lorem Ipsum is simply",
              ].map((item, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="text-green-500 mr-2 inline" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
