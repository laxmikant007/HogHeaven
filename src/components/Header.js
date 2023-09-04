import React from 'react'
import { Link } from 'react-router-dom';
 const Header = () => {
  return (
    <>
    <div className="header-w3layouts">
                {/* <!-- Navigation --> */}
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">AuraHostel</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="rw-words rw-words-1">
                                <h1><a className="navbar-brand" href="index.html">
                                    <span style={{ Color: '#DAB83F' }}>Aura</span>
                                    <span>Girls</span>
                                    <span>hostel</span>
                                </a></h1>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">

                                <li className="hidden"><a className="page-scroll scroll" href="#page-top"></a>	</li>
                                <li><Link className="page-scroll scroll" to="/">Home</Link></li>
                                <li><Link className="page-scroll scroll" to="about">About</Link></li>
                                <li><Link className="page-scroll scroll" to="team">Our Team</Link></li>
                                <li><Link className="page-scroll scroll" to="facility">Our Facilities</Link></li>
                                <li><Link className="page-scroll scroll" to="testimonials">Testimonials</Link></li>
                                <li><Link className="page-scroll scroll" to="contact">Contact</Link></li>
                                <li><Link className="page-scroll scroll" to="best-hostels">Best Hostel</Link></li>

                            </ul>
                        </div>

                    </div>

                </nav>
            </div>
    </>
  )
}

export default Header;
