import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <div className="main">

                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="footer-widget">
                                <h3>Sandy Hill Physiotherapy</h3>
                                <a href="tel:0172667567">01726 67567</a>
                                <a href="mailto:helpme@sandyhillphysio.co.uk">helpme@sandyhillphysio.co.uk</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-widget">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>Book Appointment</li>
                                    <li>Privacy Policy</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4}>
                        <div className="footer-widget">
                                <h4>Services</h4>
                                <ul>
                                    <li>Physiotherapy</li>
                                    <li>Acupuncture</li>
                                    <li>Massage</li>
                                    <li>Pilates</li>
                                    <li>Yoga</li>
                                </ul>
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