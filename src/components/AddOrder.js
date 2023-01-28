import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";
const AddOrder = () => {
    let navigate = useNavigate();
    const [total, setSubTotal] = useState("");
    const [orderName, setOrderName] = useState("");
    const [inProgress, setinProgress] = useState(0);
    const [error, setEror] = useState("");
    let handleFormSubmit = (e) => {
        e.preventDefault();
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }
        let data = {
            "sub_total":total,
            "name": orderName
        }
        axios.post('http://localhost:7000/add-order',data, config).then((data) => {
              console.log(data);
              navigate('/Orders');
        })
      };
    return (
        <div>
            <form className="login-form">
                <span className="login-signup-header">Add Order</span>
                {error && <div className="alert error-dailog">{error}</div>}
                <div className="field">
                <input
                    type="text"
                    placeholder="Enter order name"
                    required
                    onChange={(e) => setOrderName(e.target.value)}
                />
                </div>
                <div className="field">
                <input
                    type="text"
                    placeholder="Enter Amount"
                    required
                    onChange={(e) => setSubTotal(e.target.value)}
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
            </form>
        </div>
    );
};

export default AddOrder;