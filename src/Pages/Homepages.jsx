import React from 'react'
import Home from '../Component/Home/Home'
import Manage from '../Component/Home/Manage'
import Mainfeatures from '../Component/Home/Mainfeatures'
import HowItsWorks from '../Component/Home/HowItsWorks'
import Contact from '../Component/Home/Contact'
import About from '../Component/Home/About'


function Homepages() {
  return (
    <div>
      
      <Home/>
      <Manage/>
      <Mainfeatures/>
      <HowItsWorks/>
      <Contact/>
      <About/>
    </div>
  )
}

export default Homepages
