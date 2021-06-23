import React, {Component} from 'react'
import '../../App.css'
import HeroSection from "../HeroSection";
import Cards from "../Cards";

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
             </>
         )
     }

}
export default Home
