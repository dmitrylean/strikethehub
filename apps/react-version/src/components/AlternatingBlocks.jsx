import React from "react";

export default function AlternatingBlocks() {
  const blocks = [
    {
      title: "Lorem Ipsum is simply dummy text dummy text",
      text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      text2: "Lorem Ipsum is simply dummy text of the printing industry.",
      img: "../assets/img/game_4.png",
      reverse: false
    },
    {
      title: "Lorem Ipsum is simply dummy text dummy text",
      text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      text2: "Lorem Ipsum is simply dummy text of the printing industry.",
      img: "../assets/img/game_2.png",
      reverse: true
    },
    {
      title: "Lorem Ipsum is simply dummy text dummy text",
      text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      text2: "Lorem Ipsum is simply dummy text of the printing industry.",
      img: "../assets/img/game_3.png",
      reverse: false
    }
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
}

function Block({ title, text1, text2, img, reverse }) {
  return (
    <div className={`grid md:grid-cols-2 items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>
      {!reverse && <TextPart title={title} text1={text1} text2={text2} />}
      <div>
        <img src={img} alt={title} className="w-[496px] h-[489px] object-cover" />
      </div>
      {reverse && <TextPart title={title} text1={text1} text2={text2} />}
    </div>
  );
}

function TextPart({ title, text1, text2 }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-4">{text1}</p>
      <p className="text-gray-400 mb-6">{text2}</p>
      <button className="bg-orange-500 text-white px-4 py-2">Read more</button>
    </div>
  );
}
