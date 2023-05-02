/* import { useState } from 'react' */
import { Routes, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";

/* Pages */
import Home from "./pages/Home";


/* CSS */
import './App.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

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
