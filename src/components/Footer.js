import React from "react";

function Footer() {
  return (
    <footer className="bg-white shadow-md border-t">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-lg sm:text-2xl font-roboto"></h1>
        </div>
        <nav className="flex flex-col sm:flex-row items-center font-roboto font-medium">
          <a href="#about" className="text-gray-700 link-animation my-2 sm:my-0 mx-4 sm:mx-6 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            About
          </a>
          <a href="#work" className="text-gray-700 link-animation my-2 sm:my-0 mx-4 sm:mx-6 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            Work
          </a>
          <a href="#contact" className="text-gray-700 link-animation my-2 sm:my-0 mx-4 sm:mx-6 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            Contact
          </a>
          <a href="#resume" className="text-gray-700 link-animation my-2 sm:my-0 mx-4 sm:mx-6 transition duration-300 ease-in-out hover:text-blue-500 hover:underline hover:rotate-360">
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
