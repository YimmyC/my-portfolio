import Header from "./components/Header";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Work />
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
