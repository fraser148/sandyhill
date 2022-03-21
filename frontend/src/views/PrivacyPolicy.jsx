import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const PrivacyPolicy = () => {
    return (
        <div className="main-content">
            <NavBar/>
            <section className="common-header">
                <div className="inner-header">
                    <h1>Privacy Policy</h1>
                </div>
            </section>
            <section className="privacy-policy">
                <div className="main">
                    <h1>Patient Privacy Policy</h1>
                    <h3>Who We Are</h3>
                    <p>
                        We are Sandy Hill Physio Ltd, 14 Sandy Hill, St Austell, Cornwall  PL25 3AT, telephone number <a href="tel:01726 67567">01726 67567</a>, email address <a href="mailto:helpme@sandyhillphysio.co.uk">helpme@sandyhillphysio.co.uk</a>. For the purposes of processing your personal data we are the controller.
                    </p>
                    <h3>Data Protection Officer</h3>
                    <p>
                        As we record and use sensitive health data we take the protection of this data very seriously. We have therefore appointed a Data Protection Officer, Sandy Hill Physio Ltd which is your first point of contact for any matters regarding your personal data we process. They can be contacted on <a href="tel:01726 67567">01726 67567</a>. The email address is <a href="mailto:helpme@sandyhillphysio.co.uk">helpme@sandyhillphysio.co.uk</a>, the address is 14 Sandy Hill, St Austell, Cornwall  PL25 3AT.
                    </p>
                    <h3>The Personal Data We Process and What We Do With It</h3>
                    <p>
                        We record and use the following categories of personal data: name, address, telephone numbers, email address, date of birth, health information including medical history, diagnosis and treatment data. Our lawful basis of processing this data is one of contract and, for the health information, the provision of health-related services as a chiropractic clinic. In addition, we will only examine or treat you with your explicit consent.
                    </p>
                    <p>
                        No personal data is passed onto third parties without the consent from the patient.
                    </p>
                    <h3>Retaining Your Personal Data</h3>
                    <p>
                        Whilst you are receiving treatment from our clinic we will continue to store your personal data. Once you have been discharged, we will be required to retain your personal data for a minimum of 8 years. After 8 years of no appointments at the clinic, we will safely destroy your personal data. For patients under the age of 18 we will retain their personal data until their 25th birthday, or 26th if the patient was 17 at the conclusion of treatment.
                    </p>
                    <h3>Your Rights</h3>
                    <p>
                        As we process your personal data, you have certain rights. These are a right of access, a right of rectification, a right of erasure and a right to restrict processing.
                        You may request a copy of your data at any time. Please make such a request in writing or by email to the Data Protection Officer, whose details are shown above. Please provide the following information: your name, address, telephone number, email address and details of the information you require.
                        We will need to verify your identity so we may ask for a copy of your passport, driving license and/or recent utility bill.
                    </p>
                    <p>
                        If you believe any of the personal data we hold on you is inaccurate or incomplete, please contact the clinic directly and any necessary corrections to your data will be made promptly.
                        If you believe we should erase your data, please contact the Data Protection Officer, whose details are shown above.
                        If you wish us to stop storing or using your data, please contact the Data Protection Officer, whose details are shown above.
                    </p>
                    <h3>Data Breaches</h3>
                    <p>
                        Should your personal data that we control be lost, stolen or otherwise breached, where this constitutes a high risk to your rights and freedoms, we will contact you without delay. We will give you the contact details of the Data Protection Officer who is dealing with the breach, explain to you the nature of the breach and the steps we are taking to deal with it.
                    </p>
                    <h3>Should You Wish To Complain</h3>
                    <p>
                        You can contact the ICO via their website: <a href="https://www.ico.org.uk">www.ico.org.uk</a> should you wish to make a complaint about the way we are processing your personal data.
                    </p>
                    <h3>Automated Decision Making and Profiling</h3>
                    <p>
                        We do not use any system which uses automated decision making or profiling in respect of your personal data.
                    </p>
                    <h3>Providers and Suppliers To The Clinic</h3>
                    <p>
                        If your information has been supplied to the clinic by an insurance company or provider, all information provided this way will be stored securely. We will make contact with you within 48 hours of receiving the information providing it is not a weekend or public holiday. If we are unable to make contact with you within one month of receiving the data we will safely remove the data provided to us.
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default PrivacyPolicy;