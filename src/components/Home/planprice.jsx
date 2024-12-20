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
            <div className='agencysubtxt'><img  className="rocketimg"src="/public/assets/Group 24063.svg" alt="" /><p>Then This plan fits you <span>perfectly!</span></p><img  className="shineimg"src="/public/assets/shines (1).svg" alt="" /></div>
            </div>
            <ToggleSwitch/>
        </div>
    )
}

export default Planprice
