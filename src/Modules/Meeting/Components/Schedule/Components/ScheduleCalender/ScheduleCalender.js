import React
// ,{useState} 
from "react";
import { useSelector } from "react-redux";
import DatePicker from "sassy-datepicker";
import "./ScheduleCalender.css";
function ScheduleCalender({bookingDateState}) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const onChange = (date) => {

    bookingDateState(date.toString())
  };

  return (
    <div className="ScheduleCalender">
      <DatePicker onChange={onChange} className={currentLocal.language==="English"?"mb-4 ":"mb-4 arDatePicker"} />
      <p className="mb-5 pb-5">{currentLocal.meeting.time}<span> {currentLocal.meeting.timeCity}</span> {currentLocal.meeting.timeZone}</p>
    </div>
  );
}

export default ScheduleCalender;
