import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import { Cotainer, Row, Col, Container } from 'react-bootstrap';

export const Header = () => {
    return (
        <div className="header-wraper">
            <Container>
                <Row>
                    <Col md={6} className="main-info">
                        <div className="profile-img"></div>
                        <h4>Frontend </h4> <h4>&</h4> <h4>Java Developer</h4>
                        <Typed
                            className="typed-text"
                            strings={["React", "Angular", "HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"]}
                            typeSpeed={45}
                            backSpeed={50}
                            loop
                        />
                    </Col>
                    <Col md={4} className="about-info">
                        <Typed
                            className="typed-about"
                            strings={["Welcome! My name is Guilherme, I'm a Frontend and Java Developer.."]}
                            typeSpeed={65}
                        />
                    </Col>
                </Row>
                <div className="scroll-btn">
                    <div className="scroll-bar"><a href=""><span> </span></a></div>
                </div>
            </Container>
        </div>
    )
}
