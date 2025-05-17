import React, {useState} from "react";
import './Signup.css';
import logo from '../tasha.png';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup4() {
    const[email, setEmail]=useState();
    const[password, setPassword]=useState();
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6050/signup', { email, password });
            console.log(response.data);
            if (response.data) {
                navigate('/Login4');
            } else {
                alert("Signup failed!");
            }
        } catch (err) {
            console.error(err);
            alert("Error occurred during signup.");
        }
    };
    

    return(
        <>

        <div className="container2">
            <div className="log">
                <img className="loginlogo" src={logo}/>
            </div>
        
            <div className="form">
                <h2 className="shead"> SIGN UP </h2> <br/>
                <form className="formsign" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                        onChange={(e)=> setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-dark mt-2">SIGN UP</button>
                    <br/> <br/>

                    <Link to="/Login4" className="loginlink">
                        <label className="already"> Already Have An Account? </label>
                    </Link>
                </form>
            </div>
                    
        </div>
        </>
    )
}

export default Signup4;