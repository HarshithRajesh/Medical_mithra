import React from 'react'
import "./NavBar.css"
import logo from "../../images/Logo.png"

const NavBar = () => {
  return <nav>
    <a href="#" className="logo">
      <img src={logo} height={50} width={50} />
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