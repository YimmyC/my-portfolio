import React from "react";
import proPic from "../assets/louvresquare.png";

function Header() {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={proPic} alt="Portrait" className="rounded-full ring-2 ring-black mr-4" width={50} height={50} />
          <h1 className="text-lg sm:text-2xl font-roboto">Jimmy Cassano</h1>
        </div>
        <nav className="flex flex-col sm:flex-row items-center font-roboto font-medium">
          <a href="/about" className="text-gray-700 link-animation my-2 sm:my-0 mx-4 sm:mx-6 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            About
          </a>
          <a href="/work" className="text-gray-700 link-animation my-2 sm:my-0 mx-4 sm:mx-6 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            Work
          </a>
          <a href="/contact" className="text-gray-700 link-animation my-2 sm:my-0 mx-4 sm:mx-6 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
