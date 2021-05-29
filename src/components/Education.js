import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

export const Education = () => {
    return (
        <div id="education" className="education">
            <Container className="education-container">
                <Row>
                    <Col className="col-border">
                        <h3 className="text-center">My Studies</h3>
                        <ul className="education-timeline">
                            <li>
                                <h4><span>10/2020 - </span> Science in Computing</h4>
                                <p>
                                    Dissertation: Web application – Technologies: Ionic/Angular |
                                    JavaScript | Firebase | Cloud firestore<br></br>
                                    <b>Level of qualification:</b> NFQ Level 8 – Higher Diploma<br></br>
                                    <b>Institution</b> - CCT College Dublin<br></br>
                                    <b>Award Classification:</b> First-class honors<br></br>
                                    <b>PPA:</b> 76.47
                                </p>
                            </li>
                            <li>
                                <h4><span>09/2020 - </span> Diploma in DevOps</h4>
                                <p>
                                    • Docker Images<br></br>
                                    • Docker Containers<br></br>
                                    • Architecture of the Docker engine<br></br>
                                    • Dockerizing applications<br></br>
                                    • Kubernetes fundamentals<br></br>
                                    • Running Docker containers in Kubernetes<br></br>
                                    • Kubernetes friendly applications<br></br>
                                    • Secret management<br></br>
                                    • Continuous delivery<br></br>
                                    • Cloud introduction<br></br>
                                    • High Availability<br></br>
                                    • Real world use cases<br></br>
                                    • Kubernetes in Cloud<br></br>
                                    <b>Institution</b> - CCT College Dublin
                                </p>
                            </li>
                            <li>
                                <h4><span>05/2017 - </span> Mechanical Engineering</h4>
                                <p>
                                    Graduate with First-class honors.<br></br>
                                    <b>Level of qualification:</b> NFQ Level 8 – Bachelor of Science<br></br>
                                    <b>Institution</b> - Federal University of Mato Grosso - Rondonópolis, Brazil<br></br>
                                    <b>Award Classification:</b> First-class honors<br></br>
                                    <b>PPA:</b> 70.40
                                </p>
                            </li>
                        </ul>
                    </Col>
                    {/* <Col md={4} className="col-logo">

                    </Col> */}
                </Row>
            </Container>
            <hr></hr>
        </div>
    )
}
