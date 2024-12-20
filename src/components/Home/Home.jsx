import React from 'react'
import "./home.css"
import Herosection from './herosection'
import Features from './features'
import Dmcaptain from './dmcaptaiin'
import Planprice from './planprice'
const Home = () => {
  return (
    <div>
      <Herosection/>
      <Features/>
      <Dmcaptain/>
      <Planprice/>
    </div>
  )
}

export default Home
