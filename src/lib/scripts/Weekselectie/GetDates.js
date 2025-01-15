// src/utils/dateUtils.js

export const loadMonthDays = (year, month) => {
    const daysOfWeek = [
      "zondag",
      "maandag",
      "dinsdag",
      "woensdag",
      "donderdag",
      "vrijdag",
      "zaterdag",
    ];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let monthDays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = daysOfWeek[date.getDay()];
      monthDays.push({ dayOfWeek, day });
    }
    return monthDays;
  };
  
  export const getCurrentDateInfo = () => {
    const dateAndTime = new Date();
    return {
      year: dateAndTime.getFullYear(),
      month: dateAndTime.getMonth(),
      day: dateAndTime.getDate(),
    };
  };
  
  export const monthNames = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ];