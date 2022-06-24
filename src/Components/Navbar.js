import React from 'react'
import logo from "../images/logo.png"
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark navtop">
            <div className='container'>

                <a className="navbar-brand" href="#"><img src={logo} alt="Logo" className='rounded-circle border border-danger logo' />
                </a>
                <a className="nav-item" href="#"><span className='text-light me-2 fw-bold btn btn-default logo-name1'>Sulaiman</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className='bars1'/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link  float-right" aria-current="page" href="#">home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#myservices">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#myprojects">my projects</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-me">contacts</a>
                        </li>



                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default Navbar