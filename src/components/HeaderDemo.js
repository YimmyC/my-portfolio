import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold text-gray-900">My Website</h1>
        <nav className="flex items-center">
          <a href="/about" className="text-gray-700 font-medium link-animation mx-4 transition duration-300 ease-in-out">
            About
          </a>
          <a href="/work" className="text-gray-700 font-medium link-animation mx-4 transition duration-300 ease-in-out">
            Work
          </a>
          <a href="/contact" className="text-gray-700 font-medium link-animation mx-4 transition duration-300 ease-in-out">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
