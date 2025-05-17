import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../tasha.png';
import backvideo1 from '../backvideo1.mp4';
import AOS,{init} from 'aos';


function AdminDetails(){
    
    AOS.init();
    
    return(
    <>
    <div className="vidlogo1">
        <video id="myvideo1" autoPlay loop muted>
            <source src={backvideo1} type='video/mp4'/>
        </video>
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

        <div data-aos="zoom-out"  data-aos-duration="3000" id="adminlogo">
            <img id="adminlogo1" src={logo}/>
        </div>
    
    </div>


    </>
    )
}
export default AdminDetails;

