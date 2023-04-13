import React, { useState } from "react";
import passwordBandit from "../assets/passwordbandit.jpg";
import cocktailPic from "../assets/cocktailDreamsSite.png";
import readmepic from "../assets/readmedemo.png";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "Cocktail Search Engine",
      image: cocktailPic,
      link: "https://dork-diaries.github.io/API-team-project/",
    },
    {
      name: "Project 2",
      image: readmepic,
      link: "https://github.com/YimmyC/readme-gen",
    },
    {
      name: "Password Generator",
      image: passwordBandit,
      link: "https://github.com/YimmyC/Password-Generator",
    },
    {
      name: "Project 4",
      image: "https://via.placeholder.com/1920x1080",
      link: "#",
    },
    {
      name: "Project 5",
      image: "https://via.placeholder.com/1920x1080",
      link: "#",
    },
    {
      name: "Project 6",
      image: "https://via.placeholder.com/1920x1080",
      link: "#",
    },
  ];

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="work" className="z-10 relative flex flex-wrap justify-center items-center p-4 sm:p-8">
      <div className="flex flex-wrap justify-center items-center w-full max-w-7xl">
        <div className="w-full">
          <h1 className="text-8xl sm:text-5xl font-prompt text-center mb-8">Work</h1>
        </div>
        <div className="flex flex-wrap justify-between items-center w-full">
          {projects.map((project, index) => (
            <div key={index} className="relative w-full sm:w-1/2 h-screen overflow-hidden max-h-screen mb-8 px-4" onMouseOver={() => handleMouseOver(index)} onMouseLeave={() => handleMouseLeave()}>
              <img src={project.image} alt={project.name} className={`absolute inset-0 w-full h-full object-cover object-center ${hoveredIndex === index ? "filter blur-sm" : ""} transition-all duration-300`} />
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
