import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold no-underline"
        >
          MySite
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="flex list-none gap-8 m-0 p-0">
            <li>
              <Link to="/" className="text-white no-underline hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white no-underline hover:text-orange-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white no-underline hover:text-orange-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-white no-underline hover:text-orange-400">
                News
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className="bg-orange-400 text-white font-semibold no-underline py-2 px-5 rounded-lg transition-colors duration-300 hover:bg-orange-500"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
