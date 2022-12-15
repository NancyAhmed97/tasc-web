import axios from "axios";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./GetInTouchForm.css";
function GetInTouchForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const [alert, setAlert] = useState(false);
  const { currentLocal } = useSelector((state) => state.currentLocal);

  const getData = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setPhoneNumber(e.target.value);
    } else {
      setMsg(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !msg||!email) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/v1/contact",
        data: {
          name: name,
          mobile: phoneNumber,
          message: msg,
          email: email,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <div className="GetInTouchForm">
      <form onSubmit={sendData} className={currentLocal.language==="العربيه"&&"arForm"}>
        <p>
        {currentLocal.contactus.pragraph}

        </p>
        <p >
          {alert && (
            <Alert variant={"danger"}>{currentLocal.contactus.alert}</Alert>
          )}
        </p>
        <label>
        {currentLocal.contactus.name}
        </label>
        <input
          className="name w-100 input"
          id="name"
          type="text"
          onChange={getData}
        />
        <label>
        {currentLocal.contactus.email}

        </label>
        <input
          className="email w-100 input"
          id="email"
          type="email"
          onChange={getData}
        />
        <label>
        {currentLocal.contactus.phoneNumber}

        </label>
        <input
          className="phone w-100 input"
          id="phone"
          type="number"
          onChange={getData}
        />
        <label>
        {currentLocal.contactus.yourQuestion}

        </label>
        <textarea
          className="w-100 input"
          id="msg"
          rows="4"
          onChange={getData}
        ></textarea>
        <div className="button">
          <button type="submit" className="w-100">
          {currentLocal.contactus.submit}
          </button>
        </div>
      </form>
    </div>
  );
}

export default GetInTouchForm;
