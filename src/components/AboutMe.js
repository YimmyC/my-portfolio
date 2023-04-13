import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
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

  const handleClick = () => {
    setIsTyping(true);
  };

  useEffect(() => {
    if (text !== "" && !textShown) {
      setTextShown(true);
    }
    if (textShown) {
      setTimeout(() => {
        setShowArrow(true);
      }, 1000);
    }
  }, [text, textShown]);

  return (
    <div id="about" className="z-10 relative flex flex-col justify-center items-center bg-transparent shadow-md rounded-md p-6 w-full h-screen mx-auto">
      <h2 className="font-prompt lg:text-9xl md:text-9xl text-6xl font-bold mb-4 text-center" style={{ padding: "0 1rem" }}>
        About Me
      </h2>
      {!textShown && (
        <span className="font-prompt text-black underline cursor-pointer" onClick={handleClick}>
          Click to read
        </span>
      )}
      <p className="font-prompt text-black text-2xl mb-4" style={{ textShadow: "1px 1px 20px #4f4e4e", fontSize: "1.5rem" }}>
        {text}
      </p>
      {showArrow && (
        <div className="animate-fade-in absolute bottom-6 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v9.5l3.22-3.22a.75.75 0 0 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06L9.25 13.25V3.75A.75.75 0 0 1 10 3z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
