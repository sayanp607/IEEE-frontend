import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to be a coding genius to join ?",
      answer:
        "Nope! If you've got a spark of creativity, that's all you need. Whether you're a coding legend or a novice, there's a place for you to shine at DoubleSlash 3.0!",
    },
    {
      question: "Can I join solo or do I need a team?",
      answer:
        "Coding is cool, but teamwork and great ideas are what steal the show. If you're flying solo, team up with 1-2 others and make your brilliance shine together!",
    },
    {
      question: "What's in it for the winners and participants?",
      answer:
        "Winners walk away with epic prizes, exclusive swag, and certificates! But every participant gets certificates, hands-on experience, networking with industry leaders, and a chance to flaunt your skills to recruiters.",
    },
    {
      question: "Is it paid? Be honest—we're engineers.",
      answer:
        "Zero. Zip. Zilch. Nada. Nothing! Registration for DoubleSlash 3.0 is completely free for all students. Go ahead, join the fun!.",
    },
    {
      question:
        "Do my teammates have to be from same college ,year,department?",
      answer:
        "YNot necessarily. You can team up with anyone from any college, year or department. The more diverse your team, the more innovative your ideas!.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h2 className="text">Frequently Asked Questions</h2>
      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {item.question}
            <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>
              ▼
            </span>
          </div>

          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
