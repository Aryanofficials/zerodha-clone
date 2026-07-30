import React from 'react';
import Awards from "./Awards"
import Hero from "./Hero"
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Pricing from "./Pricing"
import Stats from "./Stats"
import Navbar from "../Navbar"
import Footer from "../Footer"

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;