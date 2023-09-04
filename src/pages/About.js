import React from 'react'
import {Helmet} from "react-helmet";

const About = () => { 
    return (
        <>
            <Helmet>

                <title>About</title>
                <meta name="keywords" content="NARAYANA HOUSE Responsive web, Bootstrap Web Template, Flat Web template,IOs , Android Compatible web page, 
                Smartphone Compatible web template" />
            </Helmet>
            <div className="about" id="about">
                <div className="container">
                    <div className="heading">
                        <h2 data-aos="zoom-in">About Us</h2>
                    </div>
                    <h4>About our Hostel</h4>
                    <p>Its the small things that make us different</p>
                    <div className="about-grids">
                        <div data-aos="zoom-in" className="col-md-4 aboutgrid1 ">
                            <h3> NARAYANA HOUSE Transport</h3>
                            <p>Quality without question,<br />We set the standards others try to live up to.<br />You call, we haul, that's all.</p>
                        </div>
                        <div data-aos="flip-right" className="col-md-4 aboutgrid2">
                            <img src="assets/images/about1.jpg" alt="" />
                        </div>
                        <div data-aos="zoom-in" className="col-md-4 aboutgrid3">
                            <h3> NARAYANA HOUSE<br />Gym</h3>
                            <p>Everyone Needs a Tune-up,<br />Your body hears everything that your mind says.<br />Don't stop till you drop!</p>
                        </div>
                        <div className="clearfix"></div>
                        <div data-aos="flip-right" className="col-md-4 aboutgrid4">
                            <img src="assets/images/about2.jpg" alt="" />
                        </div>
                        <div data-aos="slide-up" className="col-md-4 aboutgrid5">
                            <h3> NARAYANA HOUSE<br />Food</h3>
                            <p>Well maintained kitchen,<br />with high quality food prepared by trained chefs.<br />Quality service with fresh and clean environment.</p>
                        </div>
                        <div data-aos="flip-right" className="col-md-4 aboutgrid6">
                            <img src="assets/images/about3.jpg" alt="" />
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;
