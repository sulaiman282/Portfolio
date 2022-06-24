import React from 'react' 
import "./about.css";
import Typed from "react-typed"

import aboutbc from "../images/about-bc.gif"
import aboutbc1 from "../images/original.gif"

function About() {
    const about = require('../images/about.png')
    
    return (
        <section className='about' id='about-me'>
            <div className='content'>
                <img src={about} alt="" />

                <div className='text-about'>
                    <h1 className='header-about'>I AM A <Typed
                        className='typed-text1'
                        strings={["Software Engineer", "Web Developer", "Problem Solver","programmer", "Gamer"]}
                        typeSpeed={100}
                        backSpeed={60}
                        loop /></h1>
                    
                  
                    <p><br></br>Hi there,<br></br><br></br>I'm <span className='name-red'>Sk Sulaiman</span> from bangladesh. I am a Software Engineer and Web Developer. I completed my graduation from Daffodil International university in 2022. Currently i am working on React.js. I can make beautiful web font ends for you.<br></br><br></br></p>
                  
                    <a href="#" className='btn-main-offer2'>Contact Me</a>
                </div>
            </div>
            

        </section>


        
  
    )
};

export default About;