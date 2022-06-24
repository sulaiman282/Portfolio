import React from 'react';
import "./header.css";
import Typed from "react-typed"
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";



 function Header() {

    
     const particlesInit = async (main) => {
         console.log(main);

         // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
         // starting from v2 you can add only the features you need reducing the bundle size
         await loadFull(main);
     };

     const particlesLoaded = (container) => {
         console.log(container);
     };


     return (
        
        <div className="header-wraper" >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.6,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#FF0000",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 900,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",

                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="main-info" >
             

                <h1>Sk Sulaiman</h1>
                <Typed
                    className='typed-text'
                    strings={["Software Engineer", "Web Developer", "Problem Solver", "Gamer"]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop />
                
                <a href="#" className='btn-main-offer'>Contact Me</a>
            </div>

        
            
            
        </div>
    );
}

export default Header;