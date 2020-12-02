import React, { useRef} from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import pcservice from "../assets/PCservice.png";
import pcTaps from "../assets/pcTaps.jpg";

export const NavHat = ({changePage, mobileNavOpen, setMobileNavOpen}) => {
  let menuSwitchRef = useRef(null);
  let show = useCustomScrollRef(menuSwitchRef, 1000);

  let leftButtons = (
    <>
      <button onClick={() => changePage("food")}>FOOD</button>      
      <button onClick={() => changePage("drinks")}>DRINKS</button>
    </>
  );

  let logo = <div className="logo-container">
               <img src={blkWhiteLogo} />
             </div>;

  console.log(blkWhiteLogo);

  let rightButtons = (
    <>
      <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
    </>
  );

  let allbuttons = (
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

  let secondaryNavButtons = (
    <>
      {logo}
      {leftButtons}
      {rightButtons}
    </>
  );


  return(
    <div className="nav-hat-wrapper">
      
      <nav className="full-nav" >
        <div className="bknd-img-wrapper">
          <img src={pcTaps}  />
        </div>
        {logo}
        <NavButtonGroup classString="full-nav__button-group" buttons={allbuttons} />
      </nav>

      <nav className={show ? "secondary-nav secondary-nav-open" : "secondary-nav"}>
        <div className="bknd-img-wrapper">
          <img src={pcservice}  />
        </div>
        <NavButtonGroup classString={"secondary-nav__button-group"} buttons={secondaryNavButtons}/>
      </nav>

      <nav className="mobile-nav" >
        <div className="mobile-nav__logo" >
          {logo}
        </div>
        <NavButtonGroup classString={"mobile-nav__button-group"} buttons={allbuttons} />
      </nav>

      <div className="secondary-nav-scroll-target" ref={menuSwitchRef} ></div>

    </div>
  )
};


const NavButtonGroup = (props) => {

  return (
    <div className={props.classString}>
      {props.buttons}
    </div>
  )
}