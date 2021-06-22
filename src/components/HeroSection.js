import React, {Component} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import '../road.jpg';
import '../video.mp4';

class HeroSection extends Component{
    render(){
        return (
            <div className='hero-container'>
                <h1>We are profesional</h1>
                <br/>
                <p>We are our customers' go-to!</p>
                <br/>
                <div>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Grow with us
                    </Button>
                </div>
            </div>
        );
    }

}

export default HeroSection;