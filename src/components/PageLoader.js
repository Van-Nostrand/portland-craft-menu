import React from "react";
import {FoodMenu} from "./FoodMenu";
import {DrinksMenu} from "./DrinksMenu";
import {FeaturesMenu} from "./FeaturesMenu";
import {BarSnacks} from "./BarSnacks";
import {
  STARTERS,
  BURGERS,
  SNACKS,
  MAINS,
  WHITE_WINE,
  RED_WINE,
  BUBBLES,
  COCKTAILS,
  FRESH_SHEET,
  HAPPY_HOUR
} from "./CONSTANTS";
import gflogo from "../assets/gf.svg";
import vegetarianlogo from "../assets/vegetarian.svg";
import veganlogo from "../assets/vegan.svg";

export const PageLoader = ({ pageTitle}) => {

  let currentPage;
  switch(true){
    case /food/.test(pageTitle): 
      currentPage = <FoodMenu 
                      menuData={{STARTERS, BURGERS, SNACKS, MAINS}} 
                      features={FRESH_SHEET} 
                      logos={{gflogo, vegetarianlogo, veganlogo}} />;
      break;
    case /drinks/.test(pageTitle): 
      currentPage = <DrinksMenu 
                      menuData={{WHITE_WINE, RED_WINE, BUBBLES, COCKTAILS}} />;
      break;
    case /specials/.test(pageTitle): 
      currentPage = <FeaturesMenu menuData={HAPPY_HOUR} />;
      break;
    case /snacks/.test(pageTitle): 
      currentPage = <BarSnacks menuData={SNACKS} logos={{gflogo, vegetarianlogo, veganlogo}} />;
      break;
    default: console.log("something went wrong in the menu"); currentPage = <div>ERROR</div>;
  }
      
  return(
    <>
      {currentPage}
    </>
  )
}
