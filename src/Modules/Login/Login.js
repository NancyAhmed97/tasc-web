import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import LoginForm from "../Login/LoginForm/LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <Navbar activePage="login" />
      <LoginForm />
    </div>
  );
}

export default Login;
