import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    year: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://ieee-backend-gucf.onrender.com/api/auth/register",
        formData
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Registered successfully!", { position: "top-center" });
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Something went wrong", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-heading">Register for the event</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="register-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="register-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="register-input"
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="register-input"
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="CSE">CSE</option>
            <option value="ECE">IT</option>
            <option value="ME">ETCE</option>
            <option value="CE">IEE</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>
            <option value="PRODUCTION">PRODUCTION</option>
            <option value="CHEMICAL">CHEMICAL</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MME">MME</option>
            <option value="POWER">POWER</option>
            <option value="PRINTING">PRINTING</option>
            <option value="CONSTRUCTION">CONSTRUCTION</option>
            <option value="FTBE">FTBE</option>
          </select>

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="register-input"
          >
            <option value="" disabled>
              Select Year
            </option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>

          <button type="submit" className="register-btn">
            Register
          </button>
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
