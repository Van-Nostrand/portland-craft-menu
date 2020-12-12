import React, { useState } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";

export const App = () => {
  let [currentPage, setCurrentPage] = useState("specials");

  return (
    <div className="app-div">
      <NavHat 
        changePage={setCurrentPage} 
        currentPage={currentPage} />

      <PageLoader pageTitle={currentPage} />
    </div>
  )
}


