import React, { Suspense, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import MobileNav from "./nav/MobileNav";
const LazyFullNav = React.lazy(() => import("./nav/LazyFullNav"));
import blkWhiteLogo from "../assets/portlandlogoWHITE.svg";


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
        className={currentLocation === '/food' ? 'button-current-page' : ''} 
        to='/food'
      >
          Food
      </Link>
      <Link 
        className={currentLocation === '/drinks' ? 'button-current-page' : ''} 
        to='/drinks'
      >
          Drinks
      </Link>
      <Link 
        className={currentLocation === '/happyhour' ? 'button-current-page' : ''} 
        to='/happyhour'
      >
          Happy Hour
      </Link>
      <Link 
        className={currentLocation === '/brunch' ? 'button-current-page' : ''}
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
    <div className="nav-hat-wrapper">
      {navElement}
    </div>
  )
};