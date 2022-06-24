import React from 'react'
import "./contact.css";



function Projects() {


    return (
        <div class="contact-me" id="contact-me">
        <section class="mb-4 container" >


            <h1 class="h1-responsive font-weight-bold text-center2 my-4">Contact us</h1>

            <p class="text-center w-responsive mx-auto mb-5">Don't Hesitate to ask me a question</p>
                <div class="info-sk column">
                   

                 
                       <span></span> <i class="fa-solid fa-phone"></i>
                        <span>+880 1856077645</span>
                

                    
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Dhaka,Bangladesh</span>
               

                    <br></br>
                        <i class="fa-solid fa-envelope"></i>
                        <span>spidy.twitch.tv@gmail.com</span>
                 
            </div>
            <div class="row">


                <div class="col-md-12 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                        <div class="row">


                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control"></input>
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>



                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control"></input>
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>


                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control"></input>
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>


                        <div class="row">


                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>


                    </form>

                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </div>

            </div>

         
        </section>
            <div className='footer-last'>
    
                
                <footer class="footer">
                    <div class="waves">
                        <div class="wave" id="wave1"></div>
                        <div class="wave" id="wave2"></div>
                        <div class="wave" id="wave3"></div>
                        <div class="wave" id="wave4"></div>
                    </div>
                    <ul class="social-icon">
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                    </ul>
                    <ul class="menu">
                        <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">About</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                        <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

                    </ul>
                    <p>&copy;2022 Sk Sulaiman | All Rights Reserved</p>
                </footer>



            </div>
            
</div>


    )
};

export default Projects;