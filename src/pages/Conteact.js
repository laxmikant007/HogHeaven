import React from 'react'
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>

        <title>Contact</title>
        <meta name="description" content='User Content Page'/>
      </Helmet>
      <div className="contact" id="contact">
        <div className="container">
          <div className="heading">
            <h3 data-aos="zoom-in" >Get In Touch</h3>
          </div>
        </div>
        <div className="w3layouts-grids">
          <div data-aos="flip-left" className="col-md-6 contact-left">
            <h3 data-aos="zoom-in" >Contact information</h3>
            <div className="contact-info">
              <div className="contact-info-left">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="contact-info-right">
                <h5>Address</h5>
                <p>Extended Stay Restaurant<br />/
                  <span>87th St,Kansas City</span>
                  Lenexa 241.
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="contact-info">
              <div className="contact-info-left">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="contact-info-right">
                <h5>Mobile</h5>
                <ul>
                  <li>+0(23) 954 566 7788</li>
                  <li>+0(23) 375 366 9945</li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="contact-info">
              <div className="contact-info-left">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="contact-info-right">
                <h5>E-Mail</h5>
                <ul>
                  <li><a href="mailto:example@mail.com">mail@example.com</a></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div data-aos="flip-right" className="col-md-6 contact-form">
            <form action="#" method="post">
              <input type="text" name="Name" placeholder="Name" required="" />
              <input type="email" className="email" name="Email" placeholder="Email" required="" />
              <div className="clearfix"> </div>
              <input type="text" className="phone" name="phone" placeholder="Phone Number" required="" />
              <textarea placeholder="Message" name="Message" required=""></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  )
}

export default Contact;