import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import Menu from "./Menu";

export const PageWrapper = (props) => {
 
  return (
    <div>
      <NavHat />
      <Menu />
    </div>
  )
}