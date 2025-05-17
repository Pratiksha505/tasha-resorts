import React, { useState } from "react";
import logo from '../tasha.png';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login4() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:6050/loginn', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "success") {
                    navigate('/Form4');
                } else {
                    setErrorMessage(result.data); // Update error message from response
                }
            })
            .catch(err => {
                console.log(err);
                setErrorMessage("An error occurred. Please try again.");
            });
    }

    return (
        <>
            <div className="container1">
                <div className="log">
                    <img className="loginlogo" src={logo} alt="Logo" />
                </div>

                <div className="form">
                    <h2 className="shead"> LOGIN </h2> <br/>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )} 
                        <button type="submit" className="btn btn-dark mt-2"> LOGIN </button>
                        <br /> <br />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login4;
