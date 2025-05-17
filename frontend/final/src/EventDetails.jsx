import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const EventDetails=()=> {
    const[data, setData]=useState([]);
    
    
        function getData() {
            axios.get("http://localhost:6050/eventdetails")
            .then((res)=> {
                console.log(res.data);
                setData(res.data);
            });
        }

        useEffect(()=> {
            getData();
        }, []);

    return (
        <>
        <nav className="navbar navbar-expand-lg" id="adminnavbar">
            <div className="container-fluid" id="adminnavbar1">
                <a className="navbar-brand" id="admintitle" href="/AdminDetails">TASHA</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="ul1">
                        <li className="nav-item" id="lii">
                            <NavLink to="/LoginDetails" className="nav-link" aria-current="page"> LOGIN </NavLink>
                        </li>
                        <li className="nav-item" id="lii">
                            <NavLink to="/RoomDetails" className="nav-link" aria-current="page"> STAY </NavLink>
                        </li>
                        <li className="nav-item" id="lii">
                            <NavLink to="/DiningDetails" className="nav-link" aria-current="page"> DINING </NavLink>
                        </li>
                        <li className="nav-item" id="lii">
                            <NavLink to="/WedDetails" className="nav-link" aria-current="page"> WEDDING </NavLink>
                        </li>
                        <li className="nav-item" id="lii">
                            <NavLink to="/EventDetails" className="nav-link" aria-current="page"> EVENTS </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link to="/Home">
                            <button className="btn btn-outline-dark" id = "adminbtn" type="submit"> Logout </button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>


        <div className="ahead">
            <h2> EVENT DETAILS </h2>
        </div>
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> EMAIL </th>
                        <th scope="col"> EVENT TYPE </th>
                        <th scope="col"> NUMBER OF GUESTS </th>
                        <th scope="col"> DINING REQUIRED </th>
                        <th scope="col"> DATE </th>
                    
                    </tr>
                </thead>
                
                    {
                        data.map((eventData)=> {
                            return(
                                <>
                                <tbody>
                                    <tr>      
                                        <td> {eventData.email} </td>
                                        <td> {eventData.opt3} </td>
                                        <td> {eventData.guest1} </td>
                                        <td> {eventData.opt4} </td>
                                        <td> {eventData.date5} </td>
                                       
                                    </tr>
                                </tbody>

                                </>

                            )
                        })
                    }
                
            </table>
        </div>
        
        

        </>
    )
}

export default EventDetails;