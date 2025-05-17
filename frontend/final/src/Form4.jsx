import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Form4(){
    const [email,setEmail]=useState();
    const [opt3,setOpt3]=useState();
    const [guest1, setGuest1]=useState();
    const [opt4,setOpt4]=useState();
    const [city3, setCity3]=useState();
    const [date5,setDate5]=useState();
    const navigate=useNavigate();

    //  alert("Please Signup/Login Before Filling the Form.");

    const handlebtn = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6050/event', { email, opt3, guest1, opt4, city3, date5 });
            console.log(response.data);
            alert("Booked Successfully");
            if (response.data) {
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
     <div className="form1">
     <div className="lastdiv">
            <h2 className="formhead">TASHA RESORTS</h2><br/>
        </div>
              
                
                <form className="formsign2" onSubmit={handlebtn}>
                <h3 className="shead1"> BOOK YOUR EVENT </h3> <br/>
                    <label className="mail">Enter Your E-mail</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                   
                <label>Choose Your Event</label> <br/>
                   <select onChange={(e)=>setOpt3(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="meetings">Meetings</option>
                   <option value="parties">Parties</option>
                   <option value="shows">Shows</option>
                   </select><br/>

                   <label> Number Of Guests </label> <br/>
                   <input type="number" onChange={(e)=>setGuest1(e.target.value)}/> <br/> <br/>

                   <label>Dining Required?</label> <br/>
                   <select onChange={(e)=>setOpt4(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
                   </select><br/>

                   <label> Select City </label> <br/>
                   <select onChange={(e)=>setCity3(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="jaipur"> Jaipur </option>
                   <option value="goa"> Goa </option>
                   <option value="dalhousie"> Dalhousie </option>
                   <option value="chandigarh"> Chandigarh </option>
                   </select><br/>

                <label className="label1">Date</label>
                <input type = "date" onChange={(e)=>setDate5(e.target.value)}/><br/><br/>
               
                <label className="price"> PRICE FOR MEETINGS </label><br/>
                <label className="price1">₹11,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button>
                <br/> <br/>
                <label className="price"> PRICE FOR PARTIES </label><br/>
                <label className="price1">₹16,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button>
                <br/><br/>
                <label className="price"> PRICE FOR SHOWS </label><br/>
                <label className="price1">₹21,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button> <br/> <br/>
               <marquee>
                <h6 className="head6"> <b> Prices may vary according to customer demands. </b></h6>                
                </marquee>  
                    
                </form>
                </div>
    </>
    )
}
export default Form4;