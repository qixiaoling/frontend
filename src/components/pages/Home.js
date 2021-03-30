import React, {Component} from 'react'
import axios from "axios";
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

    componentDidMount() {

        const config = {
            headers: {
                Authorization: localStorage.getItem('token')

            }

        };
        console.log(config)


        axios.get('/customers', config).then(
            res => {
                this.setState({
                    user: res.data
                });
            },
            err =>{
                console.log(err)
            }
        )
    };
     render(){
         // if(this.state.user){
         //     return (
         //         <h2>Hi {this.state.user.username}</h2>
         //     )
         // };

         return(
             <>

                 <HeroSection />
                 <Cards />
             </>
         )
     }

}
export default Home
