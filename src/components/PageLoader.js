import React from "react";
import {FoodMenu} from "./FoodMenu";
import {DrinksMenu} from "./DrinksMenu";
import {LandingPage} from "./LandingPage";
import {
  FOOD_MENU_DATA,
  DRINKS_MENU_DATA
} from "./CONSTANTS";
import gflogo from "../assets/gf.svg";
import vegetarianlogo from "../assets/vegetarian.svg";
import veganlogo from "../assets/vegan.svg";

export const PageLoader = ({pageTitle}) => {

  
  let currentPage;
  switch(true){
    case /food/.test(pageTitle): currentPage = <FoodMenu menuData={FOOD_MENU_DATA} logos={{gflogo, vegetarianlogo, veganlogo}} />;
      break;
    case /drinks/.test(pageTitle): currentPage = <DrinksMenu menuData={DRINKS_MENU_DATA} />;
      break;
    case /landing/.test(pageTitle): currentPage = <LandingPage />;
      break;
    default: console.log("something went wrong in the menu"); currentPage = <div>ERROR</div>;
  }
      
  return(
    <>
      {currentPage}
    </>
  )
}
