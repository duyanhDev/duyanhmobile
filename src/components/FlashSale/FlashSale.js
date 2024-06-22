import { Link } from "react-router-dom";
import "./FlashSale.scss";
import { IoIosFlash } from "react-icons/io";
import React, { useState, useEffect } from "react";

const FlashSale = ({ handleMobile, handleLaptop, fitter, block }) => {
  // const start = "June 22, 2024 18:36:54";
  const end = "June 24, 2024 00:00:00";

  const calculateTimeLeft = () => {
    const endTime = new Date(end).getTime();
    const now = new Date().getTime();
    const difference = endTime - now;

    if (difference <= 0) return 0;

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  const renderDigits = (timeString) => {
    return timeString.split("").map((char, index) => (
      <strong
        key={index}
        className={`digit digit-${char === ":" ? "colon" : char}`}
      >
        {char}
      </strong>
    ));
  };

  return (
    <div className="container">
      <ul className="sale-flash">
        <li className="sale-h3">
          <Link className="sale-h3_link">
            F<IoIosFlash />
            ASH SALE ONLINE
          </Link>
        </li>
        <li className={`phone ${block ? "phone" : "active"}`}>
          <span className="phone-text" onClick={() => handleMobile()}>
            Điện thoại/Table
          </span>
        </li>
        <li
          className={`watch-laptop ${fitter ? "watch-laptop-active" : ""}`}
          onClick={() => handleLaptop()}
        >
          Laptop/PC/Tivi
        </li>
        <li className="watch-laptop">
          <Link className="watch-text">Đồng hồ/phụ kiện/khác</Link>
        </li>
        <li className="timer">{renderDigits(formatTime(timeLeft))}</li>
      </ul>
    </div>
  );
};

export default FlashSale;
