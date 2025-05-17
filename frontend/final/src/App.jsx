import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Logo from './Logo'
import Carousel from './Carousel';
import Cities from './Cities';
import Purpose1 from './Purpose1';
import Purpose2 from './Purpose2';
import Purpose3 from './Purpose3';
import Purpose4 from './Purpose4';
import Stay from './Stay';
import Dining from './Dining';
import Wedding from './Wedding';
import Events from './Events';
import Home from './Home';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
import Signup4 from './Signup4';
import Login1 from './Login1';
import Login2 from './Login2';
import Login3 from './Login3';
import Login4 from './Login4';
import Home1 from './Home1';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Admin from './Admin';
import AdminDetails from './AdminDetails';
import LoginDetails from './LoginDetails';
import RoomDetails from './RoomDetails';
import DiningDetails from './DiningDetails';
import WedDetails from './WedDetails';
import EventDetails from './EventDetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  
  return (

    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Logo/>}/>
        <Route exact path="/Carousel" element={<Carousel/>}/>
        <Route exact path="/Cities" element={<Cities/>}/>
        <Route exact path="/Purpose1" element={<Purpose1/>}/>
        <Route exact path="/Purpose2" element={<Purpose2/>}/>
        <Route exact path="/Purpose3" element={<Purpose3/>}/>
        <Route exact path="/Purpose4" element={<Purpose4/>}/>
        <Route exact path="/Stay" element={<Stay/>}/>
        <Route exact path="/Dining" element={<Dining/>}/>
        <Route exact path="/Wedding" element={<Wedding/>}/>
        <Route exact path="/Events" element={<Events/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Signup1" element={<Signup1/>}/>
        <Route exact path="/Signup2" element={<Signup2/>}/>
        <Route exact path="/Signup3" element={<Signup3/>}/>
        <Route exact path="/Signup4" element={<Signup4/>}/>
        <Route exact path="/Login1" element={<Login1/>}/>
        <Route exact path="/Login2" element={<Login2/>}/>
        <Route exact path="/Login3" element={<Login3/>}/>
        <Route exact path="/Login4" element={<Login4/>}/>
        <Route exact path="/Home1" element={<Home1/>}/>
        <Route exact path="/Form1" element={<Form1/>}/>
        <Route exact path="/Form2" element={<Form2/>}/>
        <Route exact path="/Form3" element={<Form3/>}/>
        <Route exact path="/Form4" element={<Form4/>}/>
        <Route exact path="/Admin" element={<Admin/>}/>
        <Route exact path="/AdminDetails" element={<AdminDetails/>}/>
        <Route exact path="/LoginDetails" element={<LoginDetails/>}/>
        <Route exact path="/RoomDetails" element={<RoomDetails/>}/>
        <Route exact path="/DiningDetails" element={<DiningDetails/>}/>
        <Route exact path="/WedDetails" element={<WedDetails/>}/>
        <Route exact path="/EventDetails" element={<EventDetails/>}/>

    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
