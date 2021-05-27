import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutMe.css';

export const AboutMe = () => {
    return (
        <div className="aboutMe" id="about">
            <Container className="about-container">
                <Row>
                    <Col md={4} className="col-logo">

                    </Col>
                    <Col md={8} className="col-border">
                        <h1>Guilherme Caleman</h1>
                        <p>
                            I'm a <span>first-class honors</span> IT graduate with background in Mechanical Engineering.<br />
                My knowledge in mechanical engineering and experience working in a fast paced environments, together with my <span>science in computing</span> skills enhance my <span>problem solving abilities</span> and my capacity to <span>work in a group</span> to achieve results. <br />
                My goal is to evolve in my career as a <span>Frontend Developer</span> and to work in DevOps in the future. I believe that my <span>communication</span>, <span>collaboration</span> and <span>problem solving skills</span> matches the necessary abilities for a successful career in the field. <br />
                In my free time I enjoy reading about the universe, watching sports <span>(specially team sports)</span> and movies, playing football, trying to cook <span>(not my best skill I got to say..)</span> and traveling.
                        </p>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </div>
    )
}
