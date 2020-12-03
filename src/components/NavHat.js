import React, { useRef} from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import pcservice from "../assets/PCservice.png";
import pcTaps from "../assets/pcTaps.jpg";

export const NavHat = ({changePage, mobileNavOpen, setMobileNavOpen}) => {
  let menuSwitchRef = useRef(null);
  let show = useCustomScrollRef(menuSwitchRef, 1000);

  let buttons = (
    <>
      <button onClick={() => changePage("food")}>
        FOOD
      </button>      
      <button onClick={() => changePage("drinks")}>
        DRINKS
      </button>
      <button onClick={() => changePage("specials")}>
        HAPPY-HOUR
      </button>
    </>
  );

  return(
    <div className="nav-hat-wrapper">
      
      <nav className="full-nav" >
        <div className="bknd-img-wrapper">
          <img src={pcTaps}  />
        </div>
        <div className="logo full-nav__logo">
          <img src={blkWhiteLogo} />
        </div>
        <div className="button-group full-nav__button-group">
          {buttons}
        </div>
      </nav>

      <nav className={show ? "secondary-nav secondary-nav-open" : "secondary-nav"}>
        <div className="bknd-img-wrapper">
          <img src={pcservice}  />
        </div>
        <div className="logo secondary-nav__logo">
          <img src={blkWhiteLogo} />
        </div>
        <div className="button-group secondary-nav__button-group">
          {buttons}
        </div>
      </nav>

      <nav className="mobile-nav" >
        <div className="logo mobile-nav__logo">
          <img src={blkWhiteLogo} />
        </div>
        <div className="button-group mobile-nav__button-group">
          {buttons}
        </div>
      </nav>

      <div className="secondary-nav-scroll-target" ref={menuSwitchRef} ></div>

    </div>
  )
};