
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../styles/task.css';



function MyCalendar() {
    const [date, setDate] = useState(new Date());

    return <div className="calendar-container"><Calendar onChange={setDate} value={date} /></div>;
}

export default MyCalendar;
