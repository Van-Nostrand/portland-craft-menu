import React from "react";
import {FoodMenu} from "./FoodMenu";
import {DrinksMenu} from "./DrinksMenu";
import {
  FOOD_MENU_DATA,
  DRINKS_MENU_DATA
} from "./CONSTANTS";
import gflogo from "../assets/gf.svg";
import vegetarianlogo from "../assets/vegetarian.svg";
import veganlogo from "../assets/vegan.svg";

export const Menu = ({currentPage}) => {
  
  let currentMenu;
  switch(true){
    case /food/.test(currentPage): currentMenu = <FoodMenu menuData={FOOD_MENU_DATA} logos={{gflogo, vegetarianlogo, veganlogo}} />;
      break;
    case /drinks/.test(currentPage): currentMenu = <DrinksMenu menuData={DRINKS_MENU_DATA} />;
      break;
    default: console.log("something went wrong in the menu"); currentMenu = <div>ERROR</div>;
  }
      
  return(
    <div className="menu-wrapper">
      {currentMenu}
    </div>
  )
}
