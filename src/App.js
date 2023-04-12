import Header from "./components/Header";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/Particles";
import { Routes, Route } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import tune from "./assets/itsawar.mp3";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.play();
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <ParticlesBackground style={{ position: "absolute", top: 0, left: 0, zIndex: -1, mixBlendMode: "screen" }} />

      <Header style={{ position: "relative", zIndex: 1 }} />
      <AboutMe style={{ position: "relative", zIndex: 1 }} />
      <Work style={{ position: "relative", zIndex: 1 }} />
      <Contact style={{ position: "relative", zIndex: 1 }} />
      <ReactAudioPlayer id="audio" src={tune} autoPlay controls />
      <Footer style={{ position: "relative", zIndex: 1 }} />
    </div>
  );
}

export default App;
