import React, { Suspense, useState, useEffect } from "react";
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";
import MobileNav from "./MobileNav";
const LazyFullNav = React.lazy(() => import("./LazyFullNav"));


export const NavHat = ({changePage}) => {

  const [ fullNav, setFullNav ] = useState(false);

  const testWindowSize = () => {

    if(window.innerWidth > 1200){
      setFullNav(true);
    }
    else{
      setFullNav(false);
    }
  }

  useEffect(() => {
    testWindowSize();
    window.addEventListener("resize", testWindowSize);
    return () => {
      window.removeEventListener("resize", testWindowSize);
    }
  },[]);


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
  if(!fullNav){
    navElement = <MobileNav buttons={buttons} logo={blkWhiteLogo} />
  }
  else{
    navElement =  <Suspense fallback={<div>Loading...</div>}>
                    <LazyFullNav buttons={buttons} logo={blkWhiteLogo} />
                  </Suspense>;
  }

  return(
    <div className="nav-hat-wrapper">
      
      {navElement}

    </div>
  )
};