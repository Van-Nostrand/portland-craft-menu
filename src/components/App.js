import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";
import * as Scroll from "react-scroll";

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("food");

 console.log(currentPage);
  return (
    <div className="app-div">
      <NavHat changePage={setCurrentPage} />
      <PageLoader pageTitle={currentPage} />
    </div>
  )
}