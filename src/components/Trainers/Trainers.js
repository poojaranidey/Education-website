import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import "./Trainers.css"

const Trainers = () => {
    // all trainers section 
    return (
        <div className="mb-5 py-5 ">
            <h1>Best trainers to guide you for best lessons</h1>
            <div className="trainers ">

                <Card border="primary" style={{ width: '25rem' }}>
                    <Card.Img className="trainer-image" variant="top" src="https://webtend.net/demo/html/wellco/assets/images/portfolio/1.jpg" />
                    <Card.Header>James bond</Card.Header>
                    <Card.Body>
                        <Card.Title>java programming tainer</Card.Title>
                    </Card.Body>
                </Card>


                <Card border="secondary" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="https://webtend.net/demo/html/wellco/assets/images/portfolio/2.jpg" />
                    <Card.Header>Shakilg jsing</Card.Header>
                    <Card.Body>
                        <Card.Title>c programming trainer</Card.Title>
                    </Card.Body>
                </Card>


                <Card border="success" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="https://webtend.net/demo/html/wellco/assets/images/portfolio/3.jpg" />
                    <Card.Header>Daearuns som.</Card.Header>
                    <Card.Body>
                        <Card.Title>python programming tainer</Card.Title>

                    </Card.Body>
                </Card>


                <Card border="danger" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="https://i.ytimg.com/vi/NEPPzFr0mVY/maxresdefault.jpg" />
                    <Card.Header>shave james</Card.Header>
                    <Card.Body>
                        <Card.Title>IOT trainer</Card.Title>

                    </Card.Body>
                </Card>


                <Card border="warning" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO2m5UfM0HP5gxalCKxoMcPptv1yGEBbKEw&usqp=CAU" />
                    <Card.Header>milang helam</Card.Header>
                    <Card.Body>
                        <Card.Title>c++ programming trainer</Card.Title>

                    </Card.Body>
                </Card>


                <Card border="info" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWmyyW9FScO_FM6A4KER_m5FsDYD9yoGOOy3yCyalF3w5TugMf9hixMxwPzdxj5Cl0-E&usqp=CAU" />
                    <Card.Header>Dr.james j</Card.Header>
                    <Card.Body>
                        <Card.Title>web development trainer</Card.Title>

                    </Card.Body>
                </Card>
                <Card border="info" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="http://www.pythonext.com/blog/assets/images/gettyimages-1066558024-768x432.jpg" />
                    <Card.Header>jessica shemin</Card.Header>
                    <Card.Body>
                        <Card.Title>Html,css,javascript trainer</Card.Title>

                    </Card.Body>
                </Card>
                <Card border="info" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_Vf40SLAko-m_-k41UofnCh78mEojFpvxQ&usqp=CAU" />
                    <Card.Header>Ragesh ruinse</Card.Header>
                    <Card.Body>
                        <Card.Title>Machine Learning trainer</Card.Title>

                    </Card.Body>
                </Card>
                <Card border="info" style={{ width: '25rem' }}>
                    <Card.Img variant="top" className="trainer-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUlb3rwkGpLQ0N-gys7JbAt-YBEqPj_5IOA&usqp=CAU" />
                    <Card.Header>shahil james j</Card.Header>
                    <Card.Body>
                        <Card.Title>web development trainer</Card.Title>

                    </Card.Body>
                </Card>


            </div>
            <Container className="bg-info">
                <h1 className="text-white">Book our trainer</h1>
                <Form className="py-5">
                    <Row className="mb-3 mt-5">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="java,c,c++,python,jvascript,html,css...." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address </Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3 py-5">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className="btn btn-dark mt-3" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>


        </div>
    );
};

export default Trainers;