import React, { useState } from "react";
import "./Speaker.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Speaker = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const speakers = [
    {
      name: "Amar kumar",
      role: "Software Engineer, Amazon",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.EtP-iKLn1O4xY-ereJVQhQHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "Himesh Roy",
      role: "Senior Analyst,PWC",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.JU6zF0zb0aZG_Y6FWF6nIAHaE7&pid=Api&P=0&h=180",
    },
    {
      name: "Sarthak Saha",
      role: "Android Developer, Uber",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.dRfyZ2BI7V6iXmJH3HSP7AHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Alia Bose",
      role: "Ceo, Zomato",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ECnNSKzrR-HmU2FscBEo_QHaFc&pid=Api&P=0&h=180",
    },
    {
      name: "Sreyash Iyer",
      role: "DevOps Engineer, Chrome",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.P4UjzDxqfMoASr8P_wzUdwHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Rohit Negi",
      role: "Web Developer",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.-HOPinfDDMz7V7MKIrFCjwHaHa&pid=Api&P=0&h=180",
    },
  ];

  const filteredSpeakers = speakers.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="speaker-container">
      <div className="search-bar">
        <h1 className="text">Meet Our Speakers</h1>
        <input
          type="text"
          placeholder="Search by name or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="speakers-list">
        {filteredSpeakers.length > 0 ? (
          filteredSpeakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image"
              />
              <div className="speaker-details">
                <div className="speaker-name">{speaker.name}</div>
                <div className="speaker-role">{speaker.role}</div>
                <div className="social-media">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaSquareXTwitter />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              width: "100%",
            }}
          >
            <p style={{ color: "white", fontSize: "24px", margin: 0 }}>
              No user found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Speaker;
