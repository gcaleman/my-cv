import React from 'react';
import './Header.css';
import Typed from 'react-typed';

export const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <div className="profile-img"></div>

                <h3>Frontend </h3> <h4>&</h4> <h3>Java Developer</h3>
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
