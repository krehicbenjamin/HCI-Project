import React, { Component } from 'react';
import "./footer.css"
import { Col, Row, Form } from "react-bootstrap";

class Footer extends Component {

    render() {
        return (
            <footer class="footer-dark">
                
                <Col>
                    <Row>
                        <div class="col3">
                            <h3>HCI Project</h3>
                        </div>
                        <div class="col4">
                            <p class="copyright">Benjamin Krehic / Amela Kospo © 2021</p>
                        </div>
                    </Row>
                </Col>

            </footer>
        )
    }
}
export default Footer;