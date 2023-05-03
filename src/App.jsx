/* import { useState } from 'react' */
import { Routes, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";

/* Pages */
import Home from "./pages/Home";


/* CSS */
import './App.css'



function App() {
  

  return (
    <>

      <Navbar/>      

      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
      
     
      
    </>
  )
}

export default App
