// import Section from "./components/Section";
// import Navbar from "./components/Navbar";
import Cards from "./components/cards";
// import Hero from "./components/Hero";
// import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
    return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/home' element={<Navbar />} />
          <Route path='/section' element={<Section />} /> */}
          <Route path='/cards' element={<Cards />} /> 
          <Route path='/footer' element={<Footer />} />
        </Routes>
      
      </BrowserRouter>
    )
    
}

export default AppRouter;