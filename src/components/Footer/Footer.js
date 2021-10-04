import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <div class="bg-dark py-5">
                <div class="container">
                    <div class="d-flex justify-content-between">
                        <div><h3 class=" text-secondary">Address</h3>
                            <div class="text-secondary">
                                <p>Email: online@school.com</p><p>Phone: +8801752432222</p></div>
                        </div>
                        <div class=" text-light">
                            <div class="footer-cont"><h1>Subscribe</h1><div className="address"> <Form.Label>Student's Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" /> <Button className="btn btn-info mt-3">Send</Button><div class="icons"></div></div></div>
                        </div>
                    </div>
                </div>

            </div>
            <p className="bg-dark text-white">© 2021 education. All rights reserved</p>
        </div>
    );
};

export default Footer;