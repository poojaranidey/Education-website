import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import "./Home.css"


const Home = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="slide-images w-75"
                        src="https://elearningindustry.com/wp-content/uploads/2020/02/what-to-check-before-an-online-course-purchase.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>BECOME A CODING MASTER</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className=" slide-images w-75"
                        src="https://elearningindustry.com/wp-content/uploads/2020/08/8-proven-steps-to-create-a-profitbale-online-course.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>WRITE SUPER-EFFICIENT CODE</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="slide-images w-75"
                        src="https://cdni.iconscout.com/illustration/premium/thumb/student-achieved-online-course-certificate-2769745-2302763.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>CERTIFICATE OF COMPLETION</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="half-width d-flex p-5 m-5">
                <div>
                    <img className="slide-images" src="https://webtend.net/demo/html/wellco/assets/images/about/image_1.jpg" alt="" />
                </div>
                <div className="course-details">
                    <h1>We Care About Your eduction For Better.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta impedit officia quibusdam modi possimus blanditiis corrupti quisquam repudiandae quae quo!</p>
                    <h2>Master Certified Coach</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h2>Coach Certification Program</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="./trainers"><Button variant="outline-primary">Read more...</Button>{' '}</Link>
                </div>
            </div>
            <div>
                <h1>our services</h1>
                <p>Learn Online</p>
                <h1>Popular Courses</h1>
                <div>
                    <Courses></Courses>
                </div>

            </div>
            <div className="py-5">
                <h1>
                    About Us
                </h1>
                <h1>
                    People Why Choose Our Coachs

                </h1>
                <div className="d-flex about-section w-100">
                    <div className="p-5 m-5">
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header>We Teach You How To Coach Yourself</Card.Header>
                            <Card.Body>
                                <Card.Title>Self Coaching Scholars</Card.Title>
                                <Card.Text>
                                    Learn the ins and outs of one of the fastest growing programming languages.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />

                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>We Teach You How To prepare for new task</Card.Header>
                            <Card.Body>
                                <Card.Title>Coach Certification </Card.Title>
                                <Card.Text>
                                    Apply your problem-solving skills to write cleaner code from the beginning.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />

                        <Card border="success" style={{ width: '18rem' }}>
                            <Card.Header>
                                We Teach You How To Take Massive</Card.Header>
                            <Card.Body>
                                <Card.Title> Powerful Coach</Card.Title>
                                <Card.Text>
                                    Build your portfolio, prove your mastery with certificates, and prep for your next role.
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="about-image">
                        <img src="https://webtend.net/demo/html/wellco/assets/images/why_us.png" alt="" />
                    </div>

                </div>
                <Link to="/about"><Button variant="outline-primary">Read more...</Button>{' '}</Link>
            </div>
        </div>
    );
};

export default Home;