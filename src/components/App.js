import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";
import * as Scroll from "react-scroll";
import {ScrollExample} from "./ScrollExample";
// import pclogo from "../assets/pclogo.png";
import pcMezzanine from "../assets/PCservice.png";

//scrolling info from :
//https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("food");
  let theRef = useRef(null);

 console.log(currentPage);
  return (
    <div className="app-div">
      <div className="background-photo-wrapper">
        <img id="restaurant-photo" src={pcMezzanine} />
      </div>
      <NavHat changePage={setCurrentPage} />
      <PageLoader pageTitle={currentPage} />
    </div>
  )
}