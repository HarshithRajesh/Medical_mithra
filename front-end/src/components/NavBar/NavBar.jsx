import React from 'react'
import "./NavBar.css"
import {logo} from "../../images"
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return <nav>
    <Link to="/" className="logo">
      <img src={logo} height={50} width={50} /><br></br>
      <span className="LogoName">
      Medical<span className="yellow">Mitra</span></span>
      </Link>
    <ul><li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/Webinar">Webinar</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li><NavLink to="/SignUp">SignUp</NavLink></li>
    </ul>
  </nav>
}

export default NavBar