"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="container mx-auto flex flex-wrap gap-10 justify-between pb-10 border-b border-[#333] px-4">
        {/* Col 1 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-4">Strike The Hub</h4>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>@Logo</p>
        </div>

        {/* Col 2 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-4">About us</h4>
          <ul>
            <li className="mb-2">
              <Link href="/zeux" className="text-gray-300 hover:underline">
                Zeux
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/portfolio" className="text-gray-300 hover:underline">
                Portfolio
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/careers" className="text-gray-300 hover:underline">
                Careers
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="text-gray-300 hover:underline">
                Contact us
              </Link>
            </li>
            <li className="mb-2">
              <a
                href="https://www.figma.com/design/oTn1jPS3r0KrnWPSVU4PUD/Gaming-Platform---Web-Design--Community-?node-id=1-4&t=zZh8OAUqz8wefsoa-1"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:underline"
              >
                Design
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-bold mb-4">Contact us</h4>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>+908 89097 890</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-black transition"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-black transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-black transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 bg-[#1c1c1c] text-white flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-black transition"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-5 text-sm text-gray-500">
        <p>Copyright © 2025. Strike The Hub. All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
