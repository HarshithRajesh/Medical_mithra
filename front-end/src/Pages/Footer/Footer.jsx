import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import { logo, Insta, Youtube, Linkdin, Facebook } from "../../images"

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
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <img src={Facebook} width={30} />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={Linkdin} width={30} />
            </a>
            <a href="https://www.instagram.com/">
              <img src={Insta} width={30} />
            </a>
            <a href="https://www.youtube.com/">
              <img src={Youtube} width={30} />
            </a>
          </div>
          <div className="copyright">This website is designed by TeamNeo©2024</div>
          </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="links">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Contact@email</a></li>
            <li><a href="#">+19999999999</a></li>
          </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer