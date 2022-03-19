import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="inner-navbar">

                <img src="logo_rect@transHD.png" alt="Sandy Hill Physio Logo"/>
                <div className="links">
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/pricing"}><li>Pricing</li></Link>
                        <Link to={"/contact"}><li>Contact Us</li></Link>
                        <li>Services</li>
                        <li>Online Physiotherapy</li>
                        <li>Registration Form</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar