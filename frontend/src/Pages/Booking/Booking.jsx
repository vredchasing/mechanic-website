import { useEffect, useState } from "react";

function BookingCalendar() {
  const [actualDate, setActualDate] = useState();

  useEffect(() => {
    setActualDate(new Date());
  }, []);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleSelectDate = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const totalDays = getDaysInMonth(currentYear, currentMonth);

  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  const daysWithBlanks = Array(firstDay).fill(null).concat(daysArray);

  // determine whether the current day or selected day should be highlighted
  const isSelectedDate = (day) => selectedDate && selectedDate.getDate() === day;
  const isCurrentDay = (day) => {
    return (
      actualDate &&
      currentDate.getFullYear() === actualDate.getFullYear() &&
      currentDate.getMonth() === actualDate.getMonth() &&
      actualDate.getDate() === day
    );
  };

  return (
    <div className="calendar-container">
      <div className="calender-header-content">
        <button className="left-arrow-button-cal" onClick={handlePrevMonth}>
          <img className="left-arrow-cal" src="arrow.svg" alt="Previous Month" />
        </button>
        <h2 className="date-title">{`${currentDate.toLocaleString("default", {
          month: "long",
        })} ${currentYear}`}</h2>
        <button className="right-arrow-button-cal" onClick={handleNextMonth}>
          <img className="right-arrow-cal" src="arrow.svg" alt="Next Month" />
        </button>
      </div>

      <div className="calendar-grid-wrapper">
        <div className="calendar-grid">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="day-header">
              {day}
            </div>
          ))}

          {daysWithBlanks.map((day, index) =>
            day ? (
              <div
                key={index}
                className={`day-cell ${
                  isSelectedDate(day) ? "calendarselected" : ''}`}
                onClick={() => handleSelectDate(day)}
              >
                <p className={`day-cell-num ${isCurrentDay(day) ? "current-day" : ""}`}>
                    {day}
                </p>
              </div>
            ) : (
              <div
                key={index}
                className={`day-cell-num ${
                  isCurrentDay(day) ? "current-day" : ""
                }`}
              ></div>
            )
          )}
        </div>
      </div>

      {selectedDate && (
        <div className="selected-date">
          Selected Date: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
}

export default BookingCalendar;
