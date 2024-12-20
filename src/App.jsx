import { useState } from 'react'
 
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from './components/Home/Home'

function App() {
   

  return (
    <>
    <Navbar/>
    <Home/>
    
      
    </>
  )
}

export default App
