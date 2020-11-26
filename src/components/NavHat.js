import React, { useState, useRef, useEffect, lazy} from "react";
import {useCustomScrollRef} from "../hooks/useCustomScrollRef";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import pcservice from "../assets/PCservice.png";
import pcTaps from "../assets/pcTaps.jpg";

// const IMAGES = require.context("../assets/", true);

export const NavHat = ({changePage, mobileNavOpen, setMobileNavOpen}) => {

  const [ windowBreakpoint, setWindowBreakpoint] = useState(true);
  const [ loadImage, setLoadImage ] = useState(false);

  // handles window resizing
  useEffect(() => {
    const getWindowSize = () => {
      setWindowBreakpoint(window.innerWidth > 900);
    }
    // const checkScroll = () => {
    //   if(!loadImage && (scrollTarget.current.offsetTop < (window.scrollY + window.innerHeight))){
    //     setLoadImage(true);

    //     import(
    //       /* webpackPrefetch: true */
    //       "./lazyImage"
    //     )
    //     .then(lazyImage => lazyImage.default(imageTarget, 'alice.jpg'))
    //     .catch(err => console.error(err));
    //   }
    // }
    window.addEventListener("resize", getWindowSize);
    // window.addEventListener('scroll', checkScroll);
    return () => {
      // window.removeEventListener('scroll', checkScroll);
      window.removeEventListener("resize", getWindowSize);
    }
  }, []);

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
  // if(windowBreakpoint){
  //   pcTaps = <img src={IMAGES('./pcTaps.jpg')} />;
  // }
  // else{
  //   pcTaps = <></>
  // }
  

    // an attempt at lazy loading that didn't go as planned
  // let pcTaps;
  // await (() => {
  //   if(windowBreakpoint){
  //     import(
  //       /* webpackPrefetch: true */
  //       '../assets/pcTaps.jpg'
  //     )
  //     .then(img => {
  //       console.log("then!")
  //       pcTaps = <img data-src={img} />
  //       console.log(pcTaps)
  //     })
  //     .catch(err => console.log(err));
  //   }
  //   else{
  //     pcTaps = <div></div>
  //   }
  // });

  // console.log(pcTaps);

  // console.log(getImageNames());


  return(
    <div className="nav-hat-wrapper">
      
      <nav className="full-nav" >
        <div className="bknd-img-wrapper">
          {/* <img className="bknd-img" src={pcTaps} alt="NOTHING"  /> */}
          <LazyImageTest src="pcTaps" />
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

