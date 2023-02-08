import React from 'react'
import cards from "./cards";
import Section from './Section'
import Hero from './Hero';
import Newsletter from "./Newsletter";
import Footer from './Footer';
import Navbar from "./Navbar";
import Cards from './cards';
import { Card } from '@material-tailwind/react';

const Container = () => {
    return (
        <div>
            <Navbar />
        
        <Hero />
        <Cards />
        <Section />
        <Newsletter />
        <Footer />
        </div>
    )
}

export default Container;