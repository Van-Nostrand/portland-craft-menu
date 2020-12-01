import React, { useState, useRef, useEffect} from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import pcservice from "../assets/PCservice.png";

export const NavHat = ({changePage, mobileNavOpen, setMobileNavOpen}) => {

  const [ windowBreakpoint, setWindowBreakpoint] = useState(true);
  const [ loadImage, setLoadImage ] = useState(false);
  const imageTarget = useRef(null);

  const imagetarget = useRef(null);

  // handles window resizing
  useEffect(() => {
    setWindowBreakpoint(window.innerWidth > 900);
    console.log(window.innerWidth);
    const getWindowSize = () => {
      setWindowBreakpoint(window.innerWidth > 900);
    }
    
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    }
  }, []);

  useEffect(() => {
    if(windowBreakpoint){
      import(
        /* webpackPrefetch: true */
        './lazyImage'
      )
      .then(image => image.default("pcTaps.jpg", imagetarget))
      .catch(err => console.error(err));
    }
  });

  let menuSwitchRef = useRef(null);
  let show = useCustomScrollRef(menuSwitchRef, 1000);

  let leftButtons = (<>
    <button onClick={() => changePage("food")}>FOOD</button>      
    <button onClick={() => changePage("drinks")}>DRINKS</button>
  </>);
  let rightButtons = (<>
    <button onClick={() => changePage("specials")}>HAPPY-HOUR</button>
  </>);

  let logo = <div className="logo-container">
               <img src={blkWhiteLogo} />
             </div>;

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

  let taps = <img src={pcTaps} /> 

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
  </>);

  let secondaryNavButtons = (<>
    {logo}
    {leftButtons}
    {rightButtons}
  </>);

  return(
    <div className="nav-hat-wrapper">
      
      <nav className="full-nav" >
        <div className="bknd-img-wrapper">
          <img alt="LOADING...." ref={imagetarget} />
        </div>
        {logo}
        <NavButtonGroup classString="full-nav__button-group" buttons={allbuttons} />
      </nav>

      <nav className={show ? "secondary-nav secondary-nav-open" : "secondary-nav"}>
        <div className="bknd-img-wrapper">
          <img className="taps-img" src={pcservice}  />
        </div>
        <NavButtonGroup classString={"secondary-nav__button-group"} buttons={secondaryNavButtons}/>
      </nav>

      <nav className="mobile-nav" >
        <div className="mobile-nav__logo" >
          <img src={blkWhiteLogo} />
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

