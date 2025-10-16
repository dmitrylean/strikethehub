import React, { useRef } from "react";

const services = [
  { img: "/assets/svg/smartphone 1.svg", title: "Mobile Game Development" },
  { img: "/assets/svg/pc 1.svg", title: "PC Game Development" },
  { img: "/assets/svg/ps4 1.svg", title: "PS4 Game Development" },
  { img: "/assets/svg/vr-glasses 1.svg", title: "AR/VR Solutions" },
  { img: "/assets/svg/desktop 1.svg", title: "AR / VR Design" },
  { img: "/assets/svg/3d-cube 1.svg", title: "3D Modelings" },
];

const ServicesSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center py-20 px-5"
      style={{ backgroundImage: "url('/assets/img/service-bgd.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Lorem Ipsum is simply dummy text of the printing <br />
          and typesetting industry.
        </h2>
        <p className="text-base text-[#cccccc] max-w-[700px] mx-auto mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <div className="flex flex-col gap-10">
          {/* First string */}
          <div className="flex flex-wrap justify-between gap-7">
            {services.slice(0, 4).map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center max-w-[200px] flex-1 transition-transform hover:-translate-y-1"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-3">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <h3 className="text-sm font-medium mb-2">{service.title}</h3>
                <span className="text-orange-500 text-xl">➜</span>
              </div>
            ))}
          </div>

          {/* Second string */}
          <div className="flex flex-wrap justify-center gap-20">
            {services.slice(4).map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center max-w-[200px] flex-1 transition-transform hover:-translate-y-1"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-3">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <h3 className="text-sm font-medium mb-2">{service.title}</h3>
                <span className="text-orange-500 text-xl">➜</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
