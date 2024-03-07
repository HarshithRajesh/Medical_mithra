import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import AboutDetail from "../components/AboutDetail/AboutDetail"
import { WhatsappLogo } from '../images'
const About = () => {
  return (
    <>
    <div className="wrapper">
        <NavBar />
        <br/><br/><br/><br/>
        <AboutDetail/>
        </div>
        <div class="fixed-bottom right-100 p-3" style={{zindex:"6",left:"initial"}}>
    <a href="https://wa.me/918861619973?text=Hello, I have a question about Medical Mitra" target="_blank">
      <img src={WhatsappLogo} width="60" />
    </a>
  </div>
    </>
  )
}

export default About