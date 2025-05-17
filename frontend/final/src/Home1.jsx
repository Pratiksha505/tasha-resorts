import React from "react";
import { Link } from "react-router-dom";
import p2 from '../p2.jpg';
import tasha from '../tasha.png';
import hotelv from '../hotelv.mp4';
import foto1 from '../foto1.jpg';
import foto2 from '../foto2.jpg';
import foto3 from '../foto3.jpg';
import foto4 from '../foto4.jpg';
import foto5 from '../foto5.jpg';
import foto6 from '../foto6.jpg';
import login from '../login.png';


function Home1(){
    return(
    <>
    <a name="home"></a>
    <div className="bar">
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <img className="foto" src={tasha}/>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <Link to="/Cities" id="t"> 
        <li className="nav-item">Branches</li>
        </Link>
      <Link to="/Dining" id="t">
        <li className="nav-item">Cafeteria</li>
      </Link>
      <Link to="/Carousel" id="t">
        <li className="nav-item">Gallery</li>
      </Link>
      <a href="#contact" className="nav-link" id="tt1">
       <li className="nav-item">Contact Us</li>
      </a>
      <Link to="/Home">
        <button className="btn btn-outline-dark" id = "lbtn" type="submit"> Logout </button>
      </Link>
      </ul>
    </div>
  </div>
</nav>
</div>


<div className="page">
  <img className="chitr" src={p2}/>
    <div className="frame">
    <h2 id="rhead" className="text">TASHA RESORTS</h2>
    </div>
</div>    

<div className="page1">
    <div className="card ">
    <div className="row g-0">
    <div className="col-md-4">
    <h2 className="line">Ohh Look !! You Are At TASHA...</h2>
      <video className='videoTag' autoPlay loop muted>
              <source src={hotelv} type='video/mp4'/>
          </video>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        
        <p className="card-text">you discover the charms of the city through a lens of unparalleled comfort, excellent service and modern sophistication. Celebrating dynamism and vibrance from the moment you step foot into the sunlight flooded lobby, be captivated with the marble floors and exquisite regional art. The quiet luxury aesthetic continues in our rooms, all equipped with the latest technology, premium amenities and beautiful views for a comfortable stay.</p>
        <p className="card-text1">From authentic, regional dishes to global fare and handcrafted cocktails, we promise an indulgent affair. The theme of indulgence is apparent in The Spa, a haven of tranquillity. While the fitness centre and pool keep you on top of your regime, our extensive event venues and meeting rooms can host all your corporate events and dream weddings, making us a favoured destination for leisure and business travellers.</p>
      </div>
    </div>
  </div>
</div>
<div className="highlights">
    <h2 className="high">Highlights</h2>
    <img className="f1" src={foto1}/>
    <img className="f2" src={foto4}/>
    <img className="f3" src={foto5}/>
    <img className="f4" src={foto2}/>
    <img className="f5" src={foto6}/>
    <img className="f6" src={foto3}/>
  </div>

  <div className="facility">
  <h2 className="faci">Facilities</h2>
    <div className="faci1">
      <div className="hot">
        <h2 className="hotel">HOTEL</h2>
        <ul className="list">
          <li>Accessibility for differently-abled</li>
          <li>Currency Exchange</li>
          <li>Doctor on Call</li>
          <li>Evening entertainment</li>
          <li>Jogging Track</li>
          <li>Laundry and Drycleaning</li>
        </ul>
      </div>
    <div className="din"><h2 className="dining">DINING</h2>
      <ul className="list">
        <li>Cafe 17 (All-Day Multicuisine Restaurant)</li>
        <li>Lava Bar</li>
        <li>Black Lotus (Chinese Fine Dining)</li>
        <li>Dera (Indian Speciality Restaurant)</li>
      </ul>
     </div>
    </div>
    <div className="faci2">
    <div className="hot">
        <h2 className="hotel">WELLNESS</h2>
        <ul className="list">
          <li>Outdoor swimming pool</li>
          <li> State-of-the-art fitness centre</li>
        </ul>
      </div>
    <div className="rom"><h2 className="room">ROOMS</h2>
      <ul className="list">
        <li>Butler service</li>
        <li>Interconnecting rooms (subject to availability)</li>
        <li>Mini-Bar</li>
        <li>Smoking and non-smoking rooms (subject to availability)</li>
        <li>24/7 in-room dining</li>
      </ul>
     </div>
    </div>
  </div>
  </div>
 <a name="contact"></a>
  <div className="bottom">
    <div className="bott1">
    <h5> FOR BOOKINGS CONTACT</h5>
    <p>111-222-333-000</p>
    <h5>CUSTOMER SUPPORT</h5>
    <p>contacttasha@tasha.com</p>
    <h5>FEEDBACK</h5>
    <p>website.feedback@tasha.com</p>
    </div>
    <div className="bott2">
      <h5>QUICK LINKS</h5>
      <ul className="quick">
        <a  className="l1" href="#home"><li>About Us</li></a>
        <Link className="l1" to="/Stay"><li>Stay</li></Link>
        <Link className="l1" to="/Dining"><li>Dining</li></Link>
        <Link className="l1"to="/Events"><li>Events</li></Link>
      </ul>
    </div>
    <div className="bott3">
      <h5>CONTACT WITH US ON</h5>
      <div className="icons">
        <img className="icon1" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"/>
        <img className="icon1" src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"/>
        <img className="icon1" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"/>
        <img className="icon1" src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png"/>
        <img className="icon1" src="https://cdn-icons-png.flaticon.com/128/145/145807.png"/>
        
      </div>
    </div>
  </div>



    



    </>
    )
}
export default Home1;