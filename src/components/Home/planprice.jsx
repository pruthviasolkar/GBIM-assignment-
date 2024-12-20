import React from 'react'
import './planprice.css'
import ToggleSwitch from './togglebtn'
import AnnualToggleSwitch from './annualtoggle'
const Planprice = () => {
    return (
        <div>
            <div className='headplan'>
                <div><h2>Plans & Pricing</h2></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p></div>
            </div>
            <div className='headagency'>
                <div><h2>Are you an <span>Agency?</span></h2></div>
                <div className='agencysubtxt'><img className="rocketimg" src="/assets/Group 24063.svg" alt="" /><p>Then This plan fits you <span>perfectly!</span></p><img className="shineimg" src="/assets/shines (1).svg" alt="" /></div>
            </div>
            <div className='switchtoggle'><ToggleSwitch /></div>


            <div className="planbtns">
                <div><button className='btnplan1 active'>SEO</button></div>
                <div><button className='btnplan2 '>Social and ads  </button></div>
                <div><button className='btnplan3'>Digital</button></div>
            </div>
<div className='mainannual'><div className='annual'><AnnualToggleSwitch/><h4>Pay Anually and <span>save upto 20%</span></h4><img className='annualshine' src="/assets/shines (1).svg" alt="" /></div>
<img className='annualarc' src="/assets/purplegreenarc.svg" alt="" /></div>
          

            <div className='planlist'>
                <div className="planlistcard"><div className='headplancard'><h3>Free Digital</h3><p>For Professional Use</p></div>
                    <div className='descplancard'>
                        <ul>
                            <li><img src="/assets/check.svg" alt="" /><p>For Small Agencies</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Agency Dashboard
                            </p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Manage up to 50 Projects</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Track 5,000 Keywords</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>5 Team Members</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Competitor Analysis, On <br />
                                Page / Website Audit, Backlink <br />
                                Checker and Monitor, <br />
                                Analytics & Reporting with <br />
                                more features.</p></li>
                        </ul>
                    </div>
                    <div className='btnplancard'><button>choose plan</button></div>
                </div>
                <div className="planlistcard active"><div className='headplancard1 '><h3>Premium Economy</h3><p>For Professional Use</p></div>
                    <div className='descplancard'>
                        <ul>
                            <li><img className='descimg'  src="/assets/check.svg" alt="" /><p>For Small Agencies</p></li>
                            <li><img className='descimg' src="/assets/check.svg" alt="" /><p>Agency Dashboard
                            </p></li>
                            <li><img className='descimg' src="/assets/check.svg" alt="" /><p>Manage up to 50 Projects</p></li>
                            <li><img className='descimg' src="/assets/check.svg" alt="" /><p>Track 5,000 Keywords</p></li>
                            <li><img className='descimg' src="/assets/check.svg" alt="" /><p>5 Team Members</p></li>
                            <li><img className='descimg' src="/assets/check.svg" alt="" /><p>Competitor Analysis, On <br />
                                Page / Website Audit, Backlink <br />
                                Checker and Monitor, <br />
                                Analytics & Reporting with <br />
                                more features.</p></li>
                        </ul>
                    </div>
                    <div className='btnplancard1'><button>choose plan</button></div>
                </div>
                <div className="planlistcard thirdcard"> <div className="imgpopular"><img className='mostpopular' src="/assets/Mostpopular.svg" alt="" /></div><div className='headplancard'><h3>Premium Business</h3><p>For Professional Use</p></div>
                    <div className='descplancard'>
                        <ul>
                            <li><img src="/assets/check.svg" alt="" /><p>For Small Agencies</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Agency Dashboard
                            </p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Manage up to 50 Projects</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Track 5,000 Keywords</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>5 Team Members</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Competitor Analysis, On <br />
                                Page / Website Audit, Backlink <br />
                                Checker and Monitor, <br />
                                Analytics & Reporting with <br />
                                more features.</p></li>
                        </ul>
                    </div>
                    <div className='btnplancard'><button>choose plan</button></div>
                </div>
                <div className="planlistcard"><div className='headplancard'><h3>Premium First</h3><p>For Professional Use</p></div>
                    <div className='descplancard'>
                        <ul>
                            <li><img src="/assets/check.svg" alt="" /><p>For Small Agencies</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Agency Dashboard
                            </p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Manage up to 50 Projects</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Track 5,000 Keywords</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>5 Team Members</p></li>
                            <li><img src="/assets/check.svg" alt="" /><p>Competitor Analysis, On <br />
                                Page / Website Audit, Backlink <br />
                                Checker and Monitor, <br />
                                Analytics & Reporting with <br />
                                more features.</p></li>
                        </ul>
                    </div>
                    <div className='btnplancard'><button>choose plan</button></div>
                </div>
            </div>

        </div>
    )
}

export default Planprice
