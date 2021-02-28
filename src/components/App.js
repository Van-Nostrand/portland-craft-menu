import React, { useState } from "react";
import {NavHat} from "./NavHat";
import {PageLoader} from "./PageLoader";
import Footer from "./Footer";

export const App = () => {
  let [currentPage, setCurrentPage] = useState("food");

  return (
    <div className="app-div">
      <NavHat 
        changePage={setCurrentPage} 
        currentPage={currentPage} />

      <PageLoader pageTitle={currentPage} />

      <Footer />
    </div>
  )
}


