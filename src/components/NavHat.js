import React from "react";
import pclogo from "../assets/pclogo.png";
//TODO: rename nav-hat-wrapper to something like page-wrapper
export const NavHat = ({changePage}) => {


  return(
    <div className="nav-hat-wrapper">
      
      <nav className="mobile-nav" >

        <div className="mobile-nav__btns">

          <div className="mobile-nav__btns-btn" onClick={() => changePage("food")}>FOOD</div>
          <div className="mobile-nav__btns-btn" onClick={() => changePage("drinks")}>DRINKS</div>

        </div>

        <div className="mobile-nav__logo" >

          <a href="http://www.portlandcraft.com">
            <img src={pclogo} />
          </a>

        </div>

      </nav>

    </div>
  )
};