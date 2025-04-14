import React, { useState, useEffect } from "react";
import "./Track.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Tracks = [
  {
    id: 1,
    name: "Web3",
  },
  {
    id: 2,
    name: "Education",
  },
  {
    id: 3,
    name: "Green Tech",
  },
  {
    id: 4,
    name: "Health",
  },
  {
    id: 5,
    name: "Women Safety",
  },
  {
    id: 6,
    name: "Cyber Security",
  },
  {
    id: 7,
    name: "Slash(Open)",
  },
];

const Track = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevTrack = () => {
    setIndex((prev) => {
      const newIndex = prev - visibleCount;
      return newIndex < 0 ? Tracks.length - visibleCount : newIndex;
    });
  };

  const nextTrack = () => {
    setIndex((prev) => {
      const newIndex = prev + visibleCount;
      return newIndex >= Tracks.length ? 0 : newIndex;
    });
  };

  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <div data-aos="fade-up" className="track-section">
      <h2 data-aos="fade-up" className="track-heading">
        Tracks
      </h2>
      <div className="track-wrapper">
        <button className="track-button" onClick={prevTrack}>
          &lt;
        </button>

        <div data-aos="fade-up" className="track-cards-container">
          {Tracks.slice(index, index + visibleCount).map((track) => (
            <div key={track.id} className="track-card">
              <h3 className="track-name">{track.name}</h3>
            </div>
          ))}
        </div>

        <button className="track-button" onClick={nextTrack}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Track;
