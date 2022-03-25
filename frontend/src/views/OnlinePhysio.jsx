import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const OnlinePhysio= () => {

    return (
        <div className="main-container">
            <NavBar />
            
            <section className="common-header">
                <div className="inner-header">
                    <h1>Online Physiotherapy</h1>
                </div>
            </section>
                <div className="homepage-content">
                    

                </div>
                <section className="reviews" id="online-physiotherapy">
                    <div className="main">

                    <Container>
                        <Row>
                            <Col md={8}>
                                <div className="content left">

                                    <h1>About our online service</h1>
                                    <p>
                                        Online consultations will be face to face via webcam and will last for the duration of your usual appointment. Your appointment will be booked through <a href="mailto:helpme@sandyhillphysio.co.uk">helpme@sandyhillphysio.co.uk</a> or <a href="http://tel:0172667567">01726 67567</a> as usual and you should provide contact details for your video call when you book. Your physio will then call you at the time of your appointment in order to undertake your consultation.
                                        
                                        We support a number of free mobile and computer video calling platforms - please let us know your preference when you book:
                                    </p>
                                    <ul>
                                        <li>Facebook Messenger</li>
                                        <li>Whatsapp</li>
                                        <li>FaceTime</li>
                                        <li>Zoom</li>
                                        <li>Skype</li>
                                    </ul>
                                    <p>
                                        To assist you in getting the maximum benefit from your consultation, it’s important to familiarise yourself with the process. We will send an email prior to your consultation with pointers for how to have a good online consultation.
                                    </p>
                                    <h3>The Assessment</h3>
                                    <p>
                                        Like any regular assessment, your therapist will need to ask a series of specific questions to fully understand the nature of your complaint.
                                    </p>
                                    <p>
                                        You may also perform a series of physical movements and tests to assist with your diagnosis. Please make sure that you call from a room in which you have space to perform your exercises and are wearing clothing that will allow you to perform these exercises.
                                    </p>
                                    <h3>The Treatment</h3>
                                    <p>
                                    After achieving a clear diagnosis, your therapist will provide in-depth explanation and education to ensure that you have an understanding of:
                                    </p>
                                    <ul>
                                        <li>What your injury is</li>
                                        <li>Why it occurred</li>
                                        <li>Likely lifestyle factors involved in your injury</li>
                                        <li>Recommendations for work and activity going forwards</li>
                                        <li>Estimated time of recovery</li>
                                    </ul>
                                    <p>
                                        The physiotherapist will then draw up your individual exercise programme tailored specifically to your needs. These exercises typically focus on improving any deficits in strength, mobility, posture and body mechanics.
                                    </p>
                                    <h3>The on-going Support</h3>
                                    <p>
                                        Physiotherapy is not just about assessments, diagnoses, education and treatment, it’s also about support and you will have plenty of opportunity to ask questions and discuss all aspects of your treatment during the consultation.
                                    </p>
                                    <p>
                                        Following your initial consultation, we recommend shorter follow up appointments to review your treatment programme and help with continued progress.
                                    </p>
                                        
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="content greyed">
                                <h3>What if I cannot use a video platform?</h3>
                                <p>
                                    We are also able to offer telephone consultations - just call <a href="tel:0172667567">01726 67567</a> as usual or send us an email via the <Link to="/contact">contact us page</Link> and let us know that you would like a phone consultation. The physiotherapist will conduct a full assessment over the phone where you will be asked a range of questions to enable the physiotherapist to make an accurate diagnosis. After achieving a clear diagnosis, your therapist will provide in-depth explanation and education to ensure that you have an understanding of:
                                </p>
                                <ul>
                                    <li>What your injury is</li>
                                    <li>Why it occurred</li>
                                    <li>Likely lifestyle factors involved in your injury</li>
                                    <li>Recommendations for work and activity going forwards</li>
                                    <li>Estimated time of recovery</li>
                                </ul>
                                <p>
                                    From this, they will draw up an individually-tailored management plan including an exercise regime to assist your recover and help you to self manage your condition.
                                </p>
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

export default OnlinePhysio;