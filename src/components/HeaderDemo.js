import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="space-x-4">
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/work" className="hover:text-gray-300">
            Work
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
