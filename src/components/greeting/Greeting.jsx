import React, { useState, useEffect } from "react";
import "./Greeting.css";

const GreetingCard = () => {
  const [showCard, setShowCard] = useState(true);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    let message = "";

    if (hours >= 5 && hours < 12) {
      message = "Good Morning! 🌅\n\nWelcome to IEEE JUSB";
    } else if (hours >= 12 && hours < 17) {
      message = "Good Afternoon! ☀️\n\nWelcome to IEEE JUSB";
    } else if (hours >= 17 && hours < 21) {
      message = "Good Evening! ☀️\n\nWelcome to IEEE JUSB";
    } else {
      message = "Good Night! 🌙\n\nWelcome to IEEE JUSB";
    }

    setGreeting(message);
  }, []);

  const handleClose = () => {
    setShowCard(false);
  };

  if (!showCard) return null;

  return (
    <div className="overlay">
      <div className="card">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <h1
          dangerouslySetInnerHTML={{ __html: greeting.replace(/\n/g, "<br>") }}
        />
      </div>
    </div>
  );
};

export default GreetingCard;
