import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {

    const openLikedin = () => {
        window.open("https://www.linkedin.com/in/guilherme-mocillo-caleman/");
    }

    const openGithub = () => {
        window.open("https://github.com/gcaleman");
    }

    const downloadFile = () => {
        fetch('https://gcaleman.clmn.link/files/Guilherme_Caleman_CV.pdf', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `Guilherme_Caleman_CV.pdf`,
                );

                document.body.appendChild(link);

                link.click();

                link.parentNode.removeChild(link);
            });
    }

    return (
        <div id="contact" className="footer">
            <Container className="footer-container text-center">
                <h1>Contact Me</h1>
                <Row className="row">
                    <Col md={6} className="col">
                        <i className="fas fa-mobile-alt"></i>
                        <p>+353 83 379-9709</p>
                    </Col>
                    <Col md={6} className="col">
                        <i className="fas fa-at"></i>
                        <p>guilherme.caleman@gmail.com</p>
                    </Col>
                </Row>
                <button type="button" className="btn btn-dark" onClick={downloadFile}><i className="fas fa-file-download"></i>Resume</button>
                <p style={{ fontSize: 'small' }}>Download my CV now</p>
            </Container>
            <div className="contact-media text-center">
                <Container>
                    <Row className="row">
                        <Col md={6} className="col">
                            <i className="fab fa-linkedin" onClick={openLikedin} />
                        </Col>
                        <Col md={6} className="col">
                            <i className="fab fa-github" onClick={openGithub} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
