import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Form3(){
    const [email,setEmail]=useState();
    const [opt1,setOpt1]=useState();
    const [guest, setGuest]=useState();
    const [opt2,setOpt2]=useState();
    const [city2, setCity2]=useState();
    const [date3,setDate3]=useState();
    const [date4,setDate4]=useState();
    const navigate=useNavigate();

    //  alert("Please Signup/Login Before Filling the Form.");

    const handlebtn = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6050/wed', { email, opt1, guest, opt2, city2, date3, date4 });
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
                <h3 className="shead1"> PLAN YOUR WEDDING </h3> <br/>
                    <label className="mail">Enter Your E-mail</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                   
                <label>Choose Your Event</label> <br/>
                   <select onChange={(e)=>setOpt1(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="engagement">Engagement</option>
                   <option value="wedding">Wedding</option>
                   <option value="reception">Reception</option>
                   </select><br/>

                   <label> Number Of Guests </label> <br/>
                   <input type="number" onChange={(e)=>setGuest(e.target.value)}/> <br/> <br/>

                   <label>Guest Room Required?</label> <br/>
                   <select onChange={(e)=>setOpt2(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
                   </select><br/>

                   <label> Select City </label> <br/>
                   <select onChange={(e)=>setCity2(e.target.value)} className="form-select" aria-label="Default select example">
                   <option value="not selected">Select</option>
                   <option value="jaipur"> Jaipur </option>
                   <option value="goa"> Goa </option>
                   <option value="dalhousie"> Dalhousie </option>
                   <option value="chandigarh"> Chandigarh </option>
                   </select><br/>

                <label className="label1">From</label>
                <input type = "date" onChange={(e)=>setDate3(e.target.value)}/><br/><br/>
                <label className="label1">To</label>
                <input type = "date" onChange={(e)=>setDate4(e.target.value)}/><br/><br/>

                <label className="price"> PRICE FOR ENGAGEMENT </label><br/>
                <label className="price1"> STARTING FROM: ₹20,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button>
                <br/> <br/>
                <label className="price"> PRICE FOR WEDDING </label><br/>
                <label className="price1">  STARTING FROM: ₹50,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button>
                <br/><br/>
                <label className="price"> PRICE FOR RECEPTION </label><br/>
                <label className="price1">  STARTING FROM: ₹30,499</label>
                <button type="submit" className="btn btn-dark mt-2">BOOK</button> <br/> <br/>
                <marquee>
                <h6 className="head6"> <b> Prices may vary according to customer demands. </b></h6>                
                </marquee>    
                </form>
                </div>
    </>
    )
}
export default Form3;