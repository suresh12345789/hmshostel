import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Home from './Pages/Homepages';
import Contact from './Component/Home/Contact';
import Fotter from './Common/Fotter';
import About from './Component/Home/About';

export default function App() {
  return (
    <BrowserRouter>

    <Navbar/>


            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Contact" element={<Contact/>} />
          
          
              {/* <Route path="/Blog" element={<Blog />} />

              <Route path="/Commercial" element={<Commercial/>} />
              <Route path="/Company"element={<Company/>}/>
              <Route path="/Shop"element={<Shop/>}/>
              <Route path="/Technology"element={<Technology/>}/>
              <Route path="/StyleComp"element={<StyleComp/>}/>
              <Route path="/Styled"element={<Styled/>}/> */}



            </Routes>
            <Fotter/>
           

          </BrowserRouter>)
}