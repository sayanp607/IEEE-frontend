import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://ieee-server-gq7r.onrender.com/api/auth/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!", { position: "top-center" });
      setTimeout(() => navigate("/scan"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Something went wrong", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="login-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
