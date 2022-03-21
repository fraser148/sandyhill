import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Services = () => {

    return (
        <div className="main-container">
            <NavBar />
            
            <section className="common-header">
                <div className="inner-header">
                    <h1>Our Services</h1>
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
                                    <img src="./stretch2.png" alt="stretch" className="upshift"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content backer left">

                                    <h1>Physiotherapy</h1>
                                    <p>
                                    For over 25 years, Sandy Hill Physio has worked towards gaining a deeper understanding in the health of movement.  Combining functional biomechanics with current neuroscience research, we aim for best practice in our movement assessment, treatment and rehabilitation.
                                    </p>
                                    <p>
                                    Our physio’s have years of experience and expertise at diagnosing and treating mechanical problems that affect your body. 
                                    </p>
                                    <p>
                                    Believing there is no <i>“one-size-fits-all”</i> approach to healing, we have a <b>hands-on, individualized approach </b>to your evaluation and treatment.
                                    </p>
                                    <p>
                                    We actively listen to you and with your specific needs in mind, together we can make a plan to help heal your body, strengthening you so that you move well and get back to the life you enjoy. 
                                    </p>
                                    <Link to={"/contact/physiotherapy"}>Enquire</Link>
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
                                    <h1>Acupuncture</h1>
                                    <p>
                                        Acupuncture is an <b>effective treatment</b> for many conditions including headache, neck pain, frozen shoulder, tennis elbow, low back pain and sinusitis.
                                        Acupuncture can be used as an alternative in treating most conditions that affect the body.
                                    </p>
                                    <p>
                                        Using findings from current research the physiotherapists successfully use acupuncture in the treatment of painful joint and muscle problems as well as headaches and chronic pain. The focus is on drug-free pain relief and maximum function. All acupuncture therapists are registered with the Acupuncture Association of Chartered Physiotherapists.
                                    </p>
                                    <p>
                                    Please call with any questions you may have regarding the use of acupuncture in treating a particular condition. 
                                    </p>
                                    <Link to={"/contact/acupuncture"}>Enquire</Link>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <img src="./acupuncture.jpg" alt="stretch"/>
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
                                <div className="content">
                                    <img src="./massaging.png" alt="stretch" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content backer right">
                                    <h1>Massage</h1>
                                    <p>
                                    Massage can be dynamic and very active or gentle and destressing so can help in a wide variety of conditions from frozen shoulder, muscle spasms or sciatica to stress based digestive issues, constipation or lack of sleep. It can be a vital part of a wholistic approach to your wellbeing. 
                                    </p>
                                    <Link to={"/contact/massage"}>Enquire</Link>
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
                                    <h1>Pilates</h1>
                                    <p>
                                    A method of exercise which rebalances your body,  improves your strength, flexibility, posture, body awareness and stamina. With this strong focus on good posture and body awareness, clinical pilates is an excellent programme for general health and injury prevention as well as for rehabilitation. Instruction is from a qualified therapist on an individual or small group basis.
                                    </p>
                                    <p>
                                        <b>Small classes and individual attention</b> in a relaxed atmosphere are key to benefitting fully and enjoying pilates.
                                    </p>
                                    <p>
                                    For more information please visit Kathryn’s website at <a href={"https://www.pilatespluscornwall.co.uk"}>pilatespluscornwall.co.uk</a>
                                    </p>
                                    <Link to={"/contact/pilates"}>Enquire</Link>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <img src="./pilates.png" alt="stretch" />
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
                                <div className="content">
                                    <img src="./yoga2.png" alt="stretch" className="upshift"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content backer right">
                                    <h1>Yoga</h1>
                                    <p>
                                        At Human Compass, we believe that every human has the potential to expand the quality of their lives.
                                    </p>
                                    <p>
                                    This potential is often limited by physical, mental or energy blocks. Human Compass supports <i>YOU</i>, the individual, to find your own true north, expanding your understanding of that which is holding you back, to achieve relaxed movement, clear mind and vital energy. 
                                    </p>
                                    <p>
                                    Through regular yoga practice, <b>the rewards are immeasurable.</b>
                                    </p>
                                    <Link to={"/contact/yoga"}>Enquire</Link>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                    </div>
                </section>

                <Footer />
            </div>
    )
};

export default Services;