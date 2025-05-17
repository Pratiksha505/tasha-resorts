import React, { useEffect } from "react";
import logo from '../tasha.png';
import backvideo1 from '../backvideo1.mp4';
import {useNavigate} from 'react-router-dom';

function Logo(){
    const navigate= useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/Carousel')
        },6000)
    },[]);
    
    return (
        <>
            <div className="vidlogo">
                <video id="myvideo" autoPlay loop muted>
                    <source src={backvideo1} type='video/mp4'/>
                </video>
            </div>

            <div data-aos="zoom-out"  data-aos-duration="3000" className="logo">
                <img className="logo1" src={logo}/>
            </div>
      
        </>
    )
}
export default Logo;