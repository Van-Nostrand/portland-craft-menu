import React from "react";
import {FoodMenu} from "./FoodMenu";
import {DrinksMenu} from "./DrinksMenu";
import {FeaturesMenu} from "./FeaturesMenu";
import {BarSnacks} from "./BarSnacks";
import {
  FOOD_MENU_DATA,
  DRINKS_MENU_DATA,
  FEATURES_MENU_DATA
} from "./CONSTANTS";
import gflogo from "../assets/gf.svg";
import vegetarianlogo from "../assets/vegetarian.svg";
import veganlogo from "../assets/vegan.svg";

export const PageLoader = ({ pageTitle}) => {

  let currentPage;
  switch(true){
    case /food/.test(pageTitle): currentPage = <FoodMenu menuData={FOOD_MENU_DATA} features={FEATURES_MENU_DATA} logos={{gflogo, vegetarianlogo, veganlogo}} />;
      break;
    case /drinks/.test(pageTitle): currentPage = <DrinksMenu menuData={DRINKS_MENU_DATA} />;
      break;
    case /specials/.test(pageTitle): currentPage = <FeaturesMenu menuData={FOOD_MENU_DATA["happyHour"]} />;
      break;
    case /snacks/.test(pageTitle): currentPage = <BarSnacks menuData={FOOD_MENU_DATA["snacks"]} logos={{gflogo, vegetarianlogo, veganlogo}} />;
      break;
    default: console.log("something went wrong in the menu"); currentPage = <div>ERROR</div>;
  }
      
  return(
    <>
      {currentPage}
    </>
  )
}
