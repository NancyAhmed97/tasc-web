import React from "react";
import location from "../../../../../../Resources/Assets/Group 6491.svg";
import call from "../../../../../../Resources/Assets/Group 6492.svg";
import msg from "../../../../../../Resources/Assets/Group 6493.svg";
import { useSelector } from "react-redux";
function GetInTouchInfo() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="GetInTouchInfo">
      <div className={currentLocal.language==="English"?"title":"title arTitle"}>
        <h2> {currentLocal.contactus.touch}</h2>
      </div>
      <ul className="p-0">
        <li>
          <ul className="p-0 mb-5 touchContainer">
            <li className="d-inline-block">
              <img src={location} alt="location" />
            </li>
            <li className="d-inline-block">
              <h4> {currentLocal.contactus.addresstitle}</h4>
              <p>{currentLocal.contactus.address} </p>
            </li>
          </ul>
        </li>
        <li>
          <ul className="p-0 mb-5 touchContainer">
            <li className="d-inline-block">
              <img src={call} alt="location" />
            </li>
            <li className="d-inline-block">
              <h4>{currentLocal.contactus.callHelping}</h4>
              <p> + 966-11-4620694</p>
              <p>+ 966-11-4612677</p>
            </li>
          </ul>
        </li>
        <li>
          <ul className="p-0 mb-5 touchContainer">
            <li className="d-inline-block">
              <img src={msg} alt="location" />
            </li>
            <li className="d-inline-block">
              <h4> {currentLocal.contactus.mailInfotitle}</h4>
              <p>noreply@envato.com</p>
              <p>noreply@consultio.com</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GetInTouchInfo;
