import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import Menu from "./Menu";
import {useScroll} from "./useScroll";

export const PageWrapper = (props) => {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    let topOffset = -document.body.getBoundingClientRect().top
    console.log(topOffset);
    setScrollTop(topOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
 
  return (
    <div>
      <NavHat changeInterface={scrollTop > 205}/>
      <Menu />
    </div>
  )
}