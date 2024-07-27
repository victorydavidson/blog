import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const user = false; // Assuming user is not logged in by default

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        // Close menu when clicking outside of it
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.menu') && !event.target.closest('.hamburger')) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <div className="top">
            <div className="top-left">
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                <div className="top-logo">TOLOGO.</div>
                <div className="top-socials">
                    <Link to="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
                        <i className="topicon fa-brands fa-square-facebook"></i>
                    </Link>
                    <Link to="https://x.com/" target="_blank">
                        <i className="topicon fa-brands fa-square-twitter"></i>
                    </Link>
                    <Link to="https://www.pinterest.com/" target="_blank">
                        <i className="topicon fa-brands fa-square-pinterest"></i>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                        <i className="topicon fa-brands fa-square-instagram"></i>
                    </Link>
                </div>
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list-item">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="top-list-item">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="top-list-item">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>
                    <li className="top-list-item">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                </ul>
            </div>
            <div className="top-right">
                {user ? (
                    <Link to="/settings">
                        <img
                            className="top-img"
                            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                            alt="Profile"
                        />
                    </Link>
                ) : (
                    <ul className="top-list">
                        <li className="top-list-item">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="top-list-item">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i className="top-searchicon fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                
                <ul className="menu-list">
                    <li className="menu-item" onClick={closeMenu}><Link className="menu-link" to="/">HOME</Link></li>
                    <li className="menu-item" onClick={closeMenu}><Link className="menu-link" to="/about">ABOUT</Link></li>
                    <li className="menu-item" onClick={closeMenu}><Link className="menu-link" to="/contact">CONTACT</Link></li>
                    <li className="menu-item" onClick={closeMenu}><Link className="menu-link" to="/write">WRITE</Link></li>
                </ul>
            </div>
        </div>
    );
}
