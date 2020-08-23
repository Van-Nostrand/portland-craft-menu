import React, { useState, useEffect } from "react";
import {NavHat} from "./NavHat";
import Menu from "./Menu";
import {MenuDrinks} from "./MenuDrinks";

export const PageWrapper = (props) => {
 
  return (
    <div>
      <NavHat />
      <MenuDrinks />
    </div>
  )
}