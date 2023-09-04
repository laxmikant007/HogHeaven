import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Footer = () => {
  return (
    <>
               <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99285.8587671662!2d-94.77019988161892!3d38.95406778222139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ec985fa46073%3A0x178f7880c66a7a55!2sExtended+Stay+America+Hotel+Kansas+City+-+Lenexa+-+87th+St.!5e0!3m2!1sen!2sin!4v1494659289602"></iframe>
            </div>


            {/* <!-- subscribe --> */}
            <div className="agileits_w3layouts_banner_info">
                <div className="container">
                    <div data-aos="flip-right" className="col-md-7 subscribe-left">
                        <h3>Subscribe to get the latest updates right to your inbox</h3>
                    </div>
                    <div data-aos="flip-left" className="col-md-5 subscribe-right">
                        <form action="#" method="post">
                            <input type="email" name="email" placeholder="Enter your Email..." required="" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>

            {/* 
<!-- copyright --> */}
            <div className="copyright">
                <div className="copyrighttop">

                    <ul>
                        <li><h4>Follow us on:</h4></li>
                        <li><a className="facebook" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a className="facebook" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a className="facebook" href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                        <li><a className="facebook" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="copyrightbottom">
                    <p>© 2023 NARAYANA HOUSE. All rights reserved</p>
                </div>
                <div className="clearfix"></div>
            </div>


            {/* <!-- bootstrap-modal-pop-up --> */}
            <div className="modal video-modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        NARAYANA HOUSE
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <img src="assets/images/auraback.jpg" alt=" " className="img-responsive" />
                            <p>Royal living has been our Moto.
                                We provide the best possible service available.You choose and we guarentee your comfort.<br />
                                24*7 power backup<br />
                                Parking facility<br />
                                Double sharing and triple sharing room<br />
                                Solar and Electric water heating system<br />
                                Both veg and non veg cuisine<br />
                                Dual band wifi routers on inverter<br />
                                Medical support<br />
                                On demand cab service
                                <i>" ROYAL LIVING AT YOUR COMFORT AND OUR COST "</i></p>
                        </div>
                    </div>
                </div>
            </div>
            

    </>
  )
}

export default Footer;
