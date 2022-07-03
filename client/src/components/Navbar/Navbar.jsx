import './navbar.css'
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar ? 'navContainer active' : 'navContainer'}>
            <Link to="/">
                <a className='navLogo'><img src={process.env.PUBLIC_URL + "/Assets/brand.png"} alt="" /></a>
            </Link>

            <input type="checkbox" id='menu-bar' />
            <label htmlFor="menu-bar"><FontAwesomeIcon icon={faBars} className="icon" /></label>
            <nav className='navbar'>
                <ul>
                    <Link to="/explore">
                        <li><a>Explore</a></li>
                    </Link>
                    <Link to="/new">
                        <li><a>New Post</a></li>
                    </Link>
                    <Link to="/register">
                        <li><a>Register</a></li>
                    </Link>
                    <Link to="/login">
                        <li><a>Login</a></li>
                    </Link>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar