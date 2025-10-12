"use client";

import React from "react";
import Image from "next/image";

const InfoSection: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <h2 className="text-center text-2xl font-bold mb-14 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Text */}
          <div className="max-w-[500px]">
            <h3 className="text-xl font-semibold mb-3">Lorem Ipsum</h3>
            <p className="text-sm leading-relaxed text-[#dddddd]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              {
                "industry. Lorem Ipsum has been the industry's standard dummy text"
              }
              ever since the 1500s,
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/assets/img/info-img.png"
              alt="Spider-Man"
              width={1200}
              height={600}
              className="w-full rounded-xl block"
            />
            <div
              className="absolute top-0 -right-10 w-20 h-20 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(#ff7b00 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
