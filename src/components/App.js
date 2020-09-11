import React, { useState } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";
import * as Scroll from "react-scroll";

// import pcMezzanine from "../assets/PCservice.png";

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("food");

  console.log(window.innerWidth);

  return (
    <div className="app-div">
      {/* <div className="background-photo-wrapper">
        <img id="restaurant-photo" src={pcMezzanine} />
      </div> */}
      <NavHat changePage={setCurrentPage} />
      <PageLoader pageTitle={currentPage} />
    </div>
  )
}