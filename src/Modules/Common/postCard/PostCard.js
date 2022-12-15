import React from 'react'
import dateIcon from "../../../Resources/Assets/Icon feather-calendar.svg"
import christina from "../../../Resources/Assets/christina-wocintechchat-com-L85a1k-XqH8-unsplash.png"
import "./PostCard.css"
function PostCard() {
    return (
        <div className='postCard'>
            <img src={christina}alt="christina" />
            <div className='overly'></div>
            <div>
                <p><img src={dateIcon} alt="dateIcon"/>14, November 2021</p>
                <p>Be Yourself, Everyone Else Is Already Taken.</p>
            </div>
        </div>
    )
}

export default PostCard
