import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import one from "../../../../Resources/Assets/02.png";
import two from "../../../../Resources/Assets/NumOne.png";
import img from "../../../../Resources/Assets/Group 6026.png";
import rightArrow from "../../../../Resources/Assets/Icon feather-arrow-right.svg";
import "./CompanySignup.css";
import { useSelector } from "react-redux";
function CompanySignup({ CompanySignupState }) {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(" 4");
  const [sector, setSector] = useState("");
  const [country, setCountry] = useState("");
  const [alert, setAlert] = useState(false);
  const { currentLocal } = useSelector((state) => state.currentLocal);

  const handleChange = (e) => {
    if (e.target.id === "companyName") {
      setCompanyName(e.target.value);
    } else if (e.target.id === "sector") {
      setSector(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phoneNumber") {
      setPhoneNumber(e.target.value);
    } else if (e.target.id === "country") {
      setCountry(e.target.value);
    } else if (e.target.id === "city") {
      setCity(e.target.value);
    } else if (e.target.id === "address") {
      setAddress(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (
      !companyName ||
      !sector ||
      !email ||
      !phoneNumber ||
      !country ||
      !city ||
      !address
    ) {
      setAlert(true);
    } else {
      CompanySignupState(true);
    }
  };
  return (
    <div
      className={
        currentLocal.language === "العربيه"
          ? "text-right CompanySignup arCompanySignup"
          : "CompanySignup"
      }
    >
      <Container>
        <div className="CompanySignupContainer">
          <Row className="h-100">
            <Col md={6} xs={12} className="CompanySignupCol">
              <div className="formContainer">
                <h4>{currentLocal.registration.signup}</h4>
                <p className="numImg d-flex ">
                  <span className={ currentLocal.language === "العربيه"?"ml-4 one":"mr-4 one"}>
                    <p className="p-0 m-0">
                      <img src={two} alt="two" />
                    </p>
                    <p className="pt-3">
                      {currentLocal.registration.companyInfo}
                    </p>
                  </span>
                  <span className="two">
                    <p className="p-0 m-0">
                      {" "}
                      <img src={one} alt="one" className="mr-5" />
                    </p>
                    <p>{currentLocal.registration.mainUserInfo}</p>
                  </span>
                </p>
                <p className="companyInfo">
                  {currentLocal.registration.companyInfo}
                </p>
                <form onSubmit={sendData} className="forgetPassForm">
                  <div className="form">
                    <div>
                      <div className="errorMsg">
                        {alert && (
                          <Alert
                            className={
                              currentLocal.language === "العربيه" &&
                              "text-right"
                            }
                            variant={"danger"}
                          >
                            *{currentLocal.contactus.alert}
                          </Alert>
                        )}
                      </div>
                      <Row>
                        <Col md={12}>
                          <label>{currentLocal.registration.companyName}</label>
                          <input
                            type="text"
                            className="w-100  input"
                            id="companyName"
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md={12}>
                          <label>{currentLocal.registration.sector}</label>

                          <input
                            type="text"
                            className="w-100 input"
                            id="sector"
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md={12}>
                          <label>{currentLocal.registration.email}</label>

                          <input
                            type="email"
                            className="w-100 input"
                            id="email"
                            onChange={handleChange}
                          />
                        </Col>

                        <Col md={12}>
                          <label>
                            {currentLocal.registration.mobileNumber}
                          </label>
                          {/* <input
                            type="number"
                            className="w-100 input"
                            id="phoneNumber "
                            onChange={handleChange}
                          /> */}
                               <input
                            type="number"
                            className="w-100 input"
                            id="phoneNumber"
                            onChange={handleChange}
                          />
                        </Col>

                        <Col md={6} xs={12}>
                          <label>{currentLocal.registration.country}</label>
                          <input
                            type="text"
                            className="w-100 input"
                            id="country"
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md={6} xs={12}>
                          <label>{currentLocal.registration.city}</label>
                          <input
                            type="text"
                            className="w-100 input"
                            id="city"
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md={12}>
                          <label>{currentLocal.registration.address}</label>
                          <input
                            type="text"
                            className="w-100 input"
                            id="address"
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="button">
                    <button type="submit" className="button-primary">
                      {currentLocal.language === "English" ? (
                        <>
                          {currentLocal.registration.next}
                          <img src={rightArrow} alt="rightArrow" />
                        </>
                      ) : (
                        <>
                          <img src={rightArrow} alt="rightArrow" />
                          {currentLocal.registration.next}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md={6} xs={12} className="img-container">
              <img src={img} alt="img" className="w-100" />
            </Col>
          </Row>
        </div>
      </Container>{" "}
    </div>
  );
}

export default CompanySignup;
