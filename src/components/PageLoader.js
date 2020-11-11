import React from "react";
import {FoodMenu} from "./FoodMenu";
import {DrinksMenu2} from "./DrinksMenu2";
import {FeaturesMenu} from "./FeaturesMenu";
import {
  WHITE_WINE,
  RED_WINE,
  BUBBLES,
  COCKTAILS,
  HAPPY_HOUR,
  SNACKS,
  OMNIVORES,
  HERBIVORES,
  LARGER,
  SWEETS,
  SIDES
} from "./CONSTANTS2";

export const PageLoader = ({ pageTitle}) => {

  let currentPage;
  switch(true){
    case /food/.test(pageTitle): 
      currentPage = <FoodMenu menuData={{SNACKS,OMNIVORES,HERBIVORES,LARGER,SWEETS,SIDES}} />;
      break;
    case /drinks/.test(pageTitle): 
      currentPage = <DrinksMenu2 menuData={{WHITE_WINE, RED_WINE, BUBBLES, COCKTAILS}} />;
      break;
    case /specials/.test(pageTitle): 
      currentPage = <FeaturesMenu menuData={HAPPY_HOUR} />;
      break;
    default: console.log("something went wrong in the menu"); currentPage = <div>ERROR</div>;
  }
      
  let bkndimgstyle = {
    position: "absolute",
    objectFit: "cover",
    width: "100%",
    filter: "brightness(60%)"

  }
  return(
    <div className="pagewrapper">
      
      {currentPage}
    </div>
  )
}
