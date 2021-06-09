import React, { Suspense, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import MobileNav from "./MobileNav";
const LazyFullNav = React.lazy(() => import("./LazyFullNav"));
import blkWhiteLogo from "../../assets/portlandlogoWHITE.svg";


export default function NavHat({ changePage, currentPage }) {

  const [ fullNav, setFullNav ] = useState(false);
  let currentLocation = useLocation();

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


  let navButtons = (
    <>
      <Link 
        className={currentLocation === '/food' ? 'nav-button button-current-page' : 'nav-button'} 
        to='/food'
      >
          Food
      </Link>
      <Link 
        className={currentLocation === '/drinks' ? 'nav-button button-current-page' : 'nav-button'} 
        to='/drinks'
      >
          Drinks
      </Link>
      <Link 
        className={currentLocation === '/happyhour' ? 'nav-button button-current-page' : 'nav-button'} 
        to='/happyhour'
      >
          Happy Hour
      </Link>
      <Link 
        className={currentLocation === '/brunch' ? 'nav-button button-current-page' : 'nav-button'}
        to='/brunch'
      >
        Brunch
      </Link>
    </>
  )

 
  let navElement;
  if (!fullNav){
    navElement = 
      <MobileNav logo={blkWhiteLogo}>
        {navButtons}
      </MobileNav>
  }
  else {
    navElement = 
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFullNav logo={blkWhiteLogo}>
          {navButtons}
        </LazyFullNav>
      </Suspense>;
  }

  return(
    <div className="nav-hat">
      {navElement}
    </div>
  )
};