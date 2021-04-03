import React from "react";
import {FoodMenu} from "./FoodMenu";
import {DrinksMenu} from "./DrinksMenu";
import {HappyHour} from "./HappyHour";
import {
  WHITE_WINE,
  RED_WINE,
  BUBBLES,
  HOUSE_COCKTAILS,
  HAPPY_HOUR,
  HAPPY_HOUR_FOOD,
  SNACKS,
  SMALL_PLATES,
  PIZZA,
  BURGERS,
  LARGE_PLATES,
  SWEETS,
  SIDES,
  PACKAGED_BEER,
  NON_ALCOHOLIC
} from "./CONSTANTS";

export const PageLoader = ({ pageTitle}) => {

  let currentPage;
  switch(true){
    case /food/.test(pageTitle): 
      currentPage = <FoodMenu menuData={{SNACKS,SMALL_PLATES,LARGE_PLATES,PIZZA,BURGERS,SWEETS,SIDES}} />;
      break;
    case /drinks/.test(pageTitle): 
      currentPage = <DrinksMenu menuData={{WHITE_WINE, RED_WINE, BUBBLES, HOUSE_COCKTAILS, PACKAGED_BEER, NON_ALCOHOLIC}} />;
      break;
    case /specials/.test(pageTitle): 
      currentPage = <HappyHour menuData={[HAPPY_HOUR, HAPPY_HOUR_FOOD]} />;
      break;
    default: console.log("something went wrong in the menu"); currentPage = <div>ERROR</div>;
  }
  
  return(
    <>
      {currentPage}
    </>
  )
}
