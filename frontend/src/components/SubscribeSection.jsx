import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Lorem Ipsum</h2>
        <p className="text-[#ccc] mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="bg-[#1a1a1a] rounded-xl p-6 flex flex-wrap justify-between items-center gap-5">
          <div className="max-w-lg">
            <h3 className="text-xl font-semibold mb-2">Stay in the loop</h3>
            <p className="text-[#ccc]">
              Subscribe to receive the latest news and updates about TDA. <br />
              We promise not to spam you!
            </p>
          </div>

          <form className="flex flex-1 flex-wrap gap-3 min-w-[280px]">
            <input
              type="email"
              placeholder="Enter email address"
              required
              className="flex-1 px-4 py-3 rounded-md outline-none"
            />
            <button
              type="submit"
              className="bg-[#ff7a00] hover:bg-[#e56e00] text-white px-5 py-3 rounded-md transition"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
