import React, { useState } from "react";
import Navbar from "../Common/Navbar/Navbar";
import CompanySignup from "./Components/CompanySignup/CompanySignup";
import UserSignup from "./Components/userSignup/UserSignup";
import "./Signup.css";
function Signup() {
  const [signupState, setSignupState] = useState(false);
  const [userState, setUserState] = useState(false);
  const userSignUpState = (val) => {
    console.log(val);
    setSignupState(val);
  };
  const CompanySignupState = (val) => {
    setUserState(val);
  };

  console.log(signupState);
  return (
    <div className="signup">
      <Navbar activePage="login" />
      {!signupState && userState ? (
                <UserSignup userSignUpState={userSignUpState} />
      ) : (
        <CompanySignup CompanySignupState={CompanySignupState} />
      )}
    </div>
  );
}

export default Signup;
