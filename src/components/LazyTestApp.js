import React, { useState } from "react";
import { LazyNavHatTest } from "./LazyNavHatTest";
import { PageLoader } from "./PageLoader";

export const LazyTestApp = (props) => {
  let [currentPage, setCurrentPage] = useState("drinks"); 

  return (
    <div className="app-div">
      <LazyNavHatTest 
        changePage={setCurrentPage} 
        currentPage={currentPage} />

      <PageLoader pageTitle={currentPage} />
    </div>
  )
}
