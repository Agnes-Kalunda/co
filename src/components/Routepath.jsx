// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Newsletter from "./Newsletter";
// import Hero from "./Hero";
// import Cards from "./cards";
// import { Card } from "@material-tailwind/react";
// import Section from "./Section";

// const Container = () =>{
//     return (
//         <div>
//             <Navbar/>
//             <Hero/>
//             <Cards />
//             <Section/>
//             <Newsletter/>
//             <Footer />
//         </div>

//     )
// }

// export default Container;

import React from "react";
import cards from "./cards";
import Section from './Section'
import Hero from './Hero';
import Newsletter from "./Newsletter";
import Footer from './Footer';
import Navbar from "./Navbar";
import Container from './Container'
import Form from './Form'
import Company from './Company'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionContainer from "../SectionContainer";
import Marketing from "./Marketing";


function Routepath() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Container /> } />
                <Route path="/contact" element={ <Form /> } />
                <Route path="/testimonials" element={ <SectionContainer /> } />
                <Route path="/about" element={ <Company/>} />
                <Route path="/marketing" element={ <Marketing/> } />
            </Routes>
        </BrowserRouter>
    )

}

export default Routepath;