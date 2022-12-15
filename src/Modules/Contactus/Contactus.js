import React from 'react'
import Footer from '../Common/Footer/Footer'
import LandingSection from '../Common/LandingPage/LandingSection'
import Navbar from '../Common/Navbar/Navbar'
import GetInTouch from './Components/GetInTouch/GetInTouch'
import Map from './Components/Map/Map'

function Price() {
    return (
        <div>
            <Navbar activePage="Contact us"/>
            <LandingSection activePage="Contact us" />
            <GetInTouch />
            <Map />
            <Footer activeState="contact" />
        </div>
    )
}

export default Price
