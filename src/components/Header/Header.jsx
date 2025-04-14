import React, { useState } from "react";
import "./Header.css";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="logo">
        <img src="/ieeelogo.png" alt="Logo" />
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#track">Tracks</a>
        <a href="#timeline">Timeline</a>
        <a href="#speaker">Speakers</a>
        <a href="#faq">FAQ</a>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate-top" : ""}`}></div>
        <div className={`bar ${isOpen ? "hide" : ""}`}></div>
        <div className={`bar ${isOpen ? "rotate-bottom" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;
