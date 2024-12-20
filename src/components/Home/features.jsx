import React from 'react'
import "./features.css"
const Features = () => {
    return (
        <>
            <div className='mainfeatures'>
                <div className='headandbtn'>
                    <div className='headfeatures'>
                        <div><h2>Features</h2></div>
                        <div><p>Here's Few More Reasons To Use DM Cockpit</p></div>
                    </div>
                    <div className="featurebtns">
                        <div><button className='btnfeature1'>SEO</button></div>
                        <div><button className='btnfeature2 active'>Performance Marketing </button></div>
                        <div><button className='btnfeature3'>Reporting</button></div>
                    </div>
                </div>

                <div className="featurelist">
                    <div className='listcard active'><img src="/public/assets/ranking.svg" alt="" /><h4>Rank <br />
                        Tracking</h4></div>
                    <div className='listcard'><img src="/public/assets/audit (2).svg" alt="" /><h4>Website <br />
                        Audit
                    </h4></div>
                    <div className='listcard'><img src="/public/assets/Group 5845.svg" alt="" /><h4>Analytics &<br />
                        Reporting
                    </h4></div>
                    <div className='listcard'><img src="/public/assets/Group 5846.svg" alt="" /><h4>Performance <br />
                        Marketing
                    </h4></div>
                    <div className='listcard'><img src="/public/assets/Glyph.png" alt="" /><h4>Social Media<br />
                        Scheduling <br />
                        And Insight</h4></div>
                    <div className='listcard'><img src="/public/assets/Group 5847.svg" alt="" /><h4>Competitor <br />
                        Analysis</h4></div>
                </div>
                <div className='mainrank'>
                    <img className="dotimg1" src="/public/assets/Group 5855.png" alt="" />
                    <div className='ranktracking'>
                        <div className='rankleft'><h2><span>01.</span> Rank Tracking</h2><p>DM Cockpit Makes It Easy To Stay On Top Of Your <br />
                            Keyword Rankings With 100% Accurate Tracking.<br />
                            It Allows You To Track The Performance Of Your <br />
                            Website's Keywords Over Time And Identify</p><button>Learn More</button></div>
                        <div className='rankright'><img src="/public/assets/Group 24104.svg" alt="" /></div>
                    </div>
                    <img  className="dotimg2"src="/public/assets/Group 5855.png" alt="" />
                </div>

            </div>


        </>
    )
}

export default Features
