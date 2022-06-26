import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./register.css";

function Register() {
    return (
        <div className="register">
            <Navbar />
            <div className="registerCard">
                <div className='center'>
                    <h1>Join Us</h1>
                    <form method="post">
                        <div className="txt_field">
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="txt_field">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                        <input type="submit" class="button" value="Register" />
                        <div className="signup_link">
                            Already have an account? <a href="#">SignUp</a>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Register