import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Form1(){
    const [email,setEmail]=useState();
    const [option,setOption]=useState();
    const [city, setCity]=useState();
    const [date1,setDate1]=useState();
    const [date2,setDate2]=useState();
     const navigate=useNavigate();

    //  alert("Please Signup/Login Before Filling the Form.");

    const handlebtn = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6050/room', { email, option, city, date1, date2 });
            console.log(response.data);
            if (response.data) {
                alert("Booked Successfully");
                navigate('/Home1');
            } else {
                alert("Booking failed!");
            }
        } catch (err) {
            console.error(err);
            alert("Error occurred during booking.");
        }
        // alert("Please Signup/Login Before Filling the Form.");

    };
    
    return( <>
     <div className="form1">
        <div className="lastdiv">
            <h2 className="formhead">TASHA RESORTS</h2><br/>
            
        </div>
              
                
                <form className="formsign2" onSubmit={handlebtn}>
                <h3 className="shead1"> BOOK A ROOM </h3> <br/>
                    <label className="mail">Enter Your E-mail</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                   
                <label>Choose Your Luxury</label> <br/>
                   <select onChange={(e)=>setOption(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="standard">Standard</option>
                   <option value="suites">Suites</option>
                   <option value="lounge">Lounge</option>
                   </select><br/>

                   <label> Select City </label> <br/>
                   <select onChange={(e)=>setCity(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="jaipur"> Jaipur </option>
                   <option value="goa"> Goa </option>
                   <option value="dalhousie"> Dalhousie </option>
                   <option value="chandigarh"> Chandigarh </option>
                   </select><br/>


                <label className="label1">From</label>
                <input type = "date" onChange={(e)=>setDate1(e.target.value)}/><br/><br/>
                <label className="label1">To</label>
                <input type = "date" onChange={(e)=>setDate2(e.target.value)}/><br/><br/>

                <label className="price">STANDARD ROOM PRICE </label><br/>
                <label className="price1">₹10,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button>
                <br/> <br/>
                <label className="price">SUITES PRICE </label><br/>
                <label className="price1">₹15,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button>
                <br/><br/>
                <label className="price">LOUNGE PRICE </label><br/>
                <label className="price1">₹20,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button>

                    
                </form>
                </div>
    </>
    )
}
export default Form1;