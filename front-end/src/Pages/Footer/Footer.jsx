import React from 'react'
import "./Footer.css" 
import { Link } from "react-router-dom";
import {logo} from "../../images"

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
          <Link to="/" className="logo">
      <img src={logo} height={50} width={50} /><br></br>
      <span className="LogoName">
      Medical<span className="yellow">Mitra</span></span>
      </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer