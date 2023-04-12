import Header from "./components/Header";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Particles from "./components/Particles";

function App() {
  return (
    <div>
      {/* <Particles className="particles" /> */}

      <Header />
      <AboutMe />

      <Work />

      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
