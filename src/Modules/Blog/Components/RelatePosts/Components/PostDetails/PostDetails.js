import React from 'react'
import RelatedPostsContainer from '../PostDetails/Components/Related posts/RelatedPostsContainer'
import ContentWithoutBackwardContainer from "../PostDetails/Components/Contentwithoutbackward/ContentWithoutBackwardContainer"
import LandingPost from './Components/LandingPost/LandingPost'
import { useSelector } from 'react-redux';
function PostDetails() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
    return (
        <div className={currentLocal.language==="العربيه"?"text-right PostDetails":"PostDetails"}>
            <LandingPost />
            <ContentWithoutBackwardContainer />
            <RelatedPostsContainer />
        </div>
    )
}

export default PostDetails
