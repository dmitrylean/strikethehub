// ContactPage.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-sm text-gray-400">
            Home <span className="text-orange-500">Contact us</span>
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and.
          </h2>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="mt-12 flex justify-center">
            <img
              src="../assets/img/map.png"
              alt="Map"
              className="w-full max-w-5xl"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-300">
            <div>
              <p className="mb-2">Follow us</p>
              <div className="flex justify-center space-x-4 text-white text-lg">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <FaPhone className="text-white text-2xl mb-2" />
              <span>+94 4444 5555 6</span>
            </div>

            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-white text-2xl mb-2" />
              <span>but also the leap into electronic typesetting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#14100E] text-white py-16 px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">Say hello</h3>
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <form className="max-w-3xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#1e1e1e] w-full p-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#1e1e1e] w-full p-3 rounded-md outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#1e1e1e] w-full p-3 rounded-md outline-none"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="bg-[#1e1e1e] w-full p-3 rounded-md outline-none"
          ></textarea>

          <div className="text-right">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
            >
              Get in touch
            </button>
          </div>
        </form>

        <div className="absolute left-0 bottom-0 w-full h-full opacity-5 pointer-events-none"></div>
      </section>
    </>
  );
};

export default ContactPage;
