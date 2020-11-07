import React, { useRef} from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
import pclogo from "../assets/portlandlogoplain.svg";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";

export const NavHat = ({changePage, mobileNavOpen, setMobileNavOpen}) => {
  let menuSwitchRef = useRef(null);
  let show = useCustomScrollRef(menuSwitchRef, 1000);

  let leftButtons = (<>
    <button onClick={() => changePage("food")}>FOOD</button>      
    <button onClick={() => changePage("drinks")}>DRINKS</button>
  </>)

  let rightButtons = (<>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
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
        <NavButtonGroup classString={"full-nav__button-group-left"} buttons={leftButtons} />
        <div className="full-nav__group-logo">
          <img src={blkWhiteLogo} />
        </div>
        <NavButtonGroup classString={"full-nav__button-group-right"} buttons={rightButtons} />
      </nav>


      <nav className={show ? "secondary-nav secondary-nav-open" : "secondary-nav"}>
        <NavButtonGroup classString={"secondary-nav__button-group"} buttons={secondaryNavButtons}/>
      </nav>
      

      <nav className="mobile-nav" >
        {/* {menuHamburger} */}
        {/* <MobileNavDrawer open={mobileNavOpen} buttons={mobileMenu} /> */}
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
    <div className={props.classString} onClick={() => console.log("CLICKED!!")}>
      {props.buttons}
    </div>
  )
}