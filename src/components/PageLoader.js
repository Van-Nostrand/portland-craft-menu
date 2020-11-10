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
// import pcservice from "../assets/PCservice.png";
// import pctaps from "../assets/pcTaps.jpg";
// import gflogo from "../assets/Gluten_Free_symbol.svg";
// import vegetarianlogo from "../assets/Vegetarian_symbol.svg";
// import veganlogo from "../assets/Vegan_symbol.svg";
// import nutFree from "../assets/Nut_Free_symbol.svg";
// import dairyFree from "../assets/Dairy_Free_symbol.svg";

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
