import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("landing");

 console.log(currentPage);
  return (
    <div className="app-div">
      <NavHat changePage={setCurrentPage} />
      <PageLoader pageTitle={currentPage} />
    </div>
  )
}