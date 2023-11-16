import { useState } from 'react'
import './App.css'
import FirstPage from './Components/FirstPage'
import Navbar from './Components/Navbar'
import Slide from './Components/Slide'
import Slide_2 from './Components/Slide_2'
function App() {
  
  return (
    <>

        <Navbar></Navbar>
        <FirstPage></FirstPage>
        <Slide ></Slide><br/><br/>
    <Slide_2></Slide_2>
    </>
  )
}

export default App
