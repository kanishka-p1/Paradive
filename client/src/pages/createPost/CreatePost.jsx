import React from 'react'
import "./createPost.css"
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function CreatePost() {
    return (
        <div className='createPostContainer'>
            <Navbar />
            <div className="formContainer">
                <form action="">
                    <div className="picsContainer">
                        <h1>Upload Images (Max 6)</h1>
                        <img id="upload" src={process.env.PUBLIC_URL + "/Assets/create.png"} width="100px" height="100px" alt="" />
                        <div className="uploadedPictures">
                            <img src={process.env.PUBLIC_URL + "/Assets/act1.png"} width="150px" height="150px" alt="" />
                            <img src={process.env.PUBLIC_URL + "/Assets/act2.png"} width="150px" height="150px" alt="" />
                            <img src={process.env.PUBLIC_URL + "/Assets/act3.png"} width="150px" height="150px" alt="" />
                            <img src={process.env.PUBLIC_URL + "/Assets/landingHero.jpg"} width="150px" height="150px" alt="" />
                            <img src={process.env.PUBLIC_URL + "/Assets/rafting.png"} width="150px" height="150px" alt="" />
                        </div>
                    </div>
                    <div className="inputContainer">
                        <div className="columns">
                            <div className="column">
                                <div className="input">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id='title' placeholder='Enter Title' />
                                </div>
                                <div className="input">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" id='location' placeholder='Enter location' />
                                </div>
                                <div className="input">
                                    <label htmlFor="type">Activity Type</label>
                                    <input type="text" id='type' placeholder='Enter Activity' />
                                </div>
                            </div>
                            <div className="column">
                                <div className="input">
                                    <label htmlFor="price">Price Range</label>
                                    <input type="text" id='price' placeholder='' />
                                </div>
                                <div className="input">
                                    <label htmlFor="date">Visited On</label>
                                    <input type="text" id='date' placeholder='' />
                                </div>
                                <div className="input">
                                    <label htmlFor="rate">Rate your Experience</label>
                                    <img src={process.env.PUBLIC_URL + "/Assets/rating.png"} height="20px" id='rate' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="input" id='lastInput'>
                            <label htmlFor="desc">Description</label>
                            <input type="text" id='desc' placeholder='' />
                        </div>
                        <button type='submit'>Post</button>
                    </div>
                </form>

            </div>
            <Footer />
        </div>
    )
}

export default CreatePost