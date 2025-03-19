import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Home from "./Component/Home/Home";
import Manage from "./Component/Home/Manage";
import Mainfeatures from "./Component/Home/Mainfeatures";
import HowItsWorks from "./Component/Home/HowItsWorks";
import About from "./Component/Home/About";
import Contact from "./Component/Home/Contact";
import Fotter from "./Common/Fotter";
import Download from "./Component/Home/Download";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />

      <Manage />
      <Mainfeatures />
      <HowItsWorks />

      <About />
      <Download />
      <Contact />
      <Fotter />
    </BrowserRouter>
  );
}
