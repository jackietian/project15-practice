export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const getCurrentDate = () => new Date();
export const getMonth = (date) => date.getMonth();
export const getYear = (date) => date.getFullYear();

export const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year, month) =>
  new Date(year, month, 1).getDay();

export const getLastDayOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDay();

export const getCalendarDates = (year, month) => {
  const firstDay = getFirstDayOfMonth(year, month);
  const lastDay = getLastDayOfMonth(year, month);

  const daysInMonth = getDaysInMonth(year, month);
  let daysInPrevMonth = getDaysInMonth(year, month - 1);

  const calendarDates = [];

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDates.push({
      label: i,
      value: new Date(year, month, i),
    });
  }

  for (let i = 0; i < firstDay; i++) {
    calendarDates.unshift({
      label: daysInPrevMonth,
      value: new Date(year, month - 1, daysInPrevMonth),
    });
    daysInPrevMonth = daysInPrevMonth - 1;
  }

  let day = 1;
  for (let i = 6; i > lastDay; i--) {
    calendarDates.push({
      label: day,
      value: new Date(year, month + 1, day),
    });
    day = day + 1;
  }
  return calendarDates;
};
