import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from "../styles/history.module.css";
import 'react-calendar/dist/Calendar.css';
const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  }

  return (
    <div className={styles.calendarWrapper}>
      <Calendar
        onChange={onChange}
        value={date}
        className={styles.calendar}
        calendarType="ISO 8601"
      />
    </div>
  );
};

export default CalendarComponent;
