import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <div className="main">

                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="footer-widget">
                                <h3>Sandy Hill Physiotherapy</h3>
                                <a href="tel:0172667567">01726 67567</a>
                                <a href="mailto:helpme@sandyhillphysio.co.uk">helpme@sandyhillphysio.co.uk</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-widget">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>Book Appointment</li>
                                    <li>Privacy Policy</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                        <div className="footer-widget">
                                <h4>Services</h4>
                                <ul>
                                    <Link to="/services/physiotherapy"><li>Physiotherapy</li></Link>
                                    <Link to="/services/acupuncture"><li>Acupuncture</li></Link>
                                    <Link to="/services/massage"><li>Massage</li></Link>
                                    <Link to="/services/pilates"><li>Pilates</li></Link>
                                    <Link to="/services/yoga"><li>Yoga</li></Link>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                        <div className="footer-widget">
                                <h4>Opening Hours</h4>
                                <table>
                                    <tbody>
                                        <tr><td>Monday</td><td>08:30 - 18:00</td></tr>
                                        <tr><td>Tuesday</td><td>08:30 - 18:00</td></tr>
                                        <tr><td>Wednesday</td><td>08:30 - 18:00</td></tr>
                                        <tr><td>Thursday</td><td>08:30 - 18:00</td></tr>
                                        <tr><td>Friday</td><td>08:30 - 18:00</td></tr>
                                        <tr><td>Saturday</td><td>Closed</td></tr>
                                        <tr><td>Sunday</td><td>Closed</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="main">
                    <span>Designed and Developed by Saura Digital Media | &copy; {year}</span>
                </div>
            </div>
        </>
    )
}

export default Footer;