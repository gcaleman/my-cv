import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import { Cotainer, Row, Col, Container } from 'react-bootstrap';

export const Header = () => {

    const scrollDown = () => {
        let element = document.getElementById("about");
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="header-wraper">
            <video src='/videos/milkway.mov' autoPlay loop muted />
            <Container>
                <Row>
                    <Col md={1}></Col>
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
                            strings={["Welcome to my Web Portfolio!", "My name is Guilherme, " +
                                " I'm a Science in Computing graduate, experienced in building Java and React.js applications."
                                , " Scroll down if you wanna know more about me."]}
                            typeSpeed={65}
                            fadeOut
                            loop
                        />
                    </Col>
                </Row>

                <div className="scroll-btn">
                    <div className="scroll-bar">
                        <button type="button" className="btn btn-dark" onClick={scrollDown}><span> </span></button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
