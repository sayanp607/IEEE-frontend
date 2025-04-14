import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-box">
        <h1 className="text">About Us</h1>
        <p>
          Join in with us on a 24 hours journey of innovation and imagination
          but be warned it's going to be a rough three day journey. We shall
          start the journey with an intense round of reasoning and validation
          with peers following up with late night coding and testing, and
          finally, the journey ends with a thorough validation by the best. So,
          come along with us on DoubleSlash 3.0 organized by the IEEE JU Student
          Branch.
        </p>
        <br />
        <p>
          A 24 hours marathon of executing unique ideas. Choose from the seven
          tracks or create your own under the Slash track and turn your idea
          into reality. Get yourself tested beyond limits by the best in the
          industry. Let's Code Commit and Create!
        </p>
      </div>

      <div className="register-show">
        <h2>Register to our upcoming event</h2>
        <p>Hurry up! Join us soon</p>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
