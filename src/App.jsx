/* import { useState } from 'react' */
import { Routes, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";


/* CSS */
import './App.css'



function App() {
  

  return (
    <>

      <Navbar/>      

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      </Routes>

      
      <Footer/>

     
      
    </>
  )
}

export default App
