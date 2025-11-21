import React from 'react';
import Navbar from './Navbar';
import './Homefile.css'

export default function Homefile(){
    return(
        <div className="portfolio-container">
            <Navbar/>
            <div className="grid-container">
                <div className="info">
                    <h1>Hi, I'm Zusange Mbaleki</h1>
                    <h4>a Front-end developer learner at SheCodes</h4>
                </div>
                <div className="self-image">
                    <img src="https://www.womenintech.co.uk/wp-content/uploads/2022/09/Women-in-coding.png.webp" alt="coding woman"/>
                </div>
            </div>
        </div>
    )
}