import React from "react";
import { Link } from "react-router-dom";
import AOS,{init} from "aos";
import room1 from '../room1.webp';
import room2 from '../room2.avif';
import suite1 from '../suite1.avif';
import suite2 from '../suite2.avif';
import suite3 from '../suite3.avif';
import suite4 from '../suite4.avif';
import lounge1 from '../lounge1.avif';
import lounge2 from '../lounge2.avif';
import lounge3 from '../lounge3.avif';
import lounge4 from '../lounge4.webp';

function Stay() {
    AOS.init();

    return (
        <>
        <div className="full">
            <Link to="/Home">
                <button className="homebtn1"> HOME </button>
            </Link> 
            
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="card1">
                <h2 className="head"> CHOOSE YOUR LUXURY </h2>
            </div>

            <div className="all">
                <a className="scroll" href="#room">
                    <div className="animte glw delay-5" id="first">
                        <h3> STANDARD ROOMS </h3> 
                    </div>
                </a>
                <a className="scroll" href="#suite">
                    <div className="animte glw delay-6" id="second">
                        <h3> SUITES </h3> 
                    </div>
                </a>
                <a className="scroll" href="#lounge">
                    <div className="animte glw delay-7" id="third">
                        <h3> VIP LOUNGES </h3> 
                    </div>
                </a>
            </div>

            <a name="room"> </a>

            <div className="rooms">

                <div className="sr" data-aos="fade-right" data-aos-duration="3000">
                    <h1 className="roomhead1" data-aos="fade-down" data-aos-duration="3000"> STANDARD ROOMS </h1>

                    <div className="pics">

                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img id="pic1" src={room1} className="d-block" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img id="pic1" src={room2} className="d-block" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="about1">
                            <ul>
                                <li> Deluxe King Room </li>
                                <li>For Upto 2 persons</li>
                                <li> 1 King </li>
                                <li> Mini fridge </li>
                                <li> 45sqm/484sqft </li> 
                                <li> Living/sitting area </li>
                                <li> Wireless internet </li> 
                                <li> Coffee/tea maker </li>
                            </ul>

                            
                            <Link to="/Signup1">
                            <button className="btn1"> Book a Room </button></Link>
                        </div>

                    </div>
                </div>

                <a name="suite"> </a>

                <div className="st" data-aos="fade-right" data-aos-duration="3000">
                    <h1 className="roomhead2" data-aos="fade-down" data-aos-duration="3000"> SUITES </h1>

                    <div className="pics">

                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img id="pic1" src={suite1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img id="pic1" src={suite2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img id="pic1" src={suite3} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img id="pic1" src={suite4} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="about2">
                            <ul>
                                <li> Executive Club King Room </li>
                                <li>For Upto 4 persons</li>
                                <li> 1 King </li>
                                <li> Mini fridge </li>
                                <li> 45sqm/484sqft </li> 
                                <li> Living/sitting area </li>
                                <li> Wireless internet </li> 
                                <li> Coffee/tea maker </li>
                            </ul>

                            
                            <Link to="/Signup1">
                            <button className="btn1"> Book a Room </button></Link>
                        </div>

                    </div>
                </div>

                <a name="lounge"> </a>

                <div className="vl" data-aos="fade-right" data-aos-duration="3000">
                    <h1 className="roomhead3" data-aos="fade-down" data-aos-duration="3000"> VIP LOUNGES </h1>

                    <div className="pics">

                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img id="pic1" src={lounge1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img id="pic1" src={lounge2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img id="pic1" src={lounge3} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img id="pic1" src={lounge4} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="about3">
                            <ul>
                                <li> Presidential Suite </li>
                                <li>For Upto 6 Or More</li>
                                <li> 1 King </li>
                                <li> Bathrooms: 2 </li>
                                <li> Mini fridge </li>
                                <li> 225sqm/2421sqft </li> 
                                <li> Living/sitting area </li>
                                <li> Dining area </li>
                                <li> Separate living room </li>
                                <li> Wireless internet </li> 
                                <li> Coffee/tea maker </li>
                            </ul>

                           
                            <Link to="/Signup1">
                            <button className="btn1"> Book a Room </button></Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Stay;