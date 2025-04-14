import React from "react";
import "./Footer.css";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>About JUSB</h3>
        <p>
          The Jadavpur University student branch, founded in 2010, belongs to
          the Kolkata section. We are a group of enthusiastic students promoting
          innovative ideas within and outside the campus.
        </p>
      </div>

      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <a href="#track">Tracks</a>
        <a href="#timeline">Timeline</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="footer-section address">
        <h3>Contact Us</h3>
        <p>
          188, Raja S.C. Mallick Rd,
          <br />
          Kolkata-700032 India
        </p>
        <p>contact@jusb.com</p>
        <p>+91 9038929699</p>
      </div>

      <div className="footer-section social">
        <h3>Follow us on Social Medias</h3>
        <div className="social-link">
          <FaInstagramSquare /> <span>Instagram</span>
        </div>
        <div className="social-link">
          <FaSquareXTwitter /> <span>Twitter</span>
        </div>
        <div className="social-link">
          <FaFacebookSquare /> <span>Facebook</span>
        </div>
        <div className="social-link">
          <FaLinkedin /> <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
