import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const RoomDetails=()=> {
    const[data, setData]=useState([]);
    
    
        function getData1() {
            axios.get("http://localhost:6050/roomdetails")
            .then((res)=> {
                console.log(res.data);
                setData(res.data);
            });
        }

        useEffect(()=> {
            getData1();
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
            <h2> ROOM DETAILS </h2>
        </div>
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> EMAIL </th>
                        <th scope="col"> ROOM TYPE </th>
                        <th scope="col"> FROM DATE </th>
                        <th scope="col"> TO DATE </th>
                    
                    </tr>
                </thead>
                
                    {
                        data.map((roomData)=> {
                            return(
                                <>
                                <tbody>
                                    <tr>      
                                        <td> {roomData.email} </td>
                                        <td> {roomData.option} </td>
                                        <td> {roomData.date1} </td>
                                        <td> {roomData.date2} </td>
                                       
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

export default RoomDetails;