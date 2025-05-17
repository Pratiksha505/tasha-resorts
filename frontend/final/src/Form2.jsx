import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Form2(){
    const [email,setEmail]=useState();
    const [opt5,setOpt5]=useState();
    const [guest2, setGuest2]=useState();
    const [opt6,setOpt6]=useState();
    const [city1, setCity1]=useState();
    const [date6,setDate6]=useState();
    const [time, setTime]=useState();
    const navigate=useNavigate();

     
    //  alert("Please Signup/Login Before Filling the Form.");

    const handlebtn = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6050/dining', { email, opt5, guest2, opt6, city1, date6, time });
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
    };
    
    return( <>
     <div className="form2">
     <div className="lastdiv">
            <h2 className="formhead">TASHA RESORTS</h2><br/>
        
        </div>
              
                
                <form className="formsign2" onSubmit={handlebtn}>
                <h3 className="shead1"> BOOK A TABLE </h3> <br/>
                    <label className="mail">Enter Your E-mail</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                   
                <label> Booking For </label> <br/>
                   <select onChange={(e)=>setOpt5(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="hotelguest">Hotel Guests</option>
                   <option value="outsiders">Outsiders</option>
                   </select><br/>

                   <label> Number Of Persons </label> <br/>
                   <input type="number" onChange={(e)=>setGuest2(e.target.value)}/> <br/> <br/>

                   <label> Food Type </label> <br/>
                   <select onChange={(e)=>setOpt6(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="veg">Vegetarian</option>
                   <option value="nonveg">Non-Vegetarian</option>
                   </select><br/>

                   <label> Select City </label> <br/>
                   <select onChange={(e)=>setCity1(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="jaipur"> Jaipur </option>
                   <option value="goa"> Goa </option>
                   <option value="dalhousie"> Dalhousie </option>
                   <option value="chandigarh"> Chandigarh </option>
                   </select><br/>


                <label className="label1">Date</label>
                <input type = "date" onChange={(e)=>setDate6(e.target.value)}/><br/><br/>

                <label className="label1">Time </label>
                <input type="time" onChange={(e)=>setTime(e.target.value)}/>

                <button type="submit" className="btn btn-dark m-2"> BOOK YOUR TABLE </button>

                    
                </form>
                </div>
    </>
    )
}
export default Form2;