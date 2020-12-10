import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("drinks");
  let [mobileNavOpen, setMobileNavOpen] = useState(false); // used for "menu burger", which is not currently being used.. 

  useEffect(() => {
    setMobileNavOpen(false);
  }, [currentPage]);

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



// if (somethingHappen) import(
//   /* webpackPrefetch: true */
//   './images'
// );


