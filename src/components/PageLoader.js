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
  FEATURES,
  SNACKS,
  OMNIVORES,
  HERBIVORES,
  LARGER,
  SWEETS,
  SIDES,
  PACKAGED_BEER
} from "./CONSTANTS";

export const PageLoader = ({ pageTitle}) => {

  let currentPage;
  switch(true){
    case /food/.test(pageTitle): 
      currentPage = <FoodMenu menuData={{SNACKS,OMNIVORES,HERBIVORES,LARGER,SWEETS,SIDES,FEATURES}} />;
      break;
    case /drinks/.test(pageTitle): 
      currentPage = <DrinksMenu menuData={{WHITE_WINE, RED_WINE, BUBBLES, HOUSE_COCKTAILS, PACKAGED_BEER}} />;
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
