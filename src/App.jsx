import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Timeline from "./components/Timeline/Timeline";
import Track from "./components/Track/Track";
import Speaker from "./components/Speaker/Speaker";
import FAQ from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About/About";
import ScrollToTop from "./components/Scroll/Scroll";
import GreetingCard from "./components/greeting/Greeting";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AttendanceQR from "./components/Attendance/Attendance";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem("darkMode");
    return storedValue === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GreetingCard />
              <AboutUs />
              <section id="track">
                <Track />
              </section>
              <section id="timeline">
                <Timeline />
              </section>
              <section id="speaker">
                <Speaker />
              </section>
              <section id="faq">
                <FAQ />
              </section>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/scan" element={<AttendanceQR />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
