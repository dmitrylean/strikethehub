// src/components/AboutSections.jsx
import React, { useRef } from "react";

const AboutSections = () => {
  return (
    <>
      {/* Why Work With Us */}
      <section className="bg-[#0d0d0d] py-16 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-xl font-semibold text-white mb-10">
            Why work with us
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            <div className="bg-[#1a1a1a] text-[#ccc] rounded-xl p-5 w-[300px]">
              <span className="inline-block text-white text-xs px-3 py-1 rounded-md mb-2 bg-[#4b2a73]">
                Lorem ipsum
              </span>
              <h3 className="text-white text-lg font-semibold mb-2">
                Lorem Ipsum
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
            </div>

            <div className="bg-[#1a1a1a] text-[#ccc] rounded-xl p-5 w-[300px]">
              <span className="inline-block text-white text-xs px-3 py-1 rounded-md mb-2 bg-[#6e4b2f]">
                Lorem ipsum
              </span>
              <h3 className="text-white text-lg font-semibold mb-2">
                Lorem Ipsum
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
            </div>

            <div className="bg-[#1a1a1a] text-[#ccc] rounded-xl p-5 w-[300px]">
              <span className="inline-block text-white text-xs px-3 py-1 rounded-md mb-2 bg-[#2c5f4a]">
                Lorem ipsum
              </span>
              <h3 className="text-white text-lg font-semibold mb-2">
                Lorem Ipsum
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Visual Section */}
      <section className="bg-[#0d0d0d] text-white py-[60px] px-5">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/053/695/221/small_2x/a-soldier-in-full-tactical-gear-aiming-an-assault-rifle-free-photo.jpeg"
              alt="About Visual"
              className="w-[400px] rounded-[12px]"
            />
          </div>
          <div className="max-w-[600px]">
            <span className="text-sm text-gray-400 block mb-2">
              Lorem ipsum
            </span>
            <h2 className="text-2xl font-bold mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSections;
