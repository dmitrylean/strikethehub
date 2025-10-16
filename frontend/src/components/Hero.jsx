import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero py-16 bg-black text-white bg-[url('/assets/img/hero-image.jpg')] bg-no-repeat bg-center bg-cover h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Column */}
        <div className="hero-text max-w-lg mb-10 md:mb-0">
          <span className="subtitle text-orange-400 uppercase font-semibold tracking-wide">
            3D game Dev
          </span>
          <h1 className="text-4xl font-bold mt-4 leading-tight">
            Work that we
            <br />
            produce for our
            <br />
            <span className="text-orange-400">clients</span>
          </h1>
          <p className="mt-6 text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 bg-orange-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-orange-500"
          >
            Get more details
          </Link>
        </div>

        {/* Right Column 
        <div className="hero-visual flex flex-col items-center">
          <img
            src="/assets/img/joy_stick 1.png"
            alt="Gamepad"
            className="w-72 mb-6"
          />
          <div className="engines flex gap-6">
            <img src="/assets/svg/unity 1.svg" alt="Unity" />
            <img src="/assets/svg/cry 1.svg" alt="CryEngine" />
            <img src="/assets/svg/unreal 1.svg" alt="Unreal Engine" />
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Hero;
