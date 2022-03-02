import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="main-container">
            <NavBar />
            
                <section className="header">
                    <div className="inside-header">
                        <h1>Sandy Hill Physiotherapy</h1>
                        <p>
                            Dedicated to providing hands-on physical therapy since 1999
                        </p>
                    </div>
                </section>
                <section className="steps">
                    <div className="main">
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <div className="step">
                                        <img src="yoga.png" alt="step"/>
                                        <h4>Yoga</h4>
                                        <p>
                                            At Human Compass, we believe that every human has the potential to expand the quality of their lives
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="step">
                                        <img src="physio.png" alt="step"/>
                                        <h4>Physiotherapy</h4>
                                        <p>
                                            Our physio's have years of experience and expertise at diagnosing and treating mechanical problems that affect your body. 
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="step">
                                        <img src="massage.png" alt="step"/>
                                        <h4>Massage</h4>
                                        <p>
                                            Massage can be dynamic and very active or gentle and destressing so can help in a wide variety of conditions 
                                        </p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </section>
                <div className="homepage-content">
                    

                </div>
                <section className="reviews">
                    <div className="main">

                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="content">
                                    <img src="./runner.png" alt="runner"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content backer left">

                                    <h1>A little bit about us</h1>
                                    <p>
                                        As providers of physiotherapy in <b>Cornwall for over 25 years</b>, our reputation has not been built on luck. It has been built on our daily commitment to the needs of our patients and clients. 
                                    </p>
                                    <p>
                                        Our growth to being the <b>largest physiotherapy practice in Cornwall</b> speaks to the loyalty of our patients and the positive outcomes they have experienced through Sandy Hill Physio.
                                    </p>    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </section>
                <section className="reviews">
                    <div className="main">

                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="content backer right">

                                    <h1>Largest physiotherapy provider in Cornwall</h1>
                                    <p>
                                        We are dedicated to providing hands-on physical therapy <i>(with integrity and accountability)</i>, to ensure the best possible patient results. 
                                        </p>
                                        <p>
                                        Whether you have suffered a sports injury, were injured at work, or strained your body at home, our physios will get you back to doing the things you love.
                                        </p>  
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <img src="./stretch2.png" alt="stretch" className="upshift"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </section>

                <Footer />
            </div>

    )
}

export default Home;