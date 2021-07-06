import React, {Component} from 'react'
import '../App.css'
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import Footer from "./Footer"

class Home extends Component {

     render(){
         return(
             <>
                 <HeroSection />
                 <Cards />
                 <Footer/>
             </>
         )
     }

}
export default Home
