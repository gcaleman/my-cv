import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectItem } from './ProjectItem';
import './Projects.css';

export const Projects = () => {
    return (
        <div className='Projects' id="projects">
            <h1>My Projects</h1>
            <Container >
                <Row >
                    <div className='cards__container'></div>
                    <Col md={6} className='cards__wrapper'>
                        <ul className='cards__items'>
                            <ProjectItem
                                src='images/covid-data-charts.png'
                                text='Covid data charts from Brazil and Europe'
                                label='Covid Data Charts'
                                path='https://covidinfo.clmn.link/'
                            />

                        </ul>
                    </Col>
                    <Col md={6} className="app-info">
                        <h4 >About the application</h4>
                        <p>
                            <b>Development:</b>
                            <br></br>
                                - Frontend: <b>React.js</b>
                            <br></br>
                                - Backend: <b>Java</b> + <b>Spring boot</b> (Spring Web, Spring Data JPA, Spring
                                HSQLDB, Spring Batch)
                                <br></br>
                            <br></br>
                            <b>Deployment:</b>
                            <br></br>
                                - Frontend: AWS Amplify
                                <br></br>
                                - Backend: AWS Elastic Beanstalk
                            </p>
                        <a href="https://github.com/gcaleman/covid-europe-dashboard"><i className="fab fa-github" />Github repository</a>
                    </Col>
                </Row>
                <Row >
                    <Col md={6} className='cards__wrapper'>
                        <ul className='cards__items'>
                            <ProjectItem
                                src='images/brazilian-league-dash.png'
                                text='Dashboard Info - Brazilian Football league'
                                label='Dashboard - Serie A'
                                path='https://www.brazilianleaguedashboard.link/'
                            />
                        </ul>
                    </Col>
                    <Col md={6} className="app-info">
                        <h4>About the application</h4>
                        <p>
                            <b>Development:</b>
                            <br></br>
                                - Frontend: <b>React.js</b>
                            <br></br>
                                - Backend: <b>Java</b> + <b>Spring boot</b> (Spring Web, Spring Data JPA, Spring
                                HSQLDB, Spring Batch)
                                <br></br>
                            <br></br>
                            <b>Deployment:</b>
                            <br></br>
                                - Frontend: AWS Amplify
                                <br></br>
                                - Backend: AWS Elastic Beanstalk
                            </p>
                        <a href="https://github.com/gcaleman/brazilian-league-dashboard"><i className="fab fa-github" />Github repository</a>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </div>
    )
}
