import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import {Menu} from "./Menu";

export const PageWrapper = (props) => {
  let [currentPage, setCurrentPage] = useState("food");
 
  return (
    <div>
      <NavHat changePage={setCurrentPage} />
      <Menu currentPage={currentPage} />
    </div>
  )
}