import React from "react";
import Footer from "../Common/Footer/Footer";
import TascCompanyInformation from "../Home/Components/TascCompanyInformation/TascCompanyInformation";
import LandingSection from "../../Modules/Common/LandingPage/LandingSection";
import Navbar from "../Common/Navbar/Navbar";
import AdvancedFeatures from "./Components/ADVANCEDFEATURES/AdvancedFeatures";
import TascActivity from "./Components/TascActivity/TascActivity";
function Home() {
  
  return (
    <div>
      <Navbar activePage="About us" />
      <LandingSection activePage="About us" />
      <TascCompanyInformation state={"about"}/>
      <TascActivity />
    <AdvancedFeatures />
      <Footer activeState="about" />
    </div>
  );
}

export default Home;
