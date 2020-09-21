import React from "react";
import {FoodMenu2} from "./FoodMenu2";
import {DrinksMenu} from "./DrinksMenu";
import {FeaturesMenu} from "./FeaturesMenu";
import {BarSnacks} from "./BarSnacks";
import {
  WHITE_WINE,
  RED_WINE,
  BUBBLES,
  COCKTAILS,
  HAPPY_HOUR
} from "./CONSTANTS";
import {
  SNACKS,
  OMNIVORES,
  HERBIVORES,
  LARGER,
  SWEETS
} from "./CONSTANTS2";
import gflogo from "../assets/Gluten_Free_symbol.svg";
import vegetarianlogo from "../assets/vegetarian.svg";
import veganlogo from "../assets/Vegan_symbol.svg";
import nutFree from "../assets/Nut_Free_symbol.svg";
import dairyFree from "../assets/Dairy_Free_symbol.svg";

export const PageLoader = ({ pageTitle}) => {

  let currentPage;
  switch(true){
    case /food/.test(pageTitle): 
      currentPage = <FoodMenu2 
                      menuData={{SNACKS,OMNIVORES,HERBIVORES,LARGER,SWEETS}} 
                      logos={{gflogo, vegetarianlogo, veganlogo, nutFree, dairyFree}} />;
      break;
    case /drinks/.test(pageTitle): 
      currentPage = <DrinksMenu 
                      menuData={{WHITE_WINE, RED_WINE, BUBBLES, COCKTAILS}} />;
      break;
    case /specials/.test(pageTitle): 
      currentPage = <FeaturesMenu menuData={HAPPY_HOUR} />;
      break;
    default: console.log("something went wrong in the menu"); currentPage = <div>ERROR</div>;
  }
      
  return(
    <>
      {currentPage}
    </>
  )
}
