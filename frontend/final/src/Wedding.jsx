import React from "react";
import { Link } from "react-router-dom";
import AOS,{init} from "aos";
import wed1 from '../wed1.webp';
import wed2 from '../wed2.avif';
import wed3 from '../wed3.avif';


function Wedding() {
    AOS.init();

    return (
        <>
        <div className="full2">
            <div className="title">
                <div>
                    <Link to="/Home">
                        <button className="homebtn"> HOME </button>
                    </Link> 
                </div>
                <div>
                    <div className="big1"> <h2 className="B1">Make Your </h2><h1 className="B2"> BIG</h1> <h2 className="B3">Day</h2> </div>
                    <div className="big1"> <h2 className="B4">Special</h2><h2 className="B5">With Us...</h2> </div>
                </div>
            </div>
                    
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="card1">
                        <h3 className="head"> PLAN YOUR DREAM WEDDING  </h3>
                    </div>
        
                    <div className="all">
                        <a className="scroll" href="#room"> 
                            <div className="animte glw delay-5" id="first1">
                                <h3> ENGAGEMENT </h3>
                            </div>
                        </a>
                        <a className="scroll" href="#suite">
                            <div className="animte glw delay-6" id="second">
                                <h3> WEDDING </h3>
                            </div>
                        </a>
                        <a className="scroll" href="#lounge">
                            <div className="animte glw delay-7" id="third">
                                <h3> RECEPTION </h3>
                            </div>
                        </a>
                    </div>
        
                    <a name="room"> </a>
        
                    <div className="rooms">
        
                        <div className="sr" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className="roomhead1" data-aos="fade-down" data-aos-duration="3000">  ENGAGEMENT</h1>
        
                            <div className="pics">
        
                            <img id="pic2" src={wed1} className="d-block" alt="..."/>
        
                                <div id="about1">
                                    <ul>
                                        <li> Proper Engagement Party </li>
                                        <li> 1 Day Function </li>
                                        <li> Dining Included </li>
                                        <li> Indoor/Outdoor Party </li> 
                                    </ul>
        
                                

                                    <Link to="/Signup3">
                                    <button className="btn btn-success"  id="btns1"> Book Your Day </button>
                                    </Link>
                                </div>
        
                            </div>
                        </div>
        
                        <a name="suite"> </a>
        
                        <div className="st" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className="roomhead2" data-aos="fade-down" data-aos-duration="3000">  WEDDING </h1>
        
                            <div className="pics">
        
                            <img id="pic2" src={wed2} className="d-block" alt="..."/>
        
                                <div id="about2">
                                    <ul>
                                        <li> Proper Wedding Function </li>
                                        <li> 5-Days Function</li>
                                        <li> Haldi Ceremony </li>
                                        <li> Mehendi Ceremony </li>
                                        <li> Sangeet Party</li> 
                                        <li> Wedding </li>
                                        <li> Reception </li> 
                                    </ul>
        
                                    
        
                                    <Link to="/Signup3">
                                    <button className="btn btn-success"  id="btns1"> Book Your Days </button>
                                    </Link>
                                </div>
        
                            </div>
                        </div>
        
                        <a name="lounge"> </a>
        
                        <div className="vl" data-aos="fade-right" data-aos-duration="3000">
                            <h1 className="roomhead3" data-aos="fade-down" data-aos-duration="3000"> RECEPTION </h1>
        
                            <div className="pics">
        
                            <img id="pic2" src={wed3} className="d-block" alt="..."/>
        
                            <div id="about3">
                                    <ul>
                                        <li> Proper Reception Party </li>
                                        <li> 1 Day Function </li>
                                        <li> Dining Included </li>
                                        <li> Indoor/Outdoor Party </li> 
                                    </ul>
        
                                    
        
                                    <Link to="/Signup3">
                                    <button className="btn btn-success" id="btns1"> Book Your Day </button>
                                    </Link>
                                </div>
        
                            </div>
                        </div>
        
                    </div>
                </div>
        </>
    )
}

export default Wedding;