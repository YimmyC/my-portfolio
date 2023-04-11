import React from "react";
import proPic from "../assets/louvresquare.png";

function Header() {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="container mx-auto flex justify-between items-center py-6">
        <img src={proPic} alt="Portrait" className="rounded-full ring-2 ring-black mr-4" width={100} height={100} />
        <h1 className="text-3xl font-roboto ">Jimmy Cassano</h1>
        <nav className="flex items-center font-roboto font-medium">
          <a href="#about" className="text-gray-700 link-animation mx-4 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            About
          </a>
          <a href="#work" className="text-gray-700 link-animation mx-4 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            Work
          </a>
          <a href="#contact" className="text-gray-700 link-animation mx-4 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
