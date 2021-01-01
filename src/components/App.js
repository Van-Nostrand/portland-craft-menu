import React, { useState } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";
import {ApiTest} from "./ApiTest";

export const App = () => {
  let [ currentPage, setCurrentPage ] = useState("drinks");
  let [ currentDrinkSection, setCurrentDrinkSection ] = useState("wine");
  let [ allRefs, passRefs ] = useState();

  // return (
  //   <div className="app-div">
  //     <NavHat 
  //       changePage={setCurrentPage} 
  //       currentDrinkSection={currentDrinkSection}
  //       allRefs={allRefs}
  //       currentPage={currentPage} />

  //     <PageLoader passRefs={passRefs} pageTitle={currentPage} setCurrentDrinkSection={setCurrentDrinkSection} />
  //   </div>
  // )
  return(
    <div>
      <ApiTest />
    </div>
  )
}


