import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("food");
  let [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [currentPage]);

  
  // console.log(window.innerWidth);

  return (
    <div className="app-div">
      <NavHat 
        changePage={setCurrentPage} 
        currentPage={currentPage} 
        mobileNavOpen={mobileNavOpen} 
        setMobileNavOpen={setMobileNavOpen} />

      <PageLoader pageTitle={currentPage} />
    </div>
  )
}