import React, { useState } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header">
            <div className="container nav-container">
                <div className="logo">
                    <img src="https://rajasthantourtravel.co.in/wp-content/uploads/2022/07/WhatsApp-Image-2024-06-24-at-16.00.50-1024x1024-removebg-preview.png"
                        alt="Rajasthan Tour Travel Logo" />
                </div>
                <nav className="navbar">
                    <ul className={isActive ? 'active' : ''}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                </nav>
                <button
                    className={`menu-toggle ${isActive ? 'active' : ''}`}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;