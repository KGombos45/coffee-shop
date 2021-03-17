import React from 'react';
import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

function AppNavbar() {

    const [navBarMobile, setMobile] = useState(false);
    const [showHidenNavbar, setShowHide] = useState(false);
    const [stickyNavBar, setSticky] = useState(false);

    const showNavBar = () => {

        if (window.scrollY > 1 && window.scrollY <= 55) {
            setShowHide(false);
            setSticky(false);
        } else if (window.scrollY >= 55) {
            setSticky(true);
            setShowHide(false);
        }

    };

    const handleClick = () => {
        setMobile(!navBarMobile)
    };

    window.addEventListener('scroll', showNavBar);

    return (
        <nav className={stickyNavBar ? "flex navMenu sticky" : showHidenNavbar ? "flex navMenu hidden" : "flex navMenu"} id="navbar">
            <div className="logo">
                <img src="logo.png"></img>
            </div>
            <div className="hamburger-icon-container" onClick={handleClick}>
                {!navBarMobile ? <MenuOutlined /> : null}
                {navBarMobile ? <CloseOutlined /> : null}
            </div>
            <div className={navBarMobile ? 'menuItems-link-wrapper active' : 'menuItems-link-wrapper'}>

                <Link className="menu-link" to="shop" smooth={true} duraction={1000} spy={true} activeClass="active">shop</Link>
                <Link className="menu-link" to="wholesale" smooth={true} duraction={1000} spy={true} activeClass="active">wholesale</Link>
                <Link className="menu-link" to="about" smooth={true} duraction={1000} spy={true} activeClass="active">about</Link>
                <Link className="menu-link" to="learn" smooth={true} duraction={1000} spy={true} activeClass="active">learn</Link>
                <Link className="menu-link" to="visit" smooth={true} duraction={1000} spy={true} activeClass="active">visit</Link>
                <Link className="menu-link" to="subscribe" smooth={true} duraction={1000} spy={true} activeClass="active">subscribe</Link>
                <Link className="menu-link" to="contact" smooth={true} duraction={1000} spy={true} activeClass="active">contact</Link>
                <Link className="menu-link" to="blog" smooth={true} duraction={1000} spy={true} activeClass="active">blog</Link>
            </div>
        </nav>
    )
}

export default AppNavbar;