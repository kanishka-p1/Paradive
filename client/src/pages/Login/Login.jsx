import React, { useState } from 'react'
import LoginForm from './LoginForm';
import "./login.css";

function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({username: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
        console.log("logged in");
        setUser({
            username: details.username,
            email: details.email,
        });
    } else {
        console.log("details don't match");
        setError("details don't match")
    }
  }

  const Logout = () => {
    setUser({name:"", email:""});
  }

  return (
    <div class="login">
        {(user.email !== "") ? (
            <div className="welcome">
                <h2>Welcome, <span>{user.username}</span></h2>
                <button onClick={Logout}>Logout</button>
            </div>
        ) : (
            <LoginForm Login={Login} error={error} />
        )}
    </div>
  )
}

export default Login