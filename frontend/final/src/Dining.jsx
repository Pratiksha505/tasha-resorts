import React, {useState} from "react";
import { Link } from "react-router-dom";
import AOS,{init} from "aos";
import dine1 from '../dine1.avif';
import dine2 from '../dine2.avif';
import dine3 from '../dine3.avif';
import dine4 from '../dine4.avif';
import menu1 from '../menu1.jpg';
import menu2 from '../menu2.webp';
import nvmenu1 from '../nvmenu1.webp';
import nvmenu2 from '../nvmenu2.webp';

function Dining() {
    AOS.init();


const [isVisible, setIsVisible] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);
const showInfo = (e, setIsVisible) => {
    e.preventDefault();
    setIsVisible(true);
  };

    

    return (
        <>
        <div className="full1">
            <Link to="/Home">
                <button className="homebtn1"> HOME </button>
            </Link> 
        
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"  className="head1">
            <h2 className="ch">Cafeteria</h2>
        </div>   

        <div className="animt glw1 delay-8" id="head2">
            <button className="btns" id="btn1" onClick={(e) => {showInfo(e, setIsVisible);}}> For Hotel Guests </button>
        </div>
        <div className="animt glw1 delay-9" id="head3">
            <button className="btns" id="btn2" onClick={(e) => {showInfo(e, setIsVisible);}}> For Outsiders </button>
        </div>
                {isVisible && (
                    <div className="head4">
                        <button className="btns" id="btn3" onClick={(e) => {showInfo(e, setIsVisible);}}> Veg </button>
                        <button className="btns" id="btn4" onClick={(e) => {showInfo(e, setIsVisible);}}> Non-Veg </button>
                            {isVisible && (
                                <div  className="animt glw1 delay-8" id="head5">
                                    <a className="scroll" href="#menu">
                                    <button className="btns" id="btn5"> Menu </button>
                                    </a>
                                </div>
                            )}
                    </div>
                )}


      <div className="photomain">
        <div className="animt1 glw11 delay-10">
            <img id="p1" src={dine1}/>
        </div>   
        <div className="animt1 glw11 delay-11">
            <img id="p2" src={dine2}/>
        </div> 
        <div className="animt1 glw11 delay-12">
            <img id="p3" src={dine3}/>
        </div> 
        <div className="animt1 glw11 delay-13">
            <img id="p4" src={dine4}/>
        </div> 
      </div> 


      <a name="menu"> </a>

      <div className="menu">
        <img id="m1" src={menu1}/>  
        <img id="m2" src={menu2}/> 
        <img id="m3" src={nvmenu1}/> 
        <img id="m4" src={nvmenu2}/> 
      </div> 
      <Link to="/Signup2">
      <button className="bookbtn"> Book Your Table </button>
      </Link>
    </div>
        </>
    )
}


export default Dining;