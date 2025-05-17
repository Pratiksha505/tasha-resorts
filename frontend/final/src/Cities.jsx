import React from "react";
import { Link } from "react-router-dom";
import city1 from '../city1.jpg';
import city2 from '../city2.webp';
import city3 from '../city3.webp';
import city4 from '../city4.jpeg';
import AOS,{init} from 'aos';

function Cities() {
        AOS.init();
    
    return(
        <>
        <div className="citybody">
            <h1 className="cityheading" data-aos="zoom-in"> CHOOSE YOUR FAVOURITE DESTINATION... </h1>
            <div className="cities">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="animate glow delay-1" id="card">
                            <Link className="link" to="/Purpose1"> 
                                <img src={city1} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <Link className="link" to="/Purpose1"> 
                                    <h5 className="card-title1"> JAIPUR </h5> 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="animate glow delay-2" id="card">
                            <Link className="link"  to="/Purpose2">
                                <img src={city2} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <Link className="link"  to="/Purpose2">
                                    <h5 className="card-title1"> GOA </h5> 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="animate glow delay-3" id="card">
                            <Link className="link" to="/Purpose3">
                                <img src={city3} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <Link className="link" to="/Purpose3">
                                    <h5 className="card-title1"> DALHOUSIE </h5> 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="animate glow delay-4" id="card">
                            <Link className="link" to="/Purpose4"> 
                                <img src={city4} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <Link className="link" to="/Purpose4"> 
                                    <h5 className="card-title1"> CHANDIGARH </h5> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cities;