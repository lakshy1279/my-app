import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTableContainer from "react-table-container";
const Orders = () => {
    const [orders, setOrders] = useState([]);
    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
    useEffect(() => {
      let id = localStorage.getItem("userId");
      axios.get(`http://3.112.48.67/get-order/${id}`, config).then((data) =>{
         console.log(data.data.data.data);
         setOrders(data.data.data.data);
       })
    },[])
    
    return (
        <div>
        <div className="field">
        <button style={{"width":"200px"}}> <Link to = "/addOrder">Add Order</Link></button>
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Order Name</th>
                <th scope="col">OrderBy</th>
                <th scope="col">Sub_Total</th>
                </tr>
            </thead>
            <tbody>
            {orders.map((data, index) => {
                return (
                    <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{data.name}</td>
                    <td>{localStorage.getItem("name")}</td>
                    <td>{data.sub_total}</td>
                    </tr>
                )
            })} 
            </tbody>
        </table>
        </div>
    );
};

export default Orders;