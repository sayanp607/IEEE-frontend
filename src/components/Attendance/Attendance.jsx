import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AttendanceQR = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const url = "https://ieee-backend-gucf.onrender.com/scan";

  useEffect(() => {
    const fetchCount = async () => {
      const res = await axios.get("https://ieee-backend-gucf.onrender.com/count");
      setCount(res.data.count);
    };
    fetchCount();
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📋 Attendance Count: {count}</h2>
      <QRCode value={url} size={256} />
      <p>📱 Scan this QR code to mark attendance</p>
      <button
        onClick={handleBack}
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ⬅️ Back to Home
      </button>
    </div>
  );
};

export default AttendanceQR;
