import React from "react";
import { FaUser, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function StatsSection() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and.
          </h2>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Numbers */}
        <div className="bg-[#1e1e1e] rounded-lg flex flex-col md:flex-row justify-between items-center text-center mt-10 py-8 px-6 gap-6">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">

              <StatItem icon={<FaUser />} value="90+" label="Clients" />
              <Divider />
              <StatItem icon={<FaMapMarkerAlt />} value="30+" label="Countries" />
              <Divider />
              <StatItem icon={<FaBriefcase />} value="50+" label="Projects" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center w-[150px]">
      <div className="text-orange-500 text-2xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold mt-2">{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block w-px bg-gray-600 h-16"></div>;
}
