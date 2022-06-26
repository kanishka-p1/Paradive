import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import PostCard from "../../components/PostCard/PostCard"
import './activity.css'

function Activity() {
    return (
        <div className='activityContainer'>
            <Navbar />
            <div className="particularActivity">
                <div className="heroimg">
                    <img id='wakeboarding' src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/07/31/1331862073629_2/guy-tanaka-in-action-at-punggol-marina-singapore" alt="" />
                </div>
                <div className="title">
                    <h1>Wakeboarding</h1>
                </div>
                <div className="para">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis unde mollitia omnis laboriosam eum,
                         recusandae pariatur eaque minus cumque fuga quibusdam distinctio non veritatis. Optio eveniet repudiandae 
                         cumque sit nemo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iusto qui consequatur 
                         dolore eum pariatur enim sit, dignissimos vero, mollitia dolorem. Illum facilis repudiandae doloribus quod 
                         minus qui similique possimus!
                    </p>
                </div>
                <div className="postContainer">
                    <div className="postsRow">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Activity