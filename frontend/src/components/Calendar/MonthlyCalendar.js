import { useState } from "react";
import {
  getCurrentDate,
  getMonth,
  getYear,
  getCalendarDates,
  weekdays,
  months,
} from "../../services/dates";

const MonthlyCalendar = () => {
  const [month, setMonth] = useState(getMonth(getCurrentDate()));
  const [year, setYear] = useState(getYear(getCurrentDate()));

  const goPrev = () => {
    const prevMonthDate = new Date(year, month - 1);
    setYear(getYear(prevMonthDate));
    setMonth(getMonth(prevMonthDate));
  };

  const goNext = () => {
    const nextMonthDate = new Date(year, month + 1);
    setYear(getYear(nextMonthDate));
    setMonth(getMonth(nextMonthDate));
  };

  const goToday = () => {
    setYear(getYear(getCurrentDate()));
    setMonth(getMonth(getCurrentDate()));
  };

  const isToday = (date) => {
    return getCurrentDate().toDateString() === date.toDateString();
  };

  return (
    <>
      <h1>
        MonthlyCalendar - {months[month]} {year}
      </h1>
      <section>
        <ul className="row">
          <li>
            <button onClick={goPrev}>prev</button>
          </li>
          <li>
            <button onClick={goToday}>today</button>
          </li>
          <li>
            <button onClick={goNext}>next</button>
          </li>
        </ul>
      </section>
      <ul className="list-weekdays">
        {weekdays.map((weekday) => (
          <li key={weekday}>{weekday}</li>
        ))}
      </ul>
      <ul className="monthlyCalendar">
        {getCalendarDates(year, month).map((item, index) => (
          <li
            key={item.value.toDateString()}
            className={isToday(item.value) ? "active" : ""}
          >
            {item.value.toDateString()}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MonthlyCalendar;
