import React from 'react'
import './footer.css'
import {
    faLocationDot,
    faPhone,
    faEnvelope,
}

    from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className='footerContainer'>
            <div className="footerColumn">
                <img src={process.env.PUBLIC_URL + "/Assets/footerbrand.png"} className="footerElement" alt="" />
                <p className='footerElement'>We are a community promotes outdoor activities and allows people explore more such activities through community engagement</p>
            </div>
            <div className="footerColumn">
                <h2 className='footerElement'>Contact Us</h2>
                <h3 className="footerElement"><FontAwesomeIcon icon={faLocationDot} className="icon" /> Delhi, India</h3>
                <h3 className="footerElement"><FontAwesomeIcon icon={faPhone} className="icon" /> 12345678910</h3>
                <h3 className="footerElement"><FontAwesomeIcon icon={faEnvelope} className="icon" /> abc@gmail.com</h3>
            </div>
            <div className="footerColumn">
                <h2 className='footerElement'>Contact Us</h2>
                <div className="footerElement">
                    <img src={process.env.PUBLIC_URL + "Assets/4.png"} alt="" />
                    <img src={process.env.PUBLIC_URL + "Assets/5.png"} alt="" />
                    <img src={process.env.PUBLIC_URL + "Assets/6.png"} alt="" />
                    <img src={process.env.PUBLIC_URL + "Assets/7.png"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer