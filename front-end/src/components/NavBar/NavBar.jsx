import React from 'react'
import "./NavBar.css"
import {logo} from "../../images"
import { Link } from "react-router-dom";
import { NavLink,ScrollRestoration  } from 'react-router-dom';

const NavBar = () => {
  return <nav>
    <Link to="/" className="logo">
      <img src={logo} height={50} width={50} /><br></br>
      <span className="LogoName">
      Medical<span className="yellow">Mitra</span></span>
      </Link>
    <ul><li><NavLink to="/About" preventScrollReset={true}>About</NavLink></li>
      <li><NavLink to="/Webinar"preventScrollReset={true}>Webinar</NavLink></li>
      <li><NavLink to="/Contact"preventScrollReset={true}>Contact</NavLink></li>
      <li><NavLink to="/SignUp"preventScrollReset={true}>SignUp</NavLink></li>
    </ul>
  </nav>
}

export default NavBar