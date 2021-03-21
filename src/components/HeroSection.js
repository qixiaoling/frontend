import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import '../jasper-geys-NyRe1Mj1pm4-unsplash.jpg';
import '../video.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='../jasper-geys-NyRe1Mj1pm4-unsplash.jpg' />
            <h1>We are profesional</h1>
            <p>We are our customers' go-to!</p>
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

export default HeroSection;