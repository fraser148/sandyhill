import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)

    emailjs.sendForm('service_vzvcsfl', 'template_pilfv0', form.current, '1SGT83ZbyCEXz3KAZ')
      .then((result) => {
          console.log(result.text);
          setSending(false);
          setMessage("Message sent successfully, we will get back to you as soon as we can")
      }, (error) => {
          console.log(error.text);
          setSending(false);
          setMessage("It looks like there was an error with sending your message, please email us directly")
      });
  };

  return (
    <div className='main-container'>
      <NavBar />
      <section className='common-header'>
        <h1>Contact Us</h1>
      </section>
      <section className="contact-form">
        <div className='main'>
          <Container>
            <Row>
              <Col md={6}>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                  {sending &&
                    <Loading />
                  }
                  {message &&
                    <div className="message">
                      {message}
                    </div>
                  }
                </form>
              </Col>
              <Col md={6}>
                  <h2>Where to find us</h2>
                  <div className='address'>
                    <p>Sandy Hill Physio</p>
                    <p>14 Sandy Hill</p>
                    <p>St Austell</p>
                    <p>PL25 3AT</p>

                  </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>


  );
};

export default Contact;