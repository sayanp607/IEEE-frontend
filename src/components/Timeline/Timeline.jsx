import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const timelineData = [
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome speech and introduction to the IEEE event.",
  },
  {
    time: "10:00 AM",
    title: "Keynote Session",
    description: "Insights from industry leaders on the future of technology.",
  },
  {
    time: "11:30 AM",
    title: "Technical Talk",
    description: "Deep dive into emerging tech trends.",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Networking and refreshments.",
  },
  {
    time: "02:00 PM",
    title: "Workshops",
    description: "Hands-on session with experienced mentors.",
  },
  {
    time: "04:00 PM",
    title: "Closing Ceremony",
    description: "Vote of thanks and certificate distribution.",
  },
];

const Timeline = () => {
  const lineRef = useRef(null);
  const wrapperRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      let progress =
        (windowHeight - wrapperTop) / (wrapperHeight + windowHeight);
      progress = Math.min(Math.max(progress, 0), 1);

      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-wrapper" ref={wrapperRef}>
      <h2 className="timeline-heading">Event Timeline</h2>
      <div className="timeline">
        <div
          className="timeline-line"
          ref={lineRef}
          style={{ height: `${lineHeight}%` }}
        ></div>

        {timelineData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
              <span className="timeline-time">{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
