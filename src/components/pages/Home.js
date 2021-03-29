import React from 'react'
import '../../App.css'
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Login from "../Login";

function Home() {
    return(
        <>
            <Login />
            <HeroSection />
            <Cards />
        </>
    )
}
export default Home