import React from "react";
import "../../App.css";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="Footer">
        <div className="social-links">
          <a className="social-links"  href="https://github.com/Joacoalnabulsi"><img src={Github}   alt="" /></a>
          <a className="social-links"  href="https://www.instagram.com/joacoalnabulsi/"><img src={Instagram}   alt="" /></a>
          <a className="social-links"  href="https://www.linkedin.com/in/joaquin-al-nabulsi-a25400225/"><img src={LinkedIn}   alt="" /></a>
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
