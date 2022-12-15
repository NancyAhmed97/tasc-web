import React from "react";
import Footer from "../../../Common/Footer/Footer";
import Navbar from "../../../Common/Navbar/Navbar";
import ConfirmyourdetailsForm from '../Confirmyourdetails/Components/ConfirmyourdetailsForm'

function Confirmyourdetails() {
  return (
    <div>
      <Navbar activePage="Confirmyourdetails"/>
      <ConfirmyourdetailsForm />
      <Footer />
    </div>
  );
}

export default Confirmyourdetails;
