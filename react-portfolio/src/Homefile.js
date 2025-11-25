import React from 'react';
import Navbar from './Navbar';
import githubLogo from './icons8-github-logo-64.png';
import linkedinLogo from './icons8-linkedin-logo-50.png';
import instagramLogo from './icons8-instagram-logo-64.png';
import myImage from './my-image.png';

import './Homefile.css'

export default function Homefile(){
    return(
       
        <div className="portfolio-container bg-dark">
            <Navbar/>
            <div className="grid-container">
                <div className="info">
                    <h1>Hi, I'm Zusange Mbaleki</h1>
                    <h4>a Front-end developer learner at SheCodes</h4>
                    <br/>
                    <p>I’m a front-end developer with recent training from the SheCodes workshop.</p><p> I love creating clean, responsive websites that deliver a smooth user experience.
                    </p>
                </div>
                <div className="self-image"> 
                    <img src={myImage} className="my-image img-fluid"alt="coding woman"/>
                   
                    
                </div>
                
                <div className="handles">
                    
                    <a href="https://www.instagram.com/zusange.m02">
                        <img src={instagramLogo} alt="insta"/>
                    </a>
                    <a href="https://github.com/sange371" >
                        <img src={githubLogo} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/zusange-mbaleki-517533357/">
                        <img src={linkedinLogo} alt="linkedin" />
                     </a>  
                </div>
            </div>
        </div>
      
    )
}