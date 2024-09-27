import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer" id="about-us">
            <Row>
                <Col md={4}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.0624106388614!2d-80.20702552386861!3d42.78703047115647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c5373d773c301%3A0x567ef05a95833313!2s347%20Main%20St%2C%20Port%20Dover%2C%20ON%20N0A%201N0!5e0!3m2!1sen!2sca!4v1727369567502!5m2!1sen!2sca"
                        width="100%"
                        height="300"
                        style={{ border: '0' }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </Col>
                <Col md={8} className="footer-contact-us-container">
                    <h1>Contact Us</h1>
                    <hr />
                    <Row className="footer-contact-us">
                        <Col md={6}>
                            <h4>Hours</h4>
                            <ul className="footer-lists">
                                <li>
                                    Mon CLOSED
                                </li>
                                <li>
                                    Tue 11:00 am - 5:00 pm
                                </li>
                                <li>
                                    Wed 11:00 am - 5:00 pm
                                </li>
                                <li>
                                    Thu 11:00 am - 5:00 pm
                                </li>
                                <li>
                                    Fri 11:00 am - 5:00 pm
                                </li>
                                <li>
                                    Sat 11:00 am - 5:00 pm
                                </li>
                                <li>
                                    Sun 12:00 pm - 4:00 pm
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h4>Contact</h4>
                            <ul className="footer-lists">
                                <li>
                                    <a href="mailto:info@doversbestofbritain.com" className="scroll-in-underline email-contact">info@doversbestofbritain.com</a>
                                </li>
                                <li>
                                    <a href="tel:(226) 290-1868" className="scroll-in-underline email-contact">(226) 290-1868</a>
                                </li>
                                <li>
                                    347 Main St, Port Dover, ON N0A 1N0
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <p className="create-by-businesslore">Create By Businesslore</p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
