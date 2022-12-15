import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./MeetngDetails.css";
function MeetngDetails() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="MeetngDetails">
      <Container>
        <div className="py-5">
          <h2>{currentLocal.meeting.meeting}</h2>
          <p>{currentLocal.meeting.direction}</p>
          <p>{currentLocal.meeting.meetingDetails}</p>
          <ul>
            <li>{currentLocal.meeting.firstRole}</li>
            <li>{currentLocal.meeting.secondRole}</li>
            <li>{currentLocal.meeting.thirdRole}</li>
            <li>{currentLocal.meeting.fouethRole}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default MeetngDetails;
