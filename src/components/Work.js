import React, { useState } from "react";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "Project 1",
      image: "https://via.placeholder.com/500x300",
      link: "#",
    },
    {
      name: "Project 2",
      image: "https://via.placeholder.com/500x300",
      link: "#",
    },
    {
      name: "Project 3",
      image: "https://via.placeholder.com/500x300",
      link: "#",
    },
    {
      name: "Project 4",
      image: "https://via.placeholder.com/500x300",
      link: "#",
    },
    {
      name: "Project 5",
      image: "https://via.placeholder.com/500x300",
      link: "#",
    },
    {
      name: "Project 6",
      image: "https://via.placeholder.com/500x300",
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
    <div className="flex flex-wrap justify-center items-center p-8">
      <div className="flex flex-wrap justify-center items-center w-full max-w-7xl">
        {projects.map((project, index) => (
          <div key={index} className="relative w-72 h-56 m-4 rounded-lg overflow-hidden shadow-lg flex-shrink-0" onMouseOver={() => handleMouseOver(index)} onMouseLeave={() => handleMouseLeave()}>
            <img src={project.image} alt={project.name} className={`transform ${hoveredIndex === index ? "scale-110" : "scale-100"} transition-all duration-300`} />
            {hoveredIndex === index && (
              <a href={project.link} className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 text-white font-semibold text-lg transition-all duration-300">
                {project.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
