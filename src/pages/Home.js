import React from 'react'
import About from './About';
import Team from './Our-team';
import Facilities from './Our-fecalities';
import Testimonials from './Testimonial';
import Contact from './Conteact';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const Home = () => {
    return (
        <>
            <Helmet>

                <title>My Title</title>
                <meta name="keywords" content="Aura Girls Hostel Responsive web, Bootstrap Web Template, Flat Web template, Android Compatible web page, 
Smartphone Compatible web template" />
            </Helmet>
            {/* <!-- banner --> */}
            <div id="home" className="w3ls-banner">

                <div className="slider">
                    <div className="callbacks_container">
                        <ul className="rslides callbacks callbacks1" id="slider4">
                            <li>
                                <div className="w3layouts-banner-top">
                                    <div className="banner-dott">
                                        <div className="container">
                                            <div data-aos="fade-left" className="agileits-banner-info">
                                                <h3>Welcome to AURA</h3>
                                                <h3>Girls Hostel</h3>
                                                <p style={{ fontSize: "15px" }}>A New Dimension of Luxury</p>
                                                <div className="agileits_w3layouts_more menu__item">
                                                    <Link to="" className="menu__link" data-toggle="modal" data-target="myModal">Learn More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3layouts-banner-top w3layouts-banner-top1">
                                    <div className="banner-dott">
                                        <div className="container">
                                            <div data-aos="fade-left" className="agileits-banner-info">
                                                <h3>Welcome to AURA</h3>
                                                <h3>Girls Hostel</h3>
                                                <p style={{ fontSize: "15px" }}>A New Dimension of Luxury</p>
                                                <div className="agileits_w3layouts_more menu__item">
                                                    <Link to="" className="menu__link" data-toggle="modal" data-target="myModal">Learn More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3layouts-banner-top w3layouts-banner-top2">
                                    <div className="banner-dott">
                                        <div className="container">
                                            <div data-aos="fade-left" className="agileits-banner-info">
                                                <h3>Welcome to AURA</h3>
                                                <h3>Girls Hostel</h3>
                                                <p style={{ fontSize: "15px" }}>A New Dimension of Luxury</p>
                                                <div className="agileits_w3layouts_more menu__item">
                                                    <Link to="" className="menu__link" data-toggle="modal" data-target="myModal">Learn More</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>

                </div>
                <div className="thim-click-to-bottom">
                    <div className="rotate">
                        <a href="#about" className="scroll">
                            <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

            </div>

            <About />
            <Team />
            <Facilities />
            <Testimonials />
            <Contact />




        </>
    )
}

export default Home;
