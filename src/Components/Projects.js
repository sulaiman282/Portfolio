import React from 'react'
import "./projects.css";



function Projects() {

    const about = require('../images/about2.png')

    return (
        <section class="projectlist" id='myprojects'>
        <div class="main">
                <div class="site-heading text-center">
                    <h2>MY <span>Projects</span></h2>
                    <h4>My Favourite Project Is Always The Next One</h4>
                </div>
            <ul class="cards">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={about} alt="" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Hotel Management System</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={about} alt="" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Spidy -Ecommerce</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={about} alt="" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Portfolio - Sulaiman</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={about} alt="" /></div>
                        <div class="card_content">
                            <h2 class="card_title">CARMENT- Buy & Sell Cars</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={about} alt="" /></div>
                        <div class="card_content">
                            <h2 class="card_title">SOFTWARE MANAGEMENT SYSTEM</h2>
                            <p class="card_text">This project is made with html,css,bootstrap & react.js</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={about} alt="" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Student Portal</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        </section>


    )
};

export default Projects;