import React from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Viezah Robert",
      location: "Warsaw, Poland",
      avatar: "https://i.pravatar.cc/50",
      rating: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      avatar: "https://i.pravatar.cc/51",
      rating: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and"
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      avatar: "https://i.pravatar.cc/52",
      rating: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <section className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">

        {/* Headline */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <ReviewCard key={idx} {...r} />
          ))}
        </div>

        {/* Навигация */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-2 ml-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
          </div>
          <div className="flex gap-4 mr-2">
            <button className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
              <FaArrowLeft className="text-orange-500" />
            </button>
            <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function ReviewCard({ name, location, avatar, rating, text }) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg border bg-[#1e1e1e]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-bold">{name}</h4>
            <span className="text-sm text-gray-400">{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-orange-400">
          <span>{rating}</span>
          <FaStar />
        </div>
      </div>
      <p className="text-gray-300 text-sm mt-4">{text}</p>
    </div>
  );
}
