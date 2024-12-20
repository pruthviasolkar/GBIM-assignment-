import React from 'react'
import "./dmcaptain.css"
const Dmcaptain = () => {
    return (
        <div>
            <div className='dmhead'><h2>DM Captain!</h2></div>
            <div className='dmblock'>
                <div className="leftdm"><dm className="dmtxtimg"><h3>Real-time Insights</h3><img src="/public/assets/dm1.png" alt="" /></dm>
                    <dm className="dmtxtimg" ><h3>Precise Answers</h3><img src="/public/assets/dm2.png" alt="" /></dm>
                    <dm className="dmtxtimg" ><h3>24/7 Availability</h3><img src="/public/assets/dm3.png" alt="" /></dm>
                </div>
                <div className='phone'><div className='phoneback'><video autoplay muted src="/public/assets/recor.mp4"></video></div></div>
               
                <div className="rightdm"><dm className="dmtxtimg" ><img src="/public/assets/dm4.png" alt="" /><h3>Seamless <br/>Integration</h3></dm>
                    <dm className="dmtxtimg" ><img src="/public/assets/dm5.png" alt="" /><h3>Alerts and <br/> Notifications</h3></dm>
                    <dm className="dmtxtimg" ><img src="/public/assets/dm6.png" alt="" /><h3>Secure</h3></dm>
                </div>

            </div>
        </div>
    )
}

export default Dmcaptain
