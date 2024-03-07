import React from 'react'
import "./Header.css"
import NavBar from '../../components/NavBar/NavBar'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <NavBar />
        <div className="cta">
        <p className="Quote">
          Leading the way in shaping tomorrow's doctors and engineers.
          </p>
         <h1>
          We equip you with the resources and skills needed to thrive.
          </h1>
         <Link to="Contact" className="Contact-btn">
          Contact Us
         </Link>
         </div>
      </div>
    </header>
  )
}

export default Header