import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const DiningDetails=()=> {
    const[data, setData]=useState([]);
    
    
        function getData() {
            axios.get("http://localhost:6050/diningdetails")
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
            <h2> DINING DETAILS </h2>
        </div>
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col"> EMAIL </th>
                        <th scope="col"> BOOKING FOR </th>
                        <th scope="col"> NUMBER OF PERSONS </th>
                        <th scope="col"> FOOD TYPE </th>
                        <th scope="col"> DATE </th>
                        <th scope="col"> TIME </th>
                    
                    </tr>
                </thead>
                
                    {
                        data.map((diningData)=> {
                            return(
                                <>
                                <tbody>
                                    <tr>      
                                        <td> {diningData.email} </td>
                                        <td> {diningData.opt5} </td>
                                        <td> {diningData.guest2} </td>
                                        <td> {diningData.opt6} </td>
                                        <td> {diningData.date6} </td>
                                        <td> {diningData.time} </td>

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

export default DiningDetails;