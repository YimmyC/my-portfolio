import React from "react";
import ResumeDl from "../assets/James-Cassano.pdf";

const Resume = () => {
  return (
    <div id="resume" className="z-10 relative flex flex-col justify-center items-center bg-transparent shadow-md rounded-md p-6 w-full h-screen mx-auto">
      <h2 className="font-prompt text-5xl md:text-9xl font-bold mb-4 text-center">Resume</h2>
      <a href={ResumeDl} download className="font-prompt text-blue-500 text-base mb-2 hover:text-blue-700 focus:outline-none">
        Download my resume
      </a>
      <ul className="list-disc list-inside mb-4">
        {/* <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        <li>Proficiency 4</li> */}
      </ul>
    </div>
  );
};

export default Resume;
