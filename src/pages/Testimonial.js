import React from 'react'
import { Helmet } from "react-helmet";

const Testimonials = () => {
    return (
        <>
            <Helmet>
                <title>Testimonial</title>
                <meta name="description" content='Testimonial Page' />
            </Helmet>
            <div className="testimonial" id="testimonials">
                <div className="container">
                    <div className="heading">
                        <h3 data-aos="zoom-in" >Testimonials</h3>
                    </div>
                    <div className="agileits-w3layouts-info">
                        <div className="testimonial-grid">
                            <div className="slider">
                                <div className="callbacks_container">
                                    <ul className="rslides" id="slider3">
                                        <li>
                                            <div data-aos="flip-down" className="col-md-6 testimonial-top">
                                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                <p> NARAYANA HOUSE, as defined by the name itself is a luxurious place to live in with
                                                    royal amenities and full-furnished interiors.
                                                    It feels like a second home where one can feel safe and enjoy the warmth.</p>
                                                <h5>Shreya Dubey <span>- Visitor</span></h5>
                                            </div>
                                            <div data-aos="flip-down" className="col-md-6 testimonial-top">
                                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                <p>It is just at a 5 minute walking distance from the UPES Biidholi Campus
                                                    which makes it truly feasible for college students.
                                                    The atmosphere is also so friendly that hosteling is made so easy and comfortable.</p>
                                                <h5>Amrita Singh <span>- Visitor</span></h5>
                                            </div>
                                            <div className="clearfix"></div>
                                        </li>
                                        <li>
                                            <div data-aos="flip-up" className="col-md-6 testimonial-top">
                                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                <p> NARAYANA HOUSE, as defined by the name itself is a luxurious place to live in with
                                                    royal amenities and full-furnished interiors.
                                                    It feels like a second home where one can feel safe and enjoy the warmth.</p>
                                                <h5>Shreya Dubey <span>- Visitor</span></h5>
                                            </div>
                                            <div data-aos="flip-up" className="col-md-6 testimonial-top">
                                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                <p>It is just at a 5 minute walking distance from the UPES Biidholi Campus
                                                    which makes it truly feasible for college students.
                                                    The atmosphere is also so friendly that hosteling is made so easy and comfortable.</p>
                                                <h5>Amrita Singh <span>- Visitor</span></h5>
                                            </div>
                                            <div className="clearfix"></div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <script>
								// You can also use "$(window).load(function() {"
								$(function () {
								  // Slideshow 4
								  $("#slider3").responsiveSlides({
									auto: true,
									pager:true,
									nav:false,
									speed: 500,
									namespace: "callbacks",
									before: function () {
									  $('.events').append("<li>before event fired.</li>");
									},
									after: function () {
									  $('.events').append("<li>after event fired.</li>");
									}
								  });
							
								});
							 </script> */}
                                {/* <!--banner Slider starts Here--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonials;