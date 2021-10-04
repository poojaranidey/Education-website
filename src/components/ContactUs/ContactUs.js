import React from 'react';
import { Form } from 'react-bootstrap';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div>

            <div>
                <section>
                    <div class="container my-2 py-2">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2 col-12">
                                <div class="row">
                                    <div class="col-lg-12 col-12 p-3 contact-us">
                                        <h2 class="text-black fw-bold text-center p-3">CONTACT<span
                                            class="text-style">-US</span>
                                        </h2>

                                    </div>
                                </div>
                                <div class="row bg-light pt-3 pb-3 mb-4">
                                    <div class="col-lg-12">
                                        <h6>ADDRESS :</h6>
                                    </div>
                                    <div class="col-lg-4 col-4">
                                        10 no. C,k ghosh road,
                                        sankipara mohor road dewari bazar,Mymensingh.
                                    </div>
                                    <div class="col-lg-4 col-4">
                                        <p class="m-0 text-danger"><i class="fa fa-phone-square" aria-hidden="true"></i>
                                            +8801712345678
                                        </p>
                                        <p class="m-0 text-info"><i class="fa fa-envelope" aria-hidden="true"></i>
                                            example@gmail.com
                                        </p>
                                    </div>
                                    <div class="col-lg-4 col-4 address-icon text-center text-danger">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="row bg-light pt-3 pb-3 mb-4">
                                    <div class="col-lg-6 col-12">
                                        <form>
                                            <div class="form-row mb-3">
                                                <div class="col mb-2">
                                                    <Form.Label>Student's Name</Form.Label>
                                                    <Form.Control type="name" placeholder="Enter your name" />
                                                </div>
                                                <div className="col">
                                                    <Form.Label>Student's subject</Form.Label>
                                                    <Form.Control type="subject" placeholder="Enter your sunject" />
                                                </div>
                                            </div>
                                            <div className="form-row mb-3">
                                                <div className="col mb-2">
                                                    <Form.Label>Student's Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter your email" />
                                                </div>
                                                <div className="col">
                                                    <Form.Label>Student's mobile number</Form.Label>
                                                    <Form.Control type="mobile" placeholder="Enter your mobile number" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                    placeholder="Message :"></textarea>
                                            </div>
                                            <button type="submit" className="p-2 rounded-3 my-4 fw-bold text-white send-btn">Send</button>
                                        </form>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div ><img className="contact-images" src="https://th.bing.com/th/id/OIP.mZCmtiNxIbOLra_jskzFNAHaDx?pid=ImgDet&rs=1" alt="" /></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;