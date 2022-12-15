import axios from "axios";
import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import passSeen from "../../../Resources/Assets/Group 6489.svg";
import img from "../../../Resources/Assets/Group 6026.png";
import "./LoginForm.css";
function LoginForm() {
  const [passSeenState, setPassSeenState] = useState("password");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState("");
  const [alert, setAlert] = useState(false);
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const changePassSeen = () => {
    if (passSeenState === "password") {
      setPassSeenState("text");
    } else if (passSeenState === "text") {
      setPassSeenState("password");
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/v1/login",
        data: {
          email: email,
          password: pass,
          rememberMe: rememberMe,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };
  const getData = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPass(e.target.value);
    } else if (e.target.id === "Remember") {
      setRememberMe(e.target.value);
    }
  };

  return (
    <div className={currentLocal.language==="العربيه"?"login arlogin":"login"}>
      <Container>
        <Row>
          <Col lg={6} md={7} xs={12} className="forgetPassCol">
            <form onSubmit={sendData} className="forgetPassForm">
              <div className="form">
              <div className={currentLocal.language==="العربيه"?"text-right formContainer":"formContainer"}>
                <h4>{currentLocal.login.signin}</h4>
                <p>
                 {currentLocal.login.loginContent}
                </p>
                <div className="errorMsg">

                    {alert  && (
                      <Alert
                        className={
                          currentLocal.language === "العربيه" && "text-right"
                        }
                        variant={"danger"}
                      >
                        *{currentLocal.login.alert}
                      </Alert>
                    )}
                    </div>
                  <label>{currentLocal.login.email}</label>
                  <input
                    type="email "
                    className="w-100  input"
                    id="email"
                    onChange={getData}
                  />
                  <label>{currentLocal.login.password}</label>

                  <input
                    type={passSeenState}
                    className="w-100 mb-3 input"
                    id="password"
                    onChange={getData}
                  />
                  <img
                    src={passSeen}
                    alt="passSeen"
                    className="passSeen"
                    onClick={changePassSeen}
                  />
                     <Row className=" checkbox">
                    <Col md={6} xd={6}>
                      <input
                        type="checkbox"
                        id="Remember"
                        name="Remember"
                        value="Remember"
                        onChange={getData}

                      />
                      <label for="Remember" className="Remember">
                        {currentLocal.login.RememberMe}
                      </label>
                    </Col>
                    <Col md={6} xd={6} className="forgetPass">
                      <Link to="/forgotPassword">{currentLocal.login.forgetPassword}</Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} xs={6}></Col>
                    <Col md={6} xs={6} className="forgetPass pb-2">
                    <Link to="/signup">{currentLocal.login.registerNow}</Link>

                    </Col>
                  </Row>

                  <Row>
                    <div className="button">
                      <button type="submit">{currentLocal.login.loginNow}</button>
                    </div>
                  </Row>
                </div>
              </div>
              {/* <div className="button text-center">
                <button type="submit" className="button-primary">
                  {currentLocal.login.send}
                </button>
              </div> */}
              {/* <div
                className={
                  currentLocal.language === "العربيه"
                    ? "text-right checkAccount"
                    : "checkAccount"
                }
              >
                <span> {currentLocal.login.RememberYourPassword}</span>
                <span className="mx-2">
                  {" "}
                  <Link to="/login"> {currentLocal.login.signin} </Link>
                </span>
              </div> */}
            </form>
          </Col>
          <Col lg={6} md={5} xs={12}>
            <img src={img} alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
