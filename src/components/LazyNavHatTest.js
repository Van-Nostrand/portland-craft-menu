import React, { Suspense } from "react";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import LazyMobileNav from "./LazyMobileNav";

const LazyFullNav = React.lazy(() => import("./LazyFullNav"));


export const LazyNavHatTest = ({changePage}) => {
  // let menuSwitchRef = useRef(null);
  
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

  let navElement;
  if(window.innerWidth < 900){
    navElement = <LazyMobileNav buttons={buttons} logo={blkWhiteLogo} />
    console.log("mobile page!");
  }
  else{
    console.log("fullpage!");
    navElement = <Suspense fallback={<div>Loading...</div>}><LazyFullNav buttons={buttons} logo={blkWhiteLogo} /></Suspense>;
  }

  return(
    <div className="nav-hat-wrapper">
      
      {navElement}

      {/* <div className="secondary-nav-scroll-target" ref={menuSwitchRef} ></div> */}

    </div>
  )
};