import React, { useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import img from "../../../Resources/Assets/Group 6026.png"
import { Link } from 'react-router-dom';
import "./ForgetPasswordForm.css"
import axios from 'axios';
function ForgetPasswordForm() {
	const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const { currentLocal } = useSelector((state) => state.currentLocal);
	const sendData = (e) => {
		e.preventDefault();
		if(!email){
			setAlert(true)
		}else{
			setAlert(false)
			axios({
				method: "post",
				url: "http://localhost:8000/api/v1/forgetPassowd",
				data: {
				  email: email,
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
				break;
			}
			default:
				break;
		}
	};
  return (
    <div className='ForgetPasswordFormContainer'>
<Container>
  <Row>
      <Col md={6} xs={12} className='forgetPassCol'>
      <form onSubmit={sendData} className="forgetPassForm">
 				<div className="form">
 					<div >
					 <div className="errorMsg">
                {alert && !email && (
                  <Alert className={currentLocal.language==="العربيه"&&"text-right"} variant={"danger"}>*{currentLocal.login.emailIsRequired}</Alert>
                )}
              </div>
              <label>{currentLocal.login.email}</label>
 						<input
							className={
								alert
								  ? "error input form-control my-3"
								  : "input form-control my-3"
							  }
							type="email"
							id="email"
							value={email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="button text-center">
					<button type="submit" className="button-primary" >
						{currentLocal.login.send}
					</button>
				</div>
				<div className={currentLocal.language==="العربيه"?"text-right checkAccount":"checkAccount"}>
					<span> {currentLocal.login.RememberYourPassword}</span>
					<span className="mx-2">
						{" "}
						<Link to="/login"> {currentLocal.login.signin} </Link>
					</span>
				</div>
			</form>
      </Col>
      <Col md={6} xs={12}>
        <img src={img} alt="img" />
      </Col>
    </Row>
</Container>
    </div>
  )
}

export default ForgetPasswordForm
