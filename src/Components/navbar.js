import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../Components/images/Logo/logo.jpg";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className="navbar">
        <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} className="logo" alt="Ajay"/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="social">
              <a href="https://facebook.com">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a href="https://whatsapp.com">
                <span className="fab fa-whatsapp"></span>
              </a>
              <a href="https://instagram.com">
                <span className="fab fa-instagram"></span>
              </a>
              <a href="#https://youtube.com">
                <span className="fab fa-youtube"></span>
              </a>
            </li>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;
