import React, { useState, useRef, useEffect } from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import pcservice from "../assets/PCservice.png";
// import pcTaps from "../assets/pcTaps.jpg";
import MyImage from "./MyImage";


export const NavHat = ({changePage, mobileNavOpen, setMobileNavOpen}) => {
  let menuSwitchRef = useRef(null);
  let show = useCustomScrollRef(menuSwitchRef, 1000);

  const [ windowBreakpoint, setWindowBreakpoint] = useState(true);
  const [ loadImage, setLoadImage ] = useState(false);
  const imageTarget = useRef(null);

  // handles window resizing
  useEffect(() => {
    setWindowBreakpoint(window.innerWidth > 900);
    // console.log(window.innerWidth);

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
        './MyImage'
      )
      .then(image => image.default({src: "pcTaps.jpg", alt: "LOADING...", caption: "image test"}, imageTarget))
      .catch(err => console.error(err));
      setLoadImage(true);

    }
  });

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
  let imageElement;
  if(loadImage){
    imageElement = <MyImage image={{src: "pcTaps.jpg", alt: "LOADING...", caption: "image test"}} />
  }

  return(
    <div className="nav-hat-wrapper">
      
      <nav className="full-nav" >
        <div className="bknd-img-wrapper">
          {/* <img alt="LOADING..." ref={imageTarget}  /> */}
          {imageElement}
        </div>
        <div className="logo full-nav__logo">
          <img src={blkWhiteLogo} />
        </div>
        <div className="button-group full-nav__button-group">
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