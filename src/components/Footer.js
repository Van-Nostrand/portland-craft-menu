import React from "react";
import fbLogo from "../assets/facebook.svg";
import igLogo from "../assets/instalogo.svg";
import emailLogo from "../assets/email.svg";

export default function Footer(){
  return(
    <div className="footer">
      <div className="footer-social">
        <a className="footer-social-link" href="https://www.facebook.com/PortlandCraft">
          <img src={fbLogo} />
        </a>

        <a className="footer-social-link" href="https://www.instagram.com/portland_craft">
          <img src={igLogo} />
        </a>

        <a className="footer-social-link" href="mailto:info@portlandcraft.com">
          <img src={emailLogo} />
        </a>
      </div>
      <div className="footer-author-info">
        Copyright 2020 Daniel Doull
      </div>
    </div>
  )
}