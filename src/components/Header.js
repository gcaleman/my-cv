import React from 'react';
import './Header.css';
import Typed from 'react-typed';

export const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h2>Frontend </h2> <h4>&</h4> <h2>Java Developer</h2>
                <Typed
                    className="typed-text"
                    strings={["React", "Angular", "HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"]}
                    typeSpeed={45}
                    backSpeed={50}
                    loop
                />
            </div>
        </div>
    )
}
