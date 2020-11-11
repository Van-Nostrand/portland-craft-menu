import React, { useRef} from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
// import pclogo from "../assets/portlandlogoplain.svg";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import pcservice from "../assets/PCservice.png";
import pcTaps from "../assets/pcTaps.jpg";

export const NavHat = ({changePage, mobileNavOpen, setMobileNavOpen}) => {
  let menuSwitchRef = useRef(null);
  let show = useCustomScrollRef(menuSwitchRef, 1000);

  let leftButtons = (<>
    <button onClick={() => changePage("food")}>FOOD</button>      
    <button onClick={() => changePage("drinks")}>DRINKS</button>
  </>)

  let logo = <div className="logo-container">
               <img src={blkWhiteLogo} />
             </div>;

  let rightButtons = (<>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
  </>)

  let allbuttons = (<>
    <button onClick={() => changePage("food")}>
      FOOD
    </button>      
    <button onClick={() => changePage("drinks")}>
      DRINKS
    </button>
    <button onClick={() => changePage("specials")}>
      HAPPY-HOUR
    </button>
  </>)

  let mobileButtons = (<>
    <button onClick={() => changePage("food")}>FOOD</button> 
    <button onClick={() => changePage("drinks")}>DRINKS</button>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
  </>)

  let mobileMenu = (<>
    <button onClick={() => changePage("food")}>FOOD</button> 
    <button onClick={() => changePage("drinks")}>DRINKS</button>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
  </>)

  let secondaryNavButtons = (<>
    {logo}
    {leftButtons}
    {rightButtons}
  </>);

  let menuHamburger = (
    <div className="menu-burger" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
      <svg viewBox="0 0 100 100" width="50" height="30">
        <rect width="120" height="15" rx="10"></rect>
        <rect y="30" width="120" height="15" rx="10"></rect>
        <rect y="60" width="120" height="15" rx="10"></rect>
      </svg>
    </div>
  )

 

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
        <NavButtonGroup classString={"mobile-nav__button-group"} buttons={mobileButtons} />
        <div className="mobile-nav__logo" >
          <img src={blkWhiteLogo} />
        </div>
      </nav>

      <div className="secondary-nav-scroll-target" ref={menuSwitchRef} ></div>

    </div>
  )
};

const MobileNavDrawer = (props) => {

  let classString = props.open ? "mobile-nav-drawer opendrawer" : "mobile-nav-drawer";
 
  return(
    <div className={classString}>
      {props.buttons}
    </div>
  )
}

const NavButtonGroup = (props) => {

  return (
    <div className={props.classString}>
      {props.buttons}
    </div>
  )
}