import React, {Component} from 'react'
import '../../App.css'
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

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
