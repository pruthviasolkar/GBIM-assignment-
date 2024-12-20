import React from 'react';
import "./navbar.css";
import {Link}from "react-router-dom"

 
const Navbar = () => {
    return (
        <div className='Mainheader'>
            <div className='topbar'>
                <img src="/assets/rocket.svg" alt="" />
                <p>Sign up today to accelerate your business!</p>
                <button className='topbarbtn'>Join Us</button>
                <img src="/assets/rocket.svg" alt="" />
            </div>


            <div className='mainnavbar'>
                <div className='Logo'><img src="/assets/logo1.png" alt="" /></div>
                <ul className='linksul'><li><Link to="">Home</Link></li>
                    <li><Link to="">Features</Link></li>
                    <li><Link to="">Pricing </Link></li>
                    <li><Link to="">Resources</Link></li>
                    <li><Link to="">AI Chatbot</Link></li></ul>

                    <div className='allrightbtns'>
                       <button className='headcontact'>Contact Us</button><button className='signinbtn'>Sign up</button><button className='loginbtn'>Log in
                       </button>
                    </div>
            </div>

        </div>
    )
}

export default Navbar
