import React, { useState } from "react";
import { useForm  } from "react-hook-form";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoadingSpinner = () => {
    return (
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    );
  }

export default function Registration() {
    const [loading, setLoading] = useState(false);

    const { register, watch, formState:{ errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        setLoading(true)

        axios.post("http://localhost:8080/generate-patient-summary",
        // axios.post("https://sandy-hill-physio.nw.r.appspot.com/generate-patient-summary",
        data,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf'
            }
        })
        .then((response) => {
            // const url = window.URL.createObjectURL(new Blob([response.data]));
            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute('download', 'file.pdf'); //or any other extension
            // document.body.appendChild(link);
            // link.click();
            reset();
            toast.success('Your data has been sent to us!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        });
    }

    
    const watchWork = watch("off_work");
    const watchMedication = watch("medication");
    const watchRecurring = watch("recurring");
    const watchRecurringTherapy = watch("recurring_therapy");
    
    return (
        <div className="main-content">
            <NavBar/>
            <section className="common-header">
                <div className="inner-header">
                    <h1>Registration</h1>
                </div>
            </section>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="register-form">
                <div className="main form">
                    <Container>
                        <h1>Patient Registration Form</h1>
                        <p>
                            This form is to be used patients of Sandy Hill Physio.
                        </p>
                    </Container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <label>First Name</label>
                                    <input {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                                    <span className="error">{errors.firstName?.type === 'required' && "Name is required"}</span>
                                    <span className="error">{errors.firstName && "Issue with name"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>Last Name</label>
                                    <input {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                                    <span className="error">{errors.lastName?.type === 'required' && "Name is required"}</span>
                                    <span className="error">{errors.lastName && "Issue with name"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>Address Line 1</label>
                                    <input {...register("address_line_1", { required: true})} />
                                    <span className="error">{errors.address_line_1?.type === 'required' && "Address is required"}</span>


                                </Col>
                                <Col md={6}>
                                    <label>Date of Birth</label>
                                    <input type="date" {...register("dob", { required: true  })} />
                                    <span className="error">{errors.dob?.type === 'required' && "DoB is required"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>Address Line 2</label>
                                    <input {...register("address_line_2")} />
                                </Col>
                                <Col md={6}>
                                    <label>Sex</label>
                                    <select {...register("sex", {required: true})}>
                                        <option >-- select an option --</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <span className="error">{errors.sex?.type === 'required' && "Sex is required"}</span>
                                </Col>
                                <Col md={6}>
                                <label>Postcode</label>
                                    <input {...register("postcode", { required: true})} />
                                    <span className="error">{errors.postcode?.type === 'required' && "Postcode is required"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>Occupation</label>
                                    <input {...register("occupation", { required: true})} />
                                    <span className="error">{errors.occupation?.type === 'required' && "Occupation is required"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>Email</label>
                                    <input type="email" {...register("email", { required: true })} />
                                    <span className="error">{errors.email?.type === 'required' && "Email is required"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>Phone Number</label>
                                    <input {...register("phone", { required: true, pattern: /^[0-9\s]+$/i })} />
                                    <span className="error">{errors.phone?.type === 'required' && "Phone number is required"}</span>
                                    <span className="error">{errors.phone && "Issue with phone number"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>GP Surgery</label>
                                    <input {...register("gp_surgery", { required: true})} />
                                    <span className="error">{errors.gp_surgery?.type === 'required' && "GP Surgery is required"}</span>
                                </Col>
                                <Col md={6}>
                                    <label>GP Name</label>
                                    <input {...register("gp_name", { required: true})} />
                                    <span className="error">{errors.gp_name?.type === 'required' && "GP Name is required"}</span>
                                </Col>
                            

                                <Col md={12}>
                                    <hr/>
                                    <label>Please describe your current problem and symptoms below:</label>
                                    <textarea {...register("symptoms", { required: true})} />
                                    <span className="error">{errors.symptoms?.type === 'required' && "A description is required"}</span>

                                    <label>How long have you had your current problem?</label>
                                    <select {...register("symptoms_time", {required: true})}>
                                        <option >-- select an option --</option>
                                        <option value="Less than 2 weeks">Less than 2 weeks</option>
                                        <option value="2-6 weeks">2-6 weeks</option>
                                        <option value="7-12 weeks">7-12 weeks</option>
                                        <option value="More than 12 weeks">More than 12 weeks</option>
                                    </select>
                                    <span className="error">{errors.symptoms_time?.type === 'required' && "Sex is required"}</span>

                                    {/* Problem Progression */}
                                    <label>How is your problem progressing?</label>
                                    <div className="radios">
                                        <label for="field-progression1">
                                            <input {...register("progression", {required:true})} type="radio" name="progression" value="worse" id="field-progression1"/>
                                            Getting Worse
                                        </label>
                                        <label for="field-progression2">
                                            <input {...register("progression", {required:true})} type="radio" name="progression" value="better" id="field-progression2"/>
                                            Getting Better
                                        </label>
                                        <label htmlFor="field-progression3">
                                            <input {...register("progression", {required:true})} type="radio" name="progression" value="not changing" id="field-progression3"/>
                                            Not Changing
                                        </label>
                                        <span className="error">{errors.progression?.type === 'required' && "Please rate your progression"}</span>
                                    </div>


                                    {/* Pain Levels */}
                                    <label>If in pain, how would you describe it?</label>
                                    <div className="radios">
                                        <label htmlFor="field-pain1">
                                            <input {...register("pain", {required:true})} type="radio" name="pain" value="None" id="field-pain1"/>
                                            None
                                        </label>
                                        <label htmlFor="field-pain2">
                                            <input {...register("pain", {required:true})} type="radio" name="pain" value="Mild" id="field-pain2"/>
                                            Mild
                                        </label>
                                        <label htmlFor="field-pain3">
                                            <input {...register("pain", {required:true})} type="radio" name="pain" value="Moderate" id="field-pain3"/>
                                            Moderate
                                        </label>
                                        <label htmlFor="field-pain4">
                                            <input {...register("pain", {required:true})} type="radio" name="pain" value="Severe" id="field-pain4"/>
                                            Severe
                                        </label>
                                        <span className="error">{errors.pain?.type === 'required' && "Please rate your pain"}</span>
                                    </div>


                                    {/* Pain persistency */}
                                    <label>Is your pain constant (present all the time)?</label>
                                    <div className="radios">
                                        <label htmlFor="field-pain_constant1">
                                            <input {...register("pain_constant", {required:true})} type="radio" name="pain_constant" value="N/A" id="field-pain_constant1"/>
                                            N/A
                                        </label>
                                        <label htmlFor="field-pain_constant2">
                                            <input {...register("pain_constant", {required:true})} type="radio" name="pain_constant" value="Yes" id="field-pain_constant2"/>
                                            Yes
                                        </label>
                                        <label htmlFor="field-pain_constant3">
                                            <input {...register("pain_constant", {required:true})} type="radio" name="pain_constant" value="No" id="field-pain_constant3"/>
                                            No
                                        </label>
                                        <span className="error">{errors.pain_constant?.type === 'required' && "Please fill in this field"}</span>
                                    </div>




                                    <label>Is your pain disturbing your sleep?</label>
                                    <div className="radios">
                                        <label htmlFor="field-pain_sleep1">
                                            <input {...register("pain_sleep", {required:true})} type="radio" name="pain_sleep" value="No" id="field-pain_sleep1"/>
                                            No
                                        </label>
                                        <label htmlFor="field-pain_sleep2">
                                            <input {...register("pain_sleep", {required:true})} type="radio" name="pain_sleep" value="Yes, difficulty getting to sleep" id="field-pain_sleep2"/>
                                            Yes, difficulty getting to sleep
                                        </label>
                                        <label htmlFor="field-pain_sleep3">
                                            <input {...register("pain_sleep", {required:true})} type="radio" name="pain_sleep" value="Yes, woken up from sleep" id="field-pain_sleep3"/>
                                            Yes, woken up from sleep
                                        </label>
                                        <label htmlFor="field-pain_sleep4">
                                            <input {...register("pain_sleep", {required:true})} type="radio" name="pain_sleep" value="Yes, unable to sleep at all" id="field-pain_sleep4"/>
                                            Yes, unable to sleep at all
                                        </label>
                                        <span className="error">{errors.pain_sleep?.type === 'required' && "Please fill in this field"}</span>
                                    </div>



                                    <hr/>
                                    
                                    
                                    
                                    
                                    <h4>Select all statements that apply</h4>
                                    <label className="checker">
                                        <input type="checkbox" {...register("off_work")}/>
                                        I am off work because of this problem
                                    </label>
                                    {watchWork &&
                                    <>
                                        <label>How long were you off work?</label>
                                        <input {...register("off_work_time", { required: true})} />
                                        <span className="error">{errors.off_work_time?.type === 'required' && "This field is required"}</span>
                                    </>
                                    }
                                    <label className="checker">
                                        <input type="checkbox" {...register("medication")}/>
                                        I am taking medication
                                    </label>
                                    {watchMedication &&
                                    <>
                                        <label>What are you taking?</label>
                                        <input {...register("medication_type")} />
                                        <span className="error">{errors.medication_type?.type === 'required' && "This field is required"}</span>
                                    </>
                                    }
                                    <label className="checker">
                                        <input type="checkbox" {...register("recurring")}/>
                                        I have had this problem before
                                    </label>
                                    {watchRecurring &&
                                    <>
                                        <label>How long ago?</label>
                                        <input {...register("recurring_time")} />
                                        <span className="error">{errors.reccuring_time?.type === 'required' && "This field is required"}</span>
                                        <label className="checker">
                                        <input type="checkbox" {...register("recurring_therapy")}/>
                                        I have had treatment for this problem
                                        </label>
                                        {watchRecurringTherapy &&
                                        <>
                                            <label>How long ago?</label>
                                            <input {...register("recurring_therapy_type")} />
                                            <span className="error">{errors.recurring_therapy_type?.type === 'required' && "This field is required"}</span>
                                        </>
                                        }
                                    </>
                                    }


                                    <hr/>
                                    <label className="checker">
                                        <input type="checkbox" {...register("agreement", {required: true})}/>
                                        On agreeing to this form, you consent to be treated via Telehealth and understand that certain communications will be required as part of the treatment.
                                        <br/>You may decline any of the treatment or communications that you have been offered.
                                    </label>
                                    <span className="error">{errors.agreement?.type === 'required' && "Please agree to the terms"}</span>
                                    
                                    <div className="submitter">
                                        <button type="submit" disabled={loading}>Send Data</button>
                                        {loading && <LoadingSpinner/> }
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    );
}