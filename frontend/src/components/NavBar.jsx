import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="inner-navbar">

                <Link to={"/"}><img src="/logo_rect@transHD.png" alt="Sandy Hill Physio Logo"/></Link>
                <div className="links">
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/pricing"}><li>Pricing</li></Link>
                        <Link to={"/contact"}><li>Contact Us</li></Link>
                        <Link to={"/services"}><li>Services</li></Link>
                        <Link to={"/online-physiotherapy"}><li>Online Physiotherapy</li></Link>
                        <Link to={"/register"}><li>Registration Form</li></Link>
                        {/* <li>Testimonials</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar