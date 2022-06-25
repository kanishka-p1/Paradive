import React from 'react'
import "./HomePage.css"

function HomePage() {
    return (
        <div>
            <div className="search">
                <div className="searchBackground">
                    <img id="surfer" src={process.env.PUBLIC_URL + "/Assets/landingHero.jpg"} alt="" />
                    {/* <img id="overlaybottom" src={process.env.PUBLIC_URL + "/Assets/overlaybottom.png"} alt="" /> */}
                </div>
                <div className="featuredActivities">

                </div>
                <div className="featuredPosts">
                    <div className="postBackground">
                        <img id="canoeing" src={process.env.PUBLIC_URL + "/Assets/canoeing.jpg"} alt="" />
                    </div>
                </div>
                <div className="otherCards">

                </div>
            </div>

            This is home page
        </div>
    )
}

export default HomePage