import React, { Component } from 'react';
import "./footer.css"
import { Col, Row, Form } from "react-bootstrap";

class Footer extends Component {

    render() {
        return (
            <footer class="footer-dark">
                <Col>
                    <Row>
                        <div class="col1">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>

                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div class="col2">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>

                    </Row>
                </Col>

                <Col>
                    <Row>
                        <div class="col3">
                            <h3>COVIDInfoHelp.com</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.</p>
                        </div>
                        <div class="col4">
                            <p class="copyright">COVIDInfoHelpAndIntegration © 2021</p>
                        </div>
                    </Row>
                </Col>

            </footer>
        )
    }
}
export default Footer;