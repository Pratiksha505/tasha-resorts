import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[message, setMessage]=useState('');
    const navigate=useNavigate();

    const predefinedCredentials={
        email:'tasha123@gmail.com',
        password:'tasha123',
    };

    const handleLogin=()=> { 
        if(email===predefinedCredentials.email && password===predefinedCredentials.password) {
            setMessage(`Welcome Admin`);
            alert("Welcome Admin")
            navigate('/AdminDetails');
        }
        else {
            setMessage('Invalid email or password');
        }
    };

    return(
        <>
        <div className="logindiv">
          <h2 className="l"> TASHA RESORTS </h2> <br/>
          <form className="f" onSubmit={handleLogin}>
            <h3 className="loginhead"> Login Page </h3> <br/>
            
            <label id="lastl" className="form-label">Email </label>
            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="email" 
            placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)} /> <br/>
            
            <label id="lastl" className="form-label">Password</label>
            <input className="form-control" id="exampleInputPassword1" type="password" 
            placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)} /> <br/> 
            
            <button className="btn btn-dark"> Login </button>
          </form>
            
        <div> {message} </div>
        </div>

        </>
    )
}

export default Admin;