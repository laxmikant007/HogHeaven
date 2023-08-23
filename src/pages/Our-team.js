import React from 'react'
import { Helmet } from "react-helmet";

const Team = () => {
    return (
        <>
            <Helmet>
                <title> Our Team</title>
                <meta name="description" content='Team Page' />
            </Helmet>
            <div className="team" id="team">
                <div className="container">
                    <div className="heading">
                        <h3 data-aos="zoom-in" >Team</h3>
                    </div>
                    <div className="agile_team_grids">
                        <div data-aos="fade-up" className="col-md-3 agile_team_grid">
                            <div className="ih-item circle effect1">
                                <div className="spinner"></div>
                                <div className="img"><img src="assets/images/team1.jpg" alt=" " className="img-responsive" /></div>
                                <div className="info">
                                    <div className="info-back">
                                        <h4>Hostel Owner</h4>
                                        <p>loremdolor</p>
                                    </div>
                                </div>
                            </div>
                            <h4>James Roy</h4>
                            <p>Fusce eu semper lacus, sodales id elit a, feugiat porttitor nulla lacinia.</p>
                            <div className="social-icons team-icons">
                                <ul>
                                    <li><a href="#" className="fa fa-facebook"> </a></li>
                                    <li><a href="#" className="fa fa-twitter"> </a></li>
                                    <li><a href="#" className="fa fa-google"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="slide-up" className="col-md-3 agile_team_grid">
                            <div className="ih-item circle effect1">
                                <div className="spinner"></div>
                                <div className="img"><img src="assets/images/team2.jpg" alt=" " className="img-responsive" /></div>
                                <div className="info">
                                    <div className="info-back">
                                        <h4>Hostel Manager</h4>
                                        <p>loremdolor</p>
                                    </div>
                                </div>
                            </div>
                            <h4>John Deol</h4>
                            <p>Fusce eu semper lacus, sodales id elit a, feugiat porttitor nulla lacinia.</p>
                            <div className="social-icons team-icons">
                                <ul>
                                    <li><a href="#" className="fa fa-facebook"> </a></li>
                                    <li><a href="#" className="fa fa-twitter"> </a></li>
                                    <li><a href="#" className="fa fa-google"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="slide-up" className="col-md-3 agile_team_grid t3">
                            <div className="ih-item circle effect1">
                                <div className="spinner"></div>
                                <div className="img"><img src="assets/images/team3.jpg" alt=" " className="img-responsive" /></div>
                                <div className="info">
                                    <div className="info-back">
                                        <h4>Warden</h4>
                                        <p>loremdolor</p>
                                    </div>
                                </div>
                            </div>
                            <h4>Edward Cren</h4>
                            <p>Fusce eu semper lacus, sodales id elit a, feugiat porttitor nulla lacinia.</p>
                            <div className="social-icons team-icons">
                                <ul>
                                    <li><a href="#" className="fa fa-facebook"> </a></li>
                                    <li><a href="#" className="fa fa-twitter"> </a></li>
                                    <li><a href="#" className="fa fa-google"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-md-3 agile_team_grid t4">
                            <div className="ih-item circle effect1">
                                <div className="spinner"></div>
                                <div className="img"><img src="assets/images/team4.jpg" alt=" " className="img-responsive" /></div>
                                <div className="info">
                                    <div className="info-back">
                                        <h4>Mess Incharge</h4>
                                        <p>loremdolor</p>
                                    </div>
                                </div>
                            </div>
                            <h4>Lisaen Eddy</h4>
                            <p>Fusce eu semper lacus, sodales id elit a, feugiat porttitor nulla lacinia.</p>
                            <div className="social-icons team-icons">
                                <ul>
                                    <li><a href="#" className="fa fa-facebook"> </a></li>
                                    <li><a href="#" className="fa fa-twitter"> </a></li>
                                    <li><a href="#" className="fa fa-google"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;