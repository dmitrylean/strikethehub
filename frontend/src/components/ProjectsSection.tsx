import React from "react";

const projects = [
  "/assets/img/project_1.png",
  "/assets/img/project_2.png",
  "/assets/img/project_3.png",
  "/assets/img/project_4.png",
  "/assets/img/project_5.png",
  "/assets/img/project_6.png",
];

const ProjectsSection = () => {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-5 text-center">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-2">Our Recent Projects</h2>
        <p className="text-[#aaa] text-base mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-12">
          {projects.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project ${i + 1}`}
              className="w-full h-[200px] object-cover rounded-xl"
            />
          ))}
        </div>

        <button className="bg-[#333] hover:bg-[#555] text-white py-3 px-7 rounded-lg transition">
          SEE ALL
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
