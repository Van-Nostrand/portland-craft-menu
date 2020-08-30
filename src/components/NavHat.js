import React from "react";
import pclogo from "../assets/pclogo.png";
import pcMezzanine from "../assets/PCservice.png";
//TODO: rename nav-hat-wrapper to something like page-wrapper
export const NavHat = ({changePage}) => {


  return(
    <div className="nav-hat-wrapper">

      {/* <div className="background-photo-wrapper">
        <img id="restaurant-photo" src={pcMezzanine} />
      </div> */}
    
      {/* <nav className="full-nav" >

        <div className="full-nav__group-left">
          <a href="#">
            HOME
          </a>
          <a href="#">
            MENU
          </a>
          
          <a href="#">RESTAURANT</a>
        </div>

        <span className="full-nav__group-logo">
          <img src={pclogo} />
        </span>

        <div className="full-nav__group-right">
          <a href="#">CONTACT</a>
          <a href="#">EVENTS</a>
        </div>

      </nav> */}
      
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