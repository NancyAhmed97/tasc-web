import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./ConfirmyourdetailsForm.css";
function ConfirmyourdetailsForm() {
  const [name, setName] = useState("");
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const {DateSelect}  = useSelector((state) =>state.DateSelect)
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [des, setdes] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [companySite, setCompanySite] = useState("");
  const [industry, setIndustry] = useState("");
  const [kind, setKind] = useState("");
      const [day, setDay] = useState("")
  const [year, setYear] = useState("")
  const [mon, setMon] = useState("")
  const [bookingDate, setBookingDate] = useState("")

  const [alert, setAlert] = useState(false);
  console.log(DateSelect.DateSelect);
  useEffect(() => {
    setDay(DateSelect.DateSelect.toString().slice(8,10))
    setYear(DateSelect.DateSelect.toString().slice(11,16))
    setMon(DateSelect.DateSelect.toString().slice(4,7))
    setBookingDate(day +' , '+ mon+year)
  }, [DateSelect.DateSelect,day,mon,year])

  const getData = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phoneNumber") {
      setPhoneNumber(e.target.value);
    } else if (e.target.id === "companyName") {
      setCompanyName(e.target.value);
    } else if (e.target.id === "website") {
      setWebsite(e.target.value);
    } else if (e.target.id === "Companywebsite") {
      setCompanySite(e.target.value);
    } else if (e.target.id === "Industry") {
      setIndustry(e.target.value);
    } else if (e.target.id === "des") {
      setdes(e.target.value);
    } else if (e.target.id === "Company") {
      setKind(e.target.value);
    } else if (e.target.id === "Customers") {
      setKind(e.target.value);
    } else if (e.target.id === "Other") {
      setKind(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (
      !name ||
      !phoneNumber ||
      !email ||
      !companyName ||
      !website ||
      !companySite ||
      !industry ||
      !des ||
      !kind
    ) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/v1/contact",
        data: {
          name: name,
          mobile: phoneNumber,
          email: email,
          companyName: companyName,
          website: website,
          companySite: companySite,
          industry: industry,
          des: des,
          Kind: kind,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <div className={currentLocal.language==="العربيه"?"text-right ConfirmyourdetailsForm arConfirmyourdetailsForm":"ConfirmyourdetailsForm"}>
      <Container>
        <div className="title">
          <h2>{currentLocal.meeting.Confirmation}</h2>
        </div>
        <div className="form">
          <form onSubmit={sendData}>
            <p>
              {currentLocal.meeting.wantameeting}
              <span>
                {" "}
                {bookingDate} {localStorage.getItem("bookingTime")}
                {localStorage.getItem("bookingTime") > "12.00" ? "PM" : "AM"}
              </span>
            </p>
            {alert && (
              <Alert variant={"danger"}>{currentLocal.meeting.alert}</Alert>
            )}
            <Row>
              <Col md={6} xs={12}>
                <label>{currentLocal.contactus.name}</label>
                <input
                  className="name w-100 input"
                  id="name"
                  type="text"
                  onChange={getData}
                />
              </Col>
              <Col md={6} xs={12}>
                <label>{currentLocal.registration.email}</label>

                <input
                  className="email w-100 input"
                  id="email"
                  type="email"
                  onChange={getData}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <label>{currentLocal.registration.mobileNumber}</label>
                <input
                  className="phone w-100 input"
                  id="phoneNumber"
                  type="number"
                  onChange={getData}
                />
              </Col>
              <Col md={6} xs={12}>
                <label>{currentLocal.registration.companyName}</label>

                <input
                  className="companyName w-100 input"
                  id="companyName"
                  type="text"
                  onChange={getData}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <label>{currentLocal.meeting.Website}</label>
                <input
                  className="website w-100 input"
                  id="website"
                  type="text"
                  onChange={getData}
                />
              </Col>
              <Col md={6} xs={12}>
                <label>{currentLocal.meeting.companyWebsite}</label>

                <input
                  className="Companywebsite w-100 input"
                  id="Companywebsite"
                  type="text"
                  onChange={getData}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12}>
                <label> {currentLocal.meeting.yourIndustry}</label>
                <textarea
                  className="Industry w-100 input"
                  id="Industry"
                  type="text"
                  onChange={getData}
                ></textarea>{" "}
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12}>
                <label> {currentLocal.meeting.describeYourNeeds}</label>
                <textarea
                  className="des w-100 textarea"
                  id="des"
                  rows="4"
                  type="text"
                  onChange={getData}
                ></textarea>{" "}
              </Col>
            </Row>
            <Row>
              <p>
                {currentLocal.meeting.WhoIsItFor}
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="Company"
                      name="kind"
                      value="My Company"
                      onChange={getData}
                    />
                    {currentLocal.meeting.MyCompany}
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Other"
                      name="kind"
                      value="Other"
                      onChange={getData}
                    />
                    {currentLocal.meeting.Other}
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Customers"
                      name="kind"
                      onChange={getData}
                      value=" One of my Customers"
                    />
                    {currentLocal.meeting.OneofmyCustomers}
                  </li>
                </ul>
              </p>
            </Row>
            <Row>
              <div className="button text-center">
                <button type="submit">
                  {currentLocal.meeting.ConfirmAppointment}
                </button>
              </div>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ConfirmyourdetailsForm;
