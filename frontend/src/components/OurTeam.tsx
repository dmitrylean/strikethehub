import React, { useRef } from "react";

const OurTeam = () => {
  return (
    <section className="bg-[#0d0d0d] text-white py-[60px] px-5">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-xl mb-10 text-left">Our Team</h3>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="bg-[#1a1a1a] rounded-[12px] text-center p-5 w-[200px] text-gray-300">
            <img
              src="/assets/img/Bill 1.png"
              alt="John Peter"
              className="w-16 h-16 object-contain mb-3 mx-auto"
            />
            <h4 className="text-white text-base mt-2 mb-1">John Peter</h4>
            <span className="text-sm text-gray-400">COO</span>
          </div>
          <div className="bg-[#1a1a1a] rounded-[12px] text-center p-5 w-[200px] text-gray-300">
            <img
              src="/assets/img/Beverly 1.png"
              alt="Beverly"
              className="w-16 h-16 object-contain mb-3 mx-auto"
            />
            <h4 className="text-white text-base mt-2 mb-1">Beverly</h4>
            <span className="text-sm text-gray-400">COO</span>
          </div>
          <div className="bg-[#1a1a1a] rounded-[12px] text-center p-5 w-[200px] text-gray-300">
            <img
              src="/assets/img/Claudia 1.png"
              alt="Claudia"
              className="w-16 h-16 object-contain mb-3 mx-auto"
            />
            <h4 className="text-white text-base mt-2 mb-1">Claudia</h4>
            <span className="text-sm text-gray-400">COO</span>
          </div>
          <div className="bg-[#1a1a1a] rounded-[12px] text-center p-5 w-[200px] text-gray-300">
            <img
              src="/assets/img/Avatar 1.png"
              alt="Avatar"
              className="w-16 h-16 object-contain mb-3 mx-auto"
            />
            <h4 className="text-white text-base mt-2 mb-1">Avatar</h4>
            <span className="text-sm text-gray-400">COO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
