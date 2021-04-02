import React from "react";
import fbLogo from "../assets/facebook.svg";
import igLogo from "../assets/instalogo.svg";
import emailLogo from "../assets/email.svg";

export default function Footer(){
  return(
    <div className="footer">
      <a href="https://www.google.ca/maps/place/Portland+Craft/@49.2518306,-123.0917292,14z/data=!4m5!3m4!1s0x0:0xd53e2e63677ed9d6!8m2!3d49.2506846!4d-123.1012487" className='footer-address'>
        Portland Craft, 3835 Main St, BC, V5V 3P1
      </a>
      <div className="footer-phonenumber">
        (604) 569-2494
      </div>
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
      <a href="https://github.com/Van-Nostrand" className="footer-author-info">
        Copyright © 2020 Daniel Doull
      </a>
    </div>
  )
}

/**
 * address
 * phone number
 * contact
 * 
 * The squarespace site has insta/facebook separate from email
 * has an email signup form
 */