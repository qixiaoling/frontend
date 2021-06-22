import React, {Component} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import '../road.jpg';
import '../video.mp4';
import {Link} from "react-router-dom";

class HeroSection extends Component{
    render(){
        return (
            <div className='hero-container'>
                <h1>We are professional</h1>
                <br/>
                <p>We are our customers' go-to!</p>
                <br/>
                <div>
                    <Link to='/sign-in' className='btn-mobile'>
                    <Button
                        className='btn'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Grow with us
                    </Button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default HeroSection;