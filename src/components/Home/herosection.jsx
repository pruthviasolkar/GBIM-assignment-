import React from 'react'
import "./herosection.css"
const Herosection = () => {
  return (
    <div>
      <div className="herosection">
        <div className='herotxt'><button className='herobtn'><img src="/assets/rocket.svg" alt="" />Start Your&nbsp;<span> FREE </span>&nbsp;Trial Now</button></div>
        <div className='contactform'><div className="maincontactform"><div className='formhead'><h3>Contact Us To <span>Grow!</span>
        </h3><img src="/assets/growth-chart.svg" alt="" /></div>
          <div className="formbody">
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Phone Number' />
            <input type="text" placeholder='Email Address' />
            <textarea placeholder="Message" rows="4" cols="50"></textarea>
            <label class="checkbox-button ">
              <input type="checkbox" />
              <span className='checkboxspan'>I agree to all <span className='tc'>terms & conditions</span></span>
            </label>
            <button className='formbtn'>SEND <img src="/assets/arrowright.png" alt="" /></button>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
