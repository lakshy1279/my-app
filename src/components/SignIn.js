import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const SignIn = () => {
    let navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [inProgress, setinProgress] = useState(0);
    let handleFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            "mobile":mobile,
            "password":password
        }
        axios.post("http://localhost:7000/login-user", data).then((data) => {
            localStorage.setItem("token", data.data.data.token);
            localStorage.setItem("userId", data.data.data.user._id);
            localStorage.setItem("name", data.data.data.user.name);
            navigate('/Orders');
        })
      };
    return (
    <div>
            <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="text"
            placeholder="Mobile"
            required
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={(e) => handleFormSubmit(e)} disabled={inProgress}>
              Logging In
            </button>
          ) : (
            <button onClick={(e) => handleFormSubmit(e)}>Log In</button>
          )}
        </div>
      </form>
    </div>
    );
};

export default SignIn;