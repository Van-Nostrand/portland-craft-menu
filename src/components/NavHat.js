import React from "react";
import pclogo from "../assets/pclogo.png";

export const NavHat = ({changeInterface}) => {

  let mobileNavClass = "mobile-nav";

  return(
    <div className="nav-hat-wrapper">
      

      <nav className={mobileNavClass} >

        <div className="mobile-nav__btns">
          <a href="http://www.portlandcraft.com">HOMEPAGE</a>
        </div>

        <div className="mobile-nav__logo" >
          <img src={pclogo} />
        </div>

      </nav>

    </div>
  )
};