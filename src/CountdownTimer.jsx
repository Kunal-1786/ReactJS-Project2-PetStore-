// CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer">
      {timeLeft.days !== undefined && (
        <div>
          <p className="timer-number">
            <span>{timeLeft.days} : </span>
            <span>{timeLeft.hours} : </span>
            <span>{timeLeft.minutes} : </span>
            <span>{timeLeft.seconds}</span>
          </p>
          <p className="timer-name">
            {" "}
            <span>Days : </span>
            <span>Hours : </span>
            <span>Minutes : </span>
            <span>Seconds</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
