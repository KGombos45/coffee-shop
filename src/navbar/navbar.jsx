import React from 'react';
import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import logo from '../assets/img/logo.png';

function NavbarSection() {

    const [navBarMobile, setMobile] = useState(false);
    const [showHidenNavbar, setShowHide] = useState(false);
    const [stickyNavBar, setSticky] = useState(false);

    const showNavBar = () => {

        if (window.pageYOffset < 55) {
            setSticky(false);
        } else {
            setSticky(true);
        }

    };

    const handleClick = () => {
        setMobile(!navBarMobile)
    };

    window.addEventListener('scroll', showNavBar);

    return (
        <nav className={stickyNavBar ? "flex navMenu sticky" : "flex navMenu"} id="navbar">
            
            <Link to="/">
                <div className="logo">
                    <img src={logo}></img>
                </div>
            </Link>
 
            <div className="hamburger-icon-container" onClick={handleClick}>
                {!navBarMobile ? <MenuOutlined /> : null}
                {navBarMobile ? <CloseOutlined /> : null}
            </div>
            <div className={navBarMobile ? 'menuItems-link-wrapper active' : 'menuItems-link-wrapper'}>

                <a className="menu-link" href="https://indie-coffee-roasters.square.site/" target="_blank">shop</a>
                <Link className="menu-link" to="/wholesale">wholesale</Link>
                <Link className="menu-link" to="/about">about</Link>
                <Link className="menu-link" to="/learn">learn</Link>
                <Link className="menu-link" to="/visit">visit</Link>
                <Link className="menu-link" to="blog">blog</Link>
            </div>
        </nav>
    )
}

export default NavbarSection;