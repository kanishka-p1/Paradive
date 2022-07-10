import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import "./login.css";
import axios from "axios"
import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from "../../context/authContext"



function Login({ title, link }) {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const url = "http://localhost:7700/api/auth/login"
            const res = await axios.post(url, credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
            navigate(`${link}`)
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }

    console.log(credentials)

    return (
        <div className="login">
            <Navbar />
            <div className="loginCard">
                <div className='center'>
                    <h1>{title}</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="username"
                            id="username"
                            onChange={handleChange}
                            className="lInput"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            id="password"
                            onChange={handleChange}
                            className="lInput"
                        />
                        <button onClick={handleClick}>Login</button>
                        <p>Not registered? <Link to="/register">Register</Link></p>
                    </form>
                    {/* <form>
                        <div className="txt_field">
                            <input type="text" name="username" value={credentials.username} required onChange={handleChange} />
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input type="password" name="password" value={credentials.password} required onChange={handleChange} />
                            <label>Password</label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                        <button onClick={handleClick}>Login</button>
                        <div className="signup_link">
                            Don't have an account? <a href="#">SignUp</a>
                        </div>
                    </form> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login