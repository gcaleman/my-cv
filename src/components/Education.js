import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

export const Education = () => {
    return (
        <div id="education" className="education">
            <Container className="education-container">
                <Row>
                    <Col md={8} className="col-border">
                        <h1>Education</h1>

                    </Col>
                    <Col md={4} className="col-logo">

                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </div>
    )
}
