import './navbar.css'
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar ? 'navContainer active' : 'navContainer'}>
            <a href="#" className='navLogo'><img src={process.env.PUBLIC_URL + "/Assets/brand.png"} alt="" /></a>
            <input type="checkbox" id='menu-bar' />
            <label htmlFor="menu-bar"><FontAwesomeIcon icon={faBars} className="icon" /></label>
            <nav className='navbar'>
                <ul>
                    <li><a href="#">Activites </a></li>
                    <li><a href="#">New Post</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar