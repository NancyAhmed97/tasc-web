import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Availabletimes.css";
function Availabletimes({ date }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [value, setValue] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [mon, setMon] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  useEffect(() => {
    setDay(date.toString().slice(8, 10));
    setYear(date.toString().slice(11, 16));
    setMon(date.toString().slice(4, 7));
    setBookingDate(day + " , " + mon + year);
  }, [date, day, mon, year]);
  const chooseTime = (e) => {
    setValue(e.target.id);
  };
  if (redirect) {
    history.push("/Confirmyourdetails");
  }
  return (
    <>
      <div className="Availabletimes">
        <p>
          {currentLocal.meeting.availibleTime} <span>{bookingDate}</span>{" "}
        </p>
        <div className="AvailabletimesConatiner">
          <Container fluid className="p-0">
            {alert && (
              <Alert variant={"danger"}>{currentLocal.meeting.leasechooseyouravalibledate}</Alert>
            )}
            <Row>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "10.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="10.00"
                >
                  10.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "11.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="11.00"
                >
                  11.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "12.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="12.00"
                >
                  12.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "13.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="13.00"
                >
                  13.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "14.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="14.00"
                >
                  14.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "15.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="15.00"
                >
                  15.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "16.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="16.00"
                >
                  16.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "17.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="17.00"
                >
                  17.00
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div
        className={
          currentLocal.language === "English"
            ? "availableButton"
            : "aravailableButton"
        }
      >
        <button
          onClick={() => {
            if (value) {
              if (date) {
                setRedirect(true);
                localStorage.setItem("bookingTime", value);
              } else {
                setAlert(true);
              }
            } else {
              setAlert(true);
            }
          }}
        >
          {currentLocal.meeting.Confirm}
        </button>
      </div>
    </>
  );
}

export default Availabletimes;
