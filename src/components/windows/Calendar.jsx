import React, { useState } from "react";
import MacWindows from "./MacWindows";
import "./calendar.scss";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  const generateCalendar = () => {
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = daysInMonth(currentYear, currentMonth);
    const weeks = [];
    let week = Array(7).fill(null);
    let dayCounter = 1;

    while (dayCounter <= totalDays) {
      for (let i = 0; i < 7; i++) {
        if (weeks.length === 0 && i < firstDay) {
          week[i] = null;
        } else if (dayCounter <= totalDays) {
          week[i] = dayCounter;
          dayCounter++;
        } else week[i] = null;
      }
      weeks.push([...week]);
      week = Array(7).fill(null);
    }
    return weeks;
  };

  const calendarWeeks = generateCalendar();

  return (
    <MacWindows height="36rem"> 
      <div className="calendar-window">
        <div className="calendar-header">
          <button onClick={prevMonth}>&lt;</button>
          <h2>{months[currentMonth]} {currentYear}</h2>
          <button onClick={nextMonth}>&gt;</button>
        </div>

        <div className="calendar-grid-wrapper">
          <div className="calendar-grid">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
              <div key={d} className="calendar-day-name">{d}</div>
            ))}

            {calendarWeeks.flat().map((day, idx) => (
              <div
                key={idx}
                className={`calendar-day ${day === today.getDate() &&
                  currentMonth === today.getMonth() &&
                  currentYear === today.getFullYear() ? "today" : ""}`}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MacWindows>
  );
};

export default Calendar;