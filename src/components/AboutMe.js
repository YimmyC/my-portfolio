import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 20; // in milliseconds

  useEffect(() => {
    const pText =
      "Hi, I'm Jimmy, and I'm an aspiring web developer. I'm currently working hard to develop my skills and gain the experience I need to pursue a career in this field. I'm passionate about building websites and web applications that are both functional and visually appealing, and I love the challenge of problem-solving and troubleshooting that comes with this work. I'm currently enrolled in a full stack bootcamp, and I'm always looking for opportunities to expand my knowledge and skills. I'm also interested in connecting with other developers, mentors, and professionals in the field to learn from their experiences and insights.";
    let currentIndex = 0;
    let timeout;

    if (isTyping) {
      timeout = setTimeout(function type() {
        setText(pText.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === pText.length) {
          setIsTyping(false);
        } else {
          timeout = setTimeout(type, typingSpeed);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [isTyping, typingSpeed]);

  return (
    <div id="about" className="z-10 relative flex flex-col justify-center items-center bg-transparent shadow-md rounded-md p-6 w-full h-screen mx-auto">
      <h2 className="font-prompt text-9xl font-bold mb-4 text-center">About Me</h2>
      <p className="font-prompt text-gray-700 text-2xl mb-4">{text}</p>
    </div>
  );
};

export default AboutMe;
