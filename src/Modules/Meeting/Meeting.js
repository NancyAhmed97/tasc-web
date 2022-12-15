import React from 'react'
import Navbar from '../Common/Navbar/Navbar'
import MeetngDetails from './Components/MeetngDetails/MeetngDetails'
import Schedule from './Components/Schedule/Schedule'
import Footer from '../Common/Footer/Footer'
import { useSelector } from "react-redux";
function Meeting() {
    const {currentLocal}=useSelector((state) => state.currentLocal); 
    return (
        <div className={currentLocal.language==="العربيه"&&"text-right"}>
      <Navbar activePage="Meeting"/>
            <MeetngDetails />
            <Schedule />
             <Footer />

        </div>
    )
}

export default Meeting
