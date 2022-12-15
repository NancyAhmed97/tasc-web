import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Wrong from "../../../../Resources/Assets/Union 7.svg";
import right from "../../../../Resources/Assets/Icon awesome-check.svg";
import "./ApplicationPrices.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ApplicationPrices() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [priceState, setPriceState] = useState("Application");
  const transparetState = (e) => {
    setPriceState(e.target.id);
  };
  return (
    <div className="ApplicationPrices">
      <Container>
        <div className="title text-center">
          <div className="priceDetails">
            <div
              className={
                priceState === "Application" ? "active " : "Application"
              }
              id="Application"
              onClick={transparetState}
            >
              {currentLocal.pricing.applicationPrices}
            </div>
            <div
              className={
                priceState === "Implementation"
                  ? "active pr-3"
                  : "Implementation pr-3"
              }
              id="Implementation"
              onClick={transparetState}
            >
              {currentLocal.pricing.implementationPrices}
            </div>
          </div>
          <h2 className="py-5">
            {priceState === "Application"
              ? currentLocal.pricing.applicationPrices
              : currentLocal.pricing.implementationPrices}
          </h2>
        </div>

        <div>
          <table>
            <tr>
              <th></th>
              <th>
                <p>
                  {priceState === "Application" ? "Micro Business" : "Basic"}
                </p>
                <p>$200</p>
              </th>
              <th>
                <p>
                  {priceState === "Application" ? "Small Business" : "Standard"}
                </p>
                <p>$500</p>
              </th>
              <th>
                <p>
                  {priceState === "Application" ? "Medium Business" : "Custom"}
                </p>
                <p>$1000</p>
              </th>
            </tr>
            <tr>
              <td>
                {priceState === "Application"
                  ? " Users Included "
                  : "Dedicated Customer Consultant *"}
              </td>
              <td>{priceState === "Application" ? "3" : "25 hours"}</td>
              <td>{priceState === "Application" ? "5" : "50 hours"}</td>
              <td>{priceState === "Application" ? "12" : "100 hours"}</td>
            </tr>
            <tr>
              <td>
                {priceState === "Application"
                  ? "General Ledge  "
                  : "Project Mangement"}
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
            </tr>
            <tr>
              <td>
                {priceState === "Application"
                  ? "Customizable Reports  "
                  : "Email + Phone Suuport"}
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
            </tr>
            <tr>
              <td>
                {priceState === "Application"
                  ? "Business Intelligence  "
                  : "Training & Coaching"}
              </td>
              <td>
                {priceState === "Application" ? (
                  "Basic  "
                ) : (
                  <img src={right} alt="right" />
                )}
              </td>
              <td>
                {priceState === "Application" ? (
                  "Basic  "
                ) : (
                  <img src={right} alt="right" />
                )}
              </td>
              <td>
                {priceState === "Application" ? (
                  "Full  "
                ) : (
                  <img src={right} alt="right" />
                )}
              </td>
            </tr>
            <tr>
              <td>
                {priceState === "Application"
                  ? "Accounts Payable  "
                  : "Configuration"}
              </td>
              <td>
                {priceState === "Application" ? (
                  <img src={Wrong} alt="Wrong" />
                ) : (
                  <img src={right} alt="right" />
                )}
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
              <td>
                <img src={right} alt="right" />
              </td>{" "}
            </tr>
            <tr>
              <td className={priceState === "Implementation" && "py-2"}>
                {priceState === "Application"
                  ? " Accounts Receivable  "
                  : "Data Importation Assistance"}
              </td>
              <td>
                {priceState === "Application" ? (
                  <img src={Wrong} alt="Wrong" />
                ) : (
                  <img src={right} alt="right" />
                )}{" "}
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
            </tr>
            <tr>
              <td
                className={
                  priceState === "Implementation" && "AppCustomization"
                }
              >
                {priceState === "Application"
                  ? " Bank & Printing Checks    "
                  : "App Customization"}
              </td>
              <td className={priceState === "Implementation" && "emptyCell"}>
                {priceState === "Application" ? (
                  <img src={Wrong} alt="Wrong" />
                ) : (
                  ""
                )}
              </td>
              <td className={priceState === "Implementation" && "emptyCell"}>
                {priceState === "Application" ? (
                  <img src={right} alt="right" />
                ) : (
                  ""
                )}
              </td>
              <td
                className={priceState === "Implementation" && "lastEmptyCell"}
              >
                {priceState === "Application" ? (
                  <img src={right} alt="right" />
                ) : (
                  ""
                )}{" "}
              </td>
            </tr>
            <tr>
              <td>
                {priceState === "Application"
                  ? " Cash Management"
                  : "Customization (Forms,Report,Workflows)"}
              </td>
              <td>
                {priceState === "Application" ? (
                  <img src={Wrong} alt="Wrong" />
                ) : (
                  <img src={right} alt="right" />
                )}
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
              <td>
                <img src={right} alt="right" />
              </td>
            </tr>
            <tr>
              <td>
                {priceState === "Application"
                  ? " Integrations   "
                  : "Developments"}
              </td>
              <td>
                <img src={Wrong} alt="Wrong" />
              </td>
              <td>
                {priceState === "Application" ? (
                  "Only what is available    "
                ) : (
                  <img src={Wrong} alt="Wrong" />
                )}
              </td>
              <td>
                {priceState === "Application" ? (
                  "  Any integration needed    "
                ) : (
                  <img src={right} alt="right" />
                )}
              </td>
            </tr>
          </table>
        </div>
        <ul className={currentLocal.language === "العربيه" && "text-right"}>
          <li>{currentLocal.pricing.firstPrice}</li>
          <li>{currentLocal.pricing.secondPrice}</li>
          <li>{currentLocal.pricing.thirdPrice}</li>
        </ul>
        <div className="button ">
          <Link to="/meeting">
            <button className="text-white">
              {currentLocal.home.contactOurExpert}
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default ApplicationPrices;
