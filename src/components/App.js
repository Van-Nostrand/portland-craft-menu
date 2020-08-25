import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import {Menu} from "./Menu";

export const App = (props) => {
  let [currentPage, setCurrentPage] = useState("drinks");

 
  return (
    <div>
      <NavHat changePage={setCurrentPage} />
      <Menu currentPage={currentPage} />
    </div>
  )
}