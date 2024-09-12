import { useState } from 'react'
import Navbar from './Component/Navbar'
import HeroSection from './Component/HeroSection'
import Write from './Component/write'
import Carousel from './Component/Carousel'
import Plan from './Component/Plan'
import Organize  from './Component/Organize'
import Aiapp from './Component/aiapp'
import Notion from './Component/notion'

function App() {
 

  return (
    <>
      <Navbar/>
      <HeroSection/>
     <Carousel/>
     <Plan/>
     <Write/>
     <Organize/>
     <Aiapp/>
     <Notion/>
    </>
  )
}

export default App
