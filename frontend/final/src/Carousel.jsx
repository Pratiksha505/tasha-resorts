import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import AOS,{init} from 'aos';

import carousel1 from '../carousel1.avif';
import carousel2 from '../carousel2.webp';
import carousel3 from '../carousel3.jpg';

import room1 from '../room1.webp';
import suite1 from '../suite1.avif';
import suite3 from '../suite3.avif';
import lounge1 from '../lounge1.avif';
import lounge2 from '../lounge2.avif';

import dine1 from '../dine1.avif';
import dine2 from '../dine2.avif';
import dine3 from '../dine3.avif';
import dine4 from '../dine4.avif';

import wed1 from '../wed1.webp';
import wed2 from '../wed2.avif';
import wed3 from '../wed3.avif';

import event1 from '../event1.avif';
import event2 from '../event2.webp';
import event3 from '../event3.webp';


function Carousel(){    
    AOS.init();

    return(
        <>
        <div className="carousel1">
            <Link to="/Cities"> <button className="btnskip"> Skip </button> </Link>
            <div className="carouseltext">
                <h1> TASHA </h1> <h2> provides you </h2>
                <div class="dropping-texts">
                    <div className="t1"> CHOICE </div>
                    <div className="t1"> COMFORT </div>
                    <div className="t1"> ELEGANCE </div>
                    <div className="t1"> LUXURY! </div>
                </div>
            </div>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active" data-bs-interval="3000">
                            <img  id="carousel1" src={carousel1} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={carousel2} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={carousel3} className="d-block" alt="..."/>
                        </div>


                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={room1} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={suite1} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={suite3} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={lounge1} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={lounge2} className="d-block" alt="..."/>
                        </div>


                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={dine1} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={dine2} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={dine3} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={dine4} className="d-block" alt="..."/>
                        </div>


                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={wed1} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={wed2} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={wed3} className="d-block" alt="..."/>
                        </div>

                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={event1} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={event2} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img id="carousel1" src={event3} className="d-block" alt="..."/>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Carousel;