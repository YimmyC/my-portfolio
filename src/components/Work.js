import React, { useState } from "react";
import passwordBandit from "../assets/passwordbandit.jpg";
import cocktailPic from "../assets/cocktailDreamsSite.png";
import readmepic from "../assets/readmedemo.png";
import foodfund from "../assets/SiteScreenshotFoodFund.png";
import booksite from "../assets/booksite.png";
import texteditorsite from "../assets/texteditorsite.png";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "Cocktail Search Engine",
      image: cocktailPic,
      link: "https://dork-diaries.github.io/API-team-project/",
    },
    {
      name: "Readme Generator",
      image: readmepic,
      link: "https://github.com/YimmyC/readme-gen",
    },
    {
      name: "Password Generator",
      image: passwordBandit,
      link: "https://github.com/YimmyC/Password-Generator",
    },
    {
      name: "Food Fund",
      image: foodfund,
      link: "https://github.com/TheSimpleLifers/project-two",
    },
    {
      name: "Book search engine",
      image: booksite,
      link: "https://github.com/YimmyC/book-search",
    },
    {
      name: "Text Editor",
      image: texteditorsite,
      link: "https://github.com/YimmyC/PWA_text_editor",
    },
  ];

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="work" className="z-10 relative flex flex-wrap justify-center items-center p-4 sm:p-8" style={{ height: "fit-content" }}>
      <div className="flex flex-wrap justify-center items-center w-full max-w-7xl">
        <div className="w-full">
          <h1 className="text-8xl sm:text-5xl font-prompt text-center mb-8">Work</h1>
        </div>
        <div className="flex flex-wrap justify-between items-center w-full">
          {projects.map((project, index) => (
            <div key={index} className="relative w-full sm:w-1/2 h-auto overflow-hidden mb-8 px-4" onMouseOver={() => handleMouseOver(index)} onMouseLeave={() => handleMouseLeave()}>
              <div style={{ paddingBottom: "100%" }}>
                <img src={project.image} alt={project.name} className={`absolute inset-0 w-full h-full object-cover object-center opacity-80 ${hoveredIndex === index ? "filter blur-sm opacity-60" : ""} transition-all duration-300`} />
              </div>
              {hoveredIndex === index && (
                <a href={project.link} target="_blank" className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 text-white font-semibold text-lg transition-all duration-300">
                  {project.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
