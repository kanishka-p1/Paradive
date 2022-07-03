import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./register.css";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Register() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        desc: ""
    })

    const [error, setError] = useState("")

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:7700/api/auth/register"
            const { data: res } = await axios.post(url, data);
            console.log(res.message)
            navigate("/login")
        } catch (error) {
            if (error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }


    return (

        <div className="register">
            <Navbar />
            <div className="registerCard">
                <div className='center'>
                    <h1>Join Us</h1>

                    <form>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={handleChange}
                            value={data.username}
                            required
                        />

                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                        />

                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Write bio"
                            name="desc"
                            onChange={handleChange}
                            value={data.desc}

                        />

                        <button onClick={handleSubmit}>Register</button>
                    </form>
                    {/* <form>
                        <div className="txt_field">
                            <input value={data.username || ""} onChange={handleChange} type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input value={data.email || ""} onChange={handleChange} type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="txt_field">
                            <input value={data.password || ""} onChange={handleChange} type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="txt_field">
                            <input value={data.desc || ""} onChange={handleChange} type="text" required />
                            <label>Bio</label>
                        </div>
                        {error && <div>{error}</div>}
                        <input onSubmit={handleSubmit} type="submit" class="button" value="Register" />
                        <div className="signup_link">
                            Already have an account? <Link to="/login">SignUp</Link>
                        </div>
                    </form> */}
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Register