import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Availabletimes from "./Components/Availabletimes/Availabletimes";
import ScheduleCalender from "./Components/ScheduleCalender/ScheduleCalender";
import { variableState } from "../../../../Redux/variables";
import { useDispatch } from "react-redux";
function Schedule() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const bookingDateState = (val) => {
    console.log(val);
    setDate(val);
    dispatch(variableState({ DateSelect: val }));
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={8} xd={12}>
            <ScheduleCalender bookingDateState={bookingDateState} />
          </Col>
          <Col md={4} xd={12} className="p-0">
            <Availabletimes date={date} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Schedule;
