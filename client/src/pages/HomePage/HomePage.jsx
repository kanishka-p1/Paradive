import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/card/Card'
import { actions } from "./content"
import "./HomePage.css"

function HomePage() {
    return (
        <div className='HomePage'>
            <Navbar />
            <div className='landing'>
                <div className="search">
                    <div className="searchBackground">
                        <img id="surfer" src={process.env.PUBLIC_URL + "/Assets/landingHero.jpg"} alt="" />
                        {/* <img id="overlaybottom" src={process.env.PUBLIC_URL + "/Assets/overlaybottom.png"} alt="" /> */}
                    </div>
                </div>
                <div className="featuredActivities">

                </div>
                <div className="featuredPosts">
                    <div className="postBackground">
                        <img id="canoeing" src={process.env.PUBLIC_URL + "/Assets/canoeing.jpg"} alt="" />
                    </div>
                </div>
                <div className="actionCards">
                    <div className="cards">
                        <Card
                            src={actions[0].src}
                            para={actions[0].para}
                            button={actions[0].button}
                        />
                        <Card
                            src={actions[1].src}
                            para={actions[1].para}
                            button={actions[1].button}
                        />
                        <Card
                            src={actions[2].src}
                            para={actions[2].para}
                            button={actions[2].button}
                        />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage