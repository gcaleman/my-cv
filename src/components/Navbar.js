import { React, useState } from 'react';
import './Navbar.css';

export const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a className="navbar-logo" href="/my-cv" onClick={closeMobileMenu}>
                        GMC <img className="logo-img" src="https://gcaleman.github.io/my-cv/logo-dev.png" alt="" />
                    </a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                        <li className="nav-item">
                            <a className="nav-links" href="#" onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#about" onClick={closeMobileMenu}>
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#projects" onClick={closeMobileMenu}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#education" onClick={closeMobileMenu}>
                                Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#contact" onClick={closeMobileMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}