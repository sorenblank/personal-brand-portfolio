import { useEffect, useState } from 'react';
import Img from "@/app/components/Image";
import Link from "next/link";
import { IoArrowForward, IoCloseOutline } from "react-icons/io5";

export default function Header() {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [mobileActive, setMobileActive] = useState(false);

    const toggleNav = () => {
        setMobileActive(!mobileActive);
    };

    const closeNav = () => {
        setMobileActive(false);
    };


    return (
        //   #HEADER
    
        <header className={`header ${mobileActive ? 'active' : ''}`} data-header>
        <div className="container">
    
          <a href="#" className="logo">
            <Img src="logo.svg" width="84" height="26" alt="logo" />
          </a>
    
          <nav className={`navbar ${mobileActive ? 'active' : ''}`} data-navbar>
    
            <div className="navbar-top">
              <a href="#" className="logo">
                <Img src="logo.svg" width="84" height="26" alt="logo" />
              </a>
    
              <button className="nav-close-btn" aria-label="close menu" data-nav-toggler onClick={toggleNav}>
                <IoCloseOutline className="ion-icon" aria-hidden="true"/>
              </button>
            </div>
    
            <ul className="navbar-list">
    
              <li>
              <Link href="#home" className="navbar-link" data-nav-link onClick={closeNav}>Home</Link>
              </li>
    
              <li>
                <Link href="#service" className="navbar-link" data-nav-link>Services</Link>
              </li>
    
              <li>
                <Link href="#about" className="navbar-link" data-nav-link>About</Link>
              </li>
    
              <li>
                <Link href="#project" className="navbar-link" data-nav-link>Project</Link>
              </li>
    
              <li>
                <Link href="#review" className="navbar-link" data-nav-link>Review</Link>
              </li>
    
              <li>
                <Link href="#contact" className="navbar-link" data-nav-link>Contact</Link>
              </li>
    
            </ul>
    
          </nav>
    
          <a href="#" className="btn btn:hover">
            <span className="span">Get A Quote</span>
            
            <IoArrowForward className="ion-icon" aria-hidden="true"/>
          </a>
    
          <button className="nav-open-btn btn:hover" aria-label="open menu" data-nav-toggler onClick={toggleNav}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </button>
    
          <div className={`overlay ${mobileActive ? 'active' : ''}`} data-overlay data-nav-toggler onClick={toggleNav}></div>
    
        </div>
      </header>
    );
    }