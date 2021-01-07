import React, {useState, useEffect} from "react";
import { FoodMenu } from "./menu/FoodMenu";
import { DrinksMenu } from "./menu/DrinksMenu";
import { HappyHour } from "./menu/HappyHour";
import {
  WHITE_WINE, RED_WINE, BUBBLES,
  HOUSE_COCKTAILS,
  BOURBON, RYE, SCOTCH, OTHER_WHISKEY, GIN, VODKA, TEQUILA, RUM, BRANDY, OTHER_SPIRITS,
  PACKAGED_BEER,
  HAPPY_HOUR, HAPPY_HOUR_FOOD, FEATURES,
  SNACKS, OMNIVORES, HERBIVORES, LARGER, SWEETS, SIDES  
} from "./CONSTANTS";

import { apiCall } from "./apiCall";

export const PageLoader = ({ pageTitle, setCurrentDrinkSection, passRefs }) => {
  let [ menu, setMenu ] = useState();
  
  
  const getMenuData = async () => {
    let menuData = await apiCall("get", "https://restaurant-menu-backend.herokuapp.com/api/");
    
    // let menuData = await apiCall("get","http://localhost:8000/api/" );
    setMenu(menuData);
  }
  
  useEffect(() => {
    getMenuData();
  },[]);
  
  let currentPage;
  switch(true){
    case !menu :
      currentPage = <div>LOADING...</div>;
      break;
    case /food/.test(pageTitle): 
      currentPage = <FoodMenu externalData={menu[1] ? menu[1] : null} menuData={{SNACKS,OMNIVORES,HERBIVORES,LARGER,SWEETS,SIDES,FEATURES}} />;
      break;
    case /drinks/.test(pageTitle): 
      currentPage = <DrinksMenu externalData={menu[0] ? menu[0] : null} menuData={{WHITE_WINE, RED_WINE, BUBBLES, HOUSE_COCKTAILS, BOURBON, RYE, SCOTCH, OTHER_WHISKEY, GIN, VODKA, TEQUILA, OTHER_SPIRITS, RUM, BRANDY, PACKAGED_BEER}} setCurrentDrinkSection={setCurrentDrinkSection} passRefs={passRefs} />;
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
