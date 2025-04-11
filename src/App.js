import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Home from "./Component/Home/Home";
import Manage from "./Component/Home/Manage";
import Mainfeatures from "./Component/Home/Mainfeatures";
import HowItsWorks from "./Component/Home/HowItsWorks";
import About from "./Component/Home/About";
import Contact from "./Component/Home/Contact";
import Fotter from "./Common/Fotter";
import Download from "./Component/Home/Download";
import BookDemo from "./Component/Demo/BookDemo";
function HomeLayout() {
  return (
    <>
      <Home />
      <Manage />
      <Mainfeatures />
      <About />
      <HowItsWorks />
      <Download />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}
