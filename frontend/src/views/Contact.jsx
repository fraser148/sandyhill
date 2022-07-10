import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading';
import Footer from '../components/Footer'
// import GoogleMapReact from 'google-map-react';
import { useParams } from 'react-router-dom';

// const Marker = (props) => {
//   const { color, name } = props;
//   return (
//     <div className="marker"
//       style={{ backgroundColor: color, cursor: 'pointer'}}
//       title={name}
//     />
//   );
// };

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const {service} = useParams();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)

    emailjs.sendForm('service_vzvcsfl', 'template_pilfv0h', form.current, '1SGT83ZbyCEXz3KAZ')
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

  // const center = {
  //   address: "14 Sandy Hill, Saint Austell PL25 3AT, United Kingdom",
  //   lat: 50.34208694625555,
  //   lng: -4.772953701845362
  // }
  // const zoom = 18;

  return (
    <div className='main-container'>
      <NavBar />
      <section className="common-header">
        <div className="inner-header">
            <h1>Contact Us</h1>
        </div>
      </section>
      <section className="contact-form">
        <div className='main'>
          <Container>
            <Row>
              <Col md={6}>
                <form ref={form} onSubmit={sendEmail}>
                  <h2>Message us</h2>
                  <label>Name</label>
                  <input type="text" name="user_name" required/>
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                  <label>Subject</label>
                  <select type="text" name="user_subject" defaultValue={service} required>
                    <option value="">-- Select an Option --</option>
                    <option value="physiotherapy">Physiotherapy</option>
                    <option value="acupuncture">Acupuncture</option>
                    <option value="massage">Massage</option>
                    <option value="pilates">Pilates</option>
                    <option value="yoga">Yoga</option>
                    <option value="other">Other</option>
                  </select>
                  <label>Message</label>
                  <textarea name="message" required/>
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
                <div className='address'>
                  <h2>Where to find us</h2>
                  
                  <p>Sandy Hill Physio</p>
                  <p>14 Sandy Hill</p>
                  <p>St Austell</p>
                  <p>PL25 3AT</p>

                </div>
                {/* <div style={{ height: '400px', width: '100%' }}> */}
                <div>

                {/* <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyCl4sjXh_chPd5qt_6-Sp5Hz7QILghSBXA"}}
                  defaultCenter={center}
                  defaultZoom={zoom}
                  yesIWantToUseGoogleMapApiInternals
                >
                  <Marker
                    lat={50.34210261106983}
                    lng={-4.772957144028957}
                    name="Sandy Hill Physio"
                    color="white"
                  />
                </GoogleMapReact> */}

                  <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.3091881958726!2d-4.775067284410087!3d50.34213827946058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486b6f2861ee8aa5%3A0x7636d0488f3a8d1b!2sSandy%20Hill%20Physio%20Ltd!5e0!3m2!1sen!2suk!4v1657462256538!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Footer />
    </div>


  );
};

export default Contact;