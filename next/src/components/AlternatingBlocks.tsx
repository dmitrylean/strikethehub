"use client";

import React from "react";
import Image from "next/image";

interface BlockProps {
  title: string;
  text1: string;
  text2: string;
  img: string;
  reverse?: boolean;
}

const AlternatingBlocks: React.FC = () => {
  const blocks: BlockProps[] = [
    {
      title: "Lorem Ipsum is simply dummy text dummy text",
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      text2: "Lorem Ipsum is simply dummy text of the printing industry.",
      img: "../assets/img/game_4.png",
      reverse: false,
    },
    {
      title: "Lorem Ipsum is simply dummy text dummy text",
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      text2: "Lorem Ipsum is simply dummy text of the printing industry.",
      img: "../assets/img/game_2.png",
      reverse: true,
    },
  ];

  return (
    <section className="bg-[#0d0d0d] text-white py-16">
      <div className="container mx-auto space-y-16">
        {blocks.map((b, idx) => (
          <Block key={idx} {...b} />
        ))}
      </div>
    </section>
  );
};

const Block: React.FC<BlockProps> = ({ title, text1, text2, img, reverse }) => (
  <div
    className={`grid md:grid-cols-2 items-center gap-8 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    {!reverse && <TextPart title={title} text1={text1} text2={text2} />}
    <div>
      <Image
        src={img}
        alt={title}
        className="w-[496px] h-[489px] object-cover"
      />
    </div>
    {reverse && <TextPart title={title} text1={text1} text2={text2} />}
  </div>
);

const TextPart: React.FC<{ title: string; text1: string; text2: string }> = ({
  title,
  text1,
  text2,
}) => (
  <div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 mb-4">{text1}</p>
    <p className="text-gray-400 mb-6">{text2}</p>
    <button className="bg-orange-500 text-white px-4 py-2">Read more</button>
  </div>
);

export default AlternatingBlocks;
