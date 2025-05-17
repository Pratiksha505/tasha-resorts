import React from "react";
import { Link } from "react-router-dom";
import AOS,{init} from "aos";
import event1 from '../event1.avif';
import event2 from '../event2.webp';
import event3 from '../event3.webp';

function Events() {
    AOS.init();

    return (
        <>
      <div className="full3">
                          <Link to="/Home">
                              <button className="homebtn1"> HOME </button>
                          </Link> 
                          
                          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="card1">
                              <h3 className="head"> CHOOSE YOUR EVENT  </h3>
                          </div>
              
                          <div className="all">
                              <div className="animte glw delay-5" id="first1">
                                  <a className="scroll" href="#room"> <h3> MEETINGS </h3> </a>
                              </div>
                              <div className="animte glw delay-6" id="second">
                                  <a className="scroll" href="#suite"> <h3> PARTIES </h3> </a>
                              </div>
                              <div className="animte glw delay-7" id="third">
                                  <a className="scroll" href="#lounge"> <h3> SHOWS </h3> </a>
                              </div>
                          </div>
              
                          <a name="room"> </a>
              
                          <div className="rooms">
              
                              <div className="sr" data-aos="fade-right" data-aos-duration="3000">
                                  <h1 className="roomhead1" data-aos="fade-down" data-aos-duration="3000">  MEETINGS</h1>
              
                                  <div className="event">
              
                                  <img id="pic3" src={event1} className="d-block" alt="..."/>
              
                                      <div className="about1">
              
                                        <Link to="/Signup4">
                                        <button className="btn btn-success" id="btns"> Book Your Day </button>
                                        </Link>
                                      </div>
              
                                  </div>
                              </div>
              
                              <a name="suite"> </a>
              
                              <div className="st" data-aos="fade-right" data-aos-duration="3000">
                                  <h1 className="roomhead2" data-aos="fade-down" data-aos-duration="3000"> PARTIES  </h1>
              
                                  <div className="event">
              
                                  <img id="pic3" src={event3} className="d-block" alt="..."/>
              
                                      <div className="about2">
                                      <Link to="/Signup4">
                                        <button className="btn btn-success" id="btns"> Book Your Day </button>
                                        </Link>
                                      </div>
              
                                  </div>
                              </div>
              
                              <a name="lounge"> </a>
              
                              <div className="vl" data-aos="fade-right" data-aos-duration="3000">
                                  <h1 className="roomhead3" data-aos="fade-down" data-aos-duration="3000"> SHOWS</h1>
              
                                  <div className="event">
              
                                  <img id="pic3" src={event2} className="d-block" alt="..."/>
              
                                  <div className="about3">
              
                                      <Link to="/Signup4">
                                        <button className="btn btn-success" id="btns"> Book Your Day </button>
                                        </Link>
                                </div>
              
                                  </div>
                              </div>
              
                          </div>
                      </div>
        </>
    )
}

export default Events;