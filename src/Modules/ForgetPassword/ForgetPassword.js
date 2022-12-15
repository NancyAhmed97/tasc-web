import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import ForgetPasswordForm from "../ForgetPassword/ForgetPassword/ForgetPasswordForm";
import "./ForgetPassword.css";

function ForgetPassword() {
  return (
    <div className="Login">
      <Navbar activePage="login" />
      <ForgetPasswordForm />
    </div>
  );
}

export default ForgetPassword;
