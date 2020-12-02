import React from "react";
import {FoodMenu} from "./FoodMenu";
import {DrinksMenu} from "./DrinksMenu";
import {FeaturesMenu} from "./FeaturesMenu";
import {
  WHITE_WINE,
  RED_WINE,
  BUBBLES,
  NEW_COCKTAILS,
  PACKAGED_BEER,
  HAPPY_HOUR,
  HAPPY_HOUR_FOOD,
  FEATURES,
  SNACKS,
  OMNIVORES,
  HERBIVORES,
  LARGER,
  SWEETS,
  SIDES
} from "./CONSTANTS";
import gflogo from "../assets/Gluten_Free_symbol.svg";
import vegetarianlogo from "../assets/Vegetarian_symbol.svg";
import veganlogo from "../assets/Vegan_symbol.svg";
import nutFree from "../assets/Nut_Free_symbol.svg";
import dairyFree from "../assets/Dairy_Free_symbol.svg";

export const PageLoader = ({ pageTitle}) => {

  let currentPage;
  switch(true){
    case /food/.test(pageTitle): 
      currentPage = <FoodMenu
                      menuData={{SNACKS,OMNIVORES,HERBIVORES,LARGER,SWEETS,SIDES,FEATURES}} 
                      logos={{gflogo, vegetarianlogo, veganlogo, nutFree, dairyFree}} />;
      break;
    case /drinks/.test(pageTitle): 
      currentPage = <DrinksMenu 
                      menuData={{WHITE_WINE, RED_WINE, BUBBLES, NEW_COCKTAILS, PACKAGED_BEER}} />;
      break;
    case /specials/.test(pageTitle): 
      currentPage = <FeaturesMenu menuData={[HAPPY_HOUR,HAPPY_HOUR_FOOD]} />;
      break;
    default: console.log("something went wrong in the menu"); currentPage = <div>ERROR</div>;
  }
      
  return(
    <>
      {currentPage}
    </>
  )
}
