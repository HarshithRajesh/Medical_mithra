import React from 'react'
import "./NavBar.css"
import {logo} from "../../images"

const NavBar = () => {
  return <nav>
    <a href="#" className="logo">
      <img src={logo} height={50} width={50} /><br></br>
      <span className="LogoName">
      Medical<span className="yellow">Mitra</span></span>
    </a>
    <ul>
      <li>
        <a href="#">
          About
        </a>
      </li>
      <li>
        <a href="#">
          Webinar
        </a>
      </li>
      <li>
        <a href="#">
          Contact
        </a>
      </li>
      <li>
        <a href="#">
          SignUp
        </a>
      </li>
    </ul>
  </nav>
}

export default NavBar