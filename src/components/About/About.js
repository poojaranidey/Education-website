import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div>

            <section class="container mt-2">
                <h1 class="fw-bold text-center pb-5 mt-2">People Why Choose Our Coachs
                </h1>
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <img src="https://content.techgig.com/thumb/msid-78956714,width-860,resizemode-4/Top-10-websites-to-learn-programming-in-2020.jpg?77507" class="w-100 p-5" alt=""></img>
                    </div>
                    <div class="col-lg-6">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>We Teach You How To Coach Yourself</Accordion.Header>
                                <Accordion.Body>
                                    No matter what your coding goals are, the best place to start is by building a strong foundation.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    We Teach You How To modify your skill</Accordion.Header>
                                <Accordion.Body>
                                    Similar to a college course, this Path will teach you how to think and code like a professional.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    We Teach You How To Take Massive</Accordion.Header>
                                <Accordion.Body>
                                    You’ll learn Computer Science fundamentals, build a professional portfolio, and prepare for an entry-level role in tech with massive examples which will help you to increase your skill
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>We have best trainers who are already experienced </Accordion.Header>
                                <Accordion.Body>
                                    Kickstart your coding life as you learn all about the programming language Python, and the techniques used when writing it.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
            </section>
            <div>
                <h1>Book your name for our upcoming events..</h1>
                <div
                    className="container education-bg-info   rounded-3" id="subscribe">


                    <p>Get updates on sales, specials and more
                    </p>
                    <Form.Label>Student's Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                    <br />
                    <Form.Label>Student's Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <br />
                    <Form.Label>Student's Subject</Form.Label>
                    <Form.Control type="subject" placeholder="Enter your subject" />
                    <br />

                    <button class="Submit-now">SUBMIT</button>

                </div>
            </div>
        </div>
    );
};

export default About;