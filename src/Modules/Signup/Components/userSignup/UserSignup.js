import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import img from "../../../../Resources/Assets/Group 6026.png";
import userSignUp from "../../../../Resources/Assets/userSignUp.png";
import check from "../../../../Resources/Assets/Icon awesome-check.png";
import "./UserSignup.css";
import axios from "axios";
function UserSignup({userSignUpState}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [job, setJop] = useState("");
  const [surname, setSurname] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [alert, setAlert] = useState(false);
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const sendData = (e) => {
    e.preventDefault();
    if (!name || !surname || !job || !email || !mobileNumber) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/v1/contact",
        data: {
          name: name,
          surname: surname,
          email: email,
          mobile: mobileNumber,
          job: job,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };
  const handleChange = (e) => {
    const id = e.target.id;
    switch (id) {
      case "email": {
        setEmail(e.target.value);
        setAlert(false);
        break;
      }
      case "name": {
        setName(e.target.value);
        setAlert(false);
        break;
      }
      case "surName": {
        setSurname(e.target.value);
        setAlert(false);
        break;
      }
      case "jop": {
        setJop(e.target.value);
        setAlert(false);
        break;
      }
      case "mobileNumber": {
        setMobileNumber(e.target.value);
        setAlert(false);
        break;
      }

      default:
        break;
    }
  };
  
  return (
    <div
      className={
        currentLocal.language === "العربيه"
          ? "text-right UserSignup arUserSignup"
          : "UserSignup"
      }
    >
      <Container>
        <div className="UserSignupContainer">
          <Row className="h-100">
            <Col md={6} xs={12}>
              <div className="formContainer">
                <h4>{currentLocal.registration.signup}</h4>
                <p className="d-flex">
                  <span
                    className="mx-4 checkContainer"
                    onClick={() => {
                      localStorage.removeItem("signupState");
                      userSignUpState(true)
                    }}
                  >
                    <p className="p-0 m-0">
                      <img src={check} alt={check} />
                    </p>
                    <p className="pt-3">
                      {currentLocal.registration.companyInfo}
                    </p>
                  </span>
                  <span className="userSignUp">
                    <p className="p-0 m-0">
                      {" "}
                      <img src={userSignUp} alt={userSignUp} />
                    </p>
                    <p>{currentLocal.registration.mainUserInfo}</p>
                  </span>
                </p>
                <p className="info">{currentLocal.registration.mainUserInfo}</p>
                <form onSubmit={sendData} className="forgetPassForm">
                  <div className="form">
                    <div>
                      <div className="errorMsg">
                        {alert && !email && (
                          <div className="f-12">
                            *{currentLocal.login.emailIsRequired}
                          </div>
                        )}
                      </div>
                      <Row>
                        <Col md={12}>
                          <label>{currentLocal.registration.Name}</label>
                          <input
                            type="text"
                            className="w-100  input"
                            id="name"
                          />
                        </Col>
                        <Col md={12}>
                          <label>{currentLocal.registration.Surname}</label>

                          <input
                            type="text"
                            className="w-100 input"
                            id="Surname"
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md={12}>
                          <label>{currentLocal.registration.job}</label>

                          <input type="text" className="w-100 input" id="jop" />
                        </Col>
                        <Col md={12}>
                          <label>{currentLocal.registration.email}</label>

                          <input
                            type="email"
                            className="w-100 input"
                            id="email"
                          />
                        </Col>
                        <Col md={12}>
                          <label>
                            {currentLocal.registration.mobileNumber}
                          </label>
                          <input
                            type="number"
                            className="w-100 input"
                            id="mobileNumber"
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="button">
                    <button type="submit" className="button-primary">
                      {currentLocal.registration.finish}
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md={6} xs={12} className="img-container">
              <img src={img} alt="img" />
            </Col>
          </Row>
        </div>
      </Container>{" "}
    </div>
  );
}

export default UserSignup;
