import React from 'react'
import './planprice.css'
import ToggleSwitch from './togglebtn'
const Planprice = () => {
    return (
        <div>
            <div className='headplan'>
                <div><h2>Plans & Pricing</h2></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></div>
            </div>
            <div className='headagency'>
            <div><h2>Are you an <span>Agency?</span></h2></div>
            <div className='agencysubtxt'><img  className="rocketimg"src="/assets/Group 24063.svg" alt="" /><p>Then This plan fits you <span>perfectly!</span></p><img  className="shineimg"src="/assets/shines (1).svg" alt="" /></div>
            </div>
            <div className='switchtoggle'><ToggleSwitch/></div>


            <div className="planbtns">
                        <div><button className='btnplan1 active'>SEO</button></div>
                        <div><button className='btnplan2 '>Social and ads  </button></div>
                        <div><button className='btnplan3'>Digital</button></div>
                    </div>
            
        </div>
    )
}

export default Planprice
