import React from 'react'
import './post.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PostContent from "../../components/postsComponents/postContent/PostContent"

function Post() {
    return (
        <div className='postPage'>
            <Navbar />
            <div className="postContainer">
                <PostContent />
            </div>
            <Footer />
        </div>
    )
}

export default Post