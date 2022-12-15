import React from 'react'
import Footer from '../Common/Footer/Footer'
import LandingSection from '../Common/LandingPage/LandingSection'
import Navbar from '../Common/Navbar/Navbar'
import ApplicationPrices from './Components/ApplicationPrices/ApplicationPrices'
import { useSelector } from "react-redux";
function Price() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
    return (
        <div className={currentLocal.language==="العربيه"&&"text-right"}>
            <Navbar activePage="Pricing plans" />
            <LandingSection activePage="Pricing plans" />
            <ApplicationPrices />
            <Footer activeState="pricing"/>
        </div>
    )
}

export default Price
