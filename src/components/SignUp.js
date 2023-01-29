import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
const SignUp = () => {
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [inProgress, setinProgress] = useState(0);
    const [error, setEror] = useState("");
    let mobileValiadation = (e) => {
        var re = /^[7-9][0-9]{9}$/;
        if (re.test(e.target.value)) {
            setMobile(e.target.value);
            setEror("")
        }
        else
        {
            setEror("Enter Correct Mobile No")
        }

    }
    let handleFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            "password" : password,
            "confirm_password" : confirmPassword,
            "name": name,
            "mobile":mobile
        }
        axios.post('http://3.112.48.67/addUser',data).then((data) => {
              console.log(data.data.data.token);
              localStorage.setItem("token", data.data.data.token);
              localStorage.setItem("userId", data.data.data.user._id);
              localStorage.setItem("name", data.data.data.user.name);
        })
      };
    return (
        <div>
        <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="mobile"
            placeholder="Enter your mobile"
            required
            onChange={(e) => mobileValiadation(e)}
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
          <input
            type="password"
            placeholder="Confirm password"
            required
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />
        </div>
        {inProgress ? (
          <div className="field">
            <button disabled={inProgress}>Sign Up</button>
          </div>
        ) : (
          <div className="field">
            <button onClick={(e) => handleFormSubmit(e)}>Sign Up</button>
          </div>
        )}
        <div className="field">
           <span>Already have a account?</span>
           <Link to = "/Login">SignIn</Link>
        </div>
      </form>
        </div>
    );
};

export default SignUp;