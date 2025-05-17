import React from "react";
import { Link } from "react-router-dom";
import AOS,{init} from 'aos';


function Purpose3() {
    AOS.init();

    return(
        <>
        <div className="purpose3"> 
            <div className="home">
                <Link to="/Home">
                    <button className="homebtn"> HOME </button>
                </Link> 
                <h1 className="heading1"> WHAT ARE YOU PLANNING? </h1>
            </div>

            <div data-aos="fade-right" data-aos-duration="3000" className="card mb-3" id="card5">
                <Link to="/Stay" className="link">
                    <div className="card-body">
                        <h5 className="card-title" id="card-title1"> STAY </h5>                   
                    </div>
                </Link>
            </div>
        
            <div data-aos="fade-left" data-aos-duration="3000" className="card mb-3" id="card6">
                <Link to="/Dining" className="link">
                    <div className="card-body">
                        <h5 className="card-title" id="card-title1"> DINING </h5>                   
                    </div>
                </Link>
            </div>
        
            <div data-aos="fade-right" data-aos-duration="3000" className="card mb-3" id="card5">
                <Link to="/Wedding" className="link">
                    <div className="card-body">
                        <h5 className="card-title" id="card-title1"> WEDDING </h5>                   
                    </div>
                </Link>
            </div>
        
            <div data-aos="fade-left" data-aos-duration="3000" className="card mb-3" id="card6">
                <Link to="/Events" className="link">
                    <div className="card-body">
                        <h5 className="card-title" id="card-title1"> EVENTS </h5>                   
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Purpose3;