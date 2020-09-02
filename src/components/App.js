import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("food");

  console.log(window.screen.width);
 
  return (
    <div>
      <NavHat changePage={setCurrentPage} />
      <PageLoader pageTitle={currentPage} />
    </div>
  )
}