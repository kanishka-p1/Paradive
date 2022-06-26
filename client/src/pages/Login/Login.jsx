import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import "./login.css";

function Login() {
    return (
        <div className="login">
            <Navbar />
            <div className="loginCard">
                <div className='center'>
                    <h1>Welcome Back!</h1>
                    <form method="post">
                        <div className="txt_field">
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                        <input type="submit" class="button" value="Login" />
                        <div className="signup_link">
                            Don't have an account? <a href="#">SignUp</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login